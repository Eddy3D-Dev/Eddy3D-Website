const fs = require('fs');
const path = require('path');

const htmlContent = fs.readFileSync(path.resolve(__dirname, '../docs/overrides/main.html'), 'utf-8');
const match = htmlContent.match(/const getScheme = \(\) => \{[\s\S]*?\n    \};/);

// To avoid ReferenceError for window/document inside new Function, we can execute it where window/document are defined by jsdom.
let getScheme;
beforeAll(() => {
  // Using eval to define getScheme in the current scope which has access to global window/document in jsdom

  // Since it's defined with const, it will be local to the eval if it's strict, or we can just return it.
  getScheme = new Function('window', 'document', `
    ${match[0]}
    return getScheme;
  `)(window, document);
});

describe('getScheme', () => {
  beforeEach(() => {
    // Reset window and document mocks
    window.__md_get = jest.fn();
    window.matchMedia = jest.fn().mockReturnValue({ matches: false });
    document.body.setAttribute('data-md-color-scheme', '');
  });

  it('should return slate when paletteMedia is (prefers-color-scheme) and dark mode is matched', () => {
    window.__md_get.mockReturnValue({ color: { media: '(prefers-color-scheme)' } });
    window.matchMedia.mockReturnValue({ matches: true });
    expect(getScheme()).toBe('slate');
  });

  it('should return default when paletteMedia is (prefers-color-scheme) and dark mode is not matched', () => {
    window.__md_get.mockReturnValue({ color: { media: '(prefers-color-scheme)' } });
    window.matchMedia.mockReturnValue({ matches: false });
    expect(getScheme()).toBe('default');
  });

  it('should return paletteScheme if paletteScheme is defined and media is not (prefers-color-scheme)', () => {
    window.__md_get.mockReturnValue({ color: { scheme: 'custom-scheme' } });
    expect(getScheme()).toBe('custom-scheme');
  });

  it('should fallback to data-md-color-scheme attribute if it is slate', () => {
    window.__md_get.mockReturnValue(null);
    document.body.setAttribute('data-md-color-scheme', 'slate');
    expect(getScheme()).toBe('slate');
  });

  it('should fallback to dark mode match if data-md-color-scheme is not slate and no palette', () => {
    window.__md_get.mockReturnValue(null);
    document.body.setAttribute('data-md-color-scheme', 'default');
    window.matchMedia.mockReturnValue({ matches: true });
    expect(getScheme()).toBe('slate');
  });

  it('should return default if data-md-color-scheme is not slate and no palette and dark mode not matched', () => {
    window.__md_get.mockReturnValue(null);
    document.body.setAttribute('data-md-color-scheme', 'default');
    window.matchMedia.mockReturnValue({ matches: false });
    expect(getScheme()).toBe('default');
  });
});
