/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

// Extract the JS code from main.html
const htmlContent = fs.readFileSync(path.resolve(__dirname, '../docs/overrides/main.html'), 'utf-8');

// We need to extract the `updateFavicons` function and related logic.
const updateFaviconsMatch = htmlContent.match(/const updateFavicons = \(asset\) => \{[\s\S]*?\n    \};/);
if (!updateFaviconsMatch) {
  throw new Error("Could not find updateFavicons function in main.html");
}

const updateFaviconsCode = updateFaviconsMatch[0];

// In order to make updateFavicons available globally, we can turn it into an assignment to a global variable
const codeToEvaluate = updateFaviconsCode.replace("const updateFavicons = ", "global.updateFavicons = ");

// Evaluate the function
eval(codeToEvaluate);

describe('updateFavicons', () => {
  beforeEach(() => {
    // Clear DOM head before each test
    document.head.innerHTML = '';
  });

  it('should add a new favicon when none exists', () => {
    const asset = 'assets/new-favicon.svg';
    global.updateFavicons(asset);

    const links = document.head.querySelectorAll("link[rel='icon'], link[rel='shortcut icon']");
    expect(links.length).toBe(1);
    expect(links[0].getAttribute('href')).toBe(asset);
    expect(links[0].rel).toBe('icon');
    expect(links[0].type).toBe('image/svg+xml');
  });

  it('should remove existing favicon and add a new one when a different favicon exists', () => {
    // Setup existing different favicon
    const existingLink = document.createElement('link');
    existingLink.rel = 'icon';
    existingLink.setAttribute('href', 'assets/old-favicon.svg');
    document.head.appendChild(existingLink);

    const asset = 'assets/new-favicon.svg';
    global.updateFavicons(asset);

    const links = document.head.querySelectorAll("link[rel='icon'], link[rel='shortcut icon']");
    expect(links.length).toBe(1);
    expect(links[0].getAttribute('href')).toBe(asset);
  });

  it('should remove all favicons and add the new one when multiple favicons exist', () => {
    // Setup multiple existing favicons
    const link1 = document.createElement('link');
    link1.rel = 'icon';
    link1.setAttribute('href', 'assets/old-favicon1.svg');
    document.head.appendChild(link1);

    const link2 = document.createElement('link');
    link2.rel = 'shortcut icon';
    link2.setAttribute('href', 'assets/old-favicon2.svg');
    document.head.appendChild(link2);

    const asset = 'assets/new-favicon.svg';
    global.updateFavicons(asset);

    const links = document.head.querySelectorAll("link[rel='icon'], link[rel='shortcut icon']");
    expect(links.length).toBe(1);
    expect(links[0].getAttribute('href')).toBe(asset);
  });

  it('should return early and not modify DOM when exactly one matching favicon exists', () => {
    const asset = 'assets/new-favicon.svg';

    // Setup matching existing favicon
    const existingLink = document.createElement('link');
    existingLink.rel = 'icon';
    existingLink.setAttribute('href', asset);
    document.head.appendChild(existingLink);

    // Spy on appendChild and remove
    const appendSpy = jest.spyOn(document.head, 'appendChild');
    const removeSpy = jest.spyOn(existingLink, 'remove');

    global.updateFavicons(asset);

    const links = document.head.querySelectorAll("link[rel='icon'], link[rel='shortcut icon']");
    expect(links.length).toBe(1);
    expect(links[0].getAttribute('href')).toBe(asset);

    // Ensure no DOM modifications happened
    expect(appendSpy).not.toHaveBeenCalled();
    expect(removeSpy).not.toHaveBeenCalled();

    appendSpy.mockRestore();
    removeSpy.mockRestore();
  });
});
