## 2026-03-15 - [Incorrect Image Alt Text]
**Learning:** In `docs/index.md`, there was a copy-paste error where Timur Dogan's photo alt text was incorrectly set to "Patrick Kastner". Having incorrect image alt text is bad for accessibility because users relying on screen readers receive wrong information about the image content, which can be confusing.
**Action:** When adding images, especially when copy-pasting code blocks (e.g., for team members), always double check the `alt` text to ensure it accurately describes the specific image.

## 2026-03-15 - [Copyability of Issue Templates]
**Learning:** In MkDocs, formatting issue templates as blockquotes (`>`) makes them difficult for users to copy without also grabbing the markdown formatting characters or struggling with selection. Converting templates into code blocks (` ```text `) automatically adds a "Copy" button in MkDocs Material, drastically reducing user friction when reporting issues.
**Action:** Always use code blocks for text intended to be copy-pasted (like issue templates or commands) rather than blockquotes, to leverage built-in copy functionality and ensure plain-text preservation.

## 2026-03-17 - [Missing Alt Text in MkDocs Feature Grids]
**Learning:** MkDocs feature grids often use empty image tags (`![]()`) for layout purposes. This hides important visual context for screen reader users. Every image that conveys meaning, such as UI visualizations or key features, must have a descriptive `alt` attribute.
**Action:** When adding or reviewing images in MkDocs, especially within feature grids or cards, explicitly write out descriptive `alt` text to ensure content is accessible to all users.

## 2026-03-18 - [Accessibility Impact of pointer-events: none]
**Learning:** Using CSS `pointer-events: none` on interactive or layout elements (like `<img>` tags) to prevent plugin behaviors (like image lightboxes) breaks standard accessibility and UX interactions, such as hover states. A much better pattern is utilizing plugin-specific mechanisms, such as assigning a `skip-lightbox` class to images that should be ignored by the lightbox plugin, allowing native pointer events like hover to function correctly and present visual feedback to the user.
**Action:** Avoid `pointer-events: none` to disable plugins unless strictly necessary. Check the plugin documentation for intended skip classes or exclusion properties.
## 2026-03-20 - [Redundant Alt Text with Figcaptions]
**Learning:** In `docs/index.md`, team member images within `<figure>` blocks had their names in both the `alt` attribute and the `<figcaption>`. This causes screen readers to announce the name redundantly, resulting in a poor experience. It's better to use an empty `alt=""` attribute when an adjacent visible text correctly identifies the image content.
**Action:** When adding images inside `<figure>` tags with descriptive `<figcaption>`s, set the image's `alt` attribute to `""` to avoid redundant announcements by screen readers.

## 2026-03-20 - [Missing Focus States on Custom Buttons]
**Learning:** When adding custom classes (like `.md-button`) or overriding MkDocs Material's default styling, it's easy to forget interactive pseudo-classes like `:focus-visible`. Without this, keyboard users lose track of their position on the page when navigating via the Tab key, which is a major accessibility issue.
**Action:** Whenever adding or customizing interactive elements (buttons, links), always implement a `:focus-visible` state with clear contrast (e.g., `outline: 3px solid [color]; outline-offset: 2px;`) to ensure proper keyboard navigation feedback.

## 2026-03-22 - [Accessible Visually Hidden Text]
**Learning:** Using `position: absolute; left: -999px;` or similar off-screen hacks to visually hide text (like the `h1` in `docs/index.md`) is considered an accessibility anti-pattern. While it removes the text visually, it can cause layout issues in right-to-left languages, create unexpected scrollbars, and cause screen readers to struggle with focus management if the hidden content contains interactive elements. The modern, robust `.sr-only` (screen reader only) pattern uses a combination of properties like `clip: rect(0, 0, 0, 0);` and `width: 1px; height: 1px;` to safely hide content visually while keeping it perfectly accessible to assistive technologies.
**Action:** Always use the standard visually-hidden/sr-only CSS pattern instead of off-screen positioning (`left: -9999px`) or `display: none` (which hides content from screen readers entirely) when you need to hide text visually but preserve it for assistive technologies.

## 2026-03-23 - [Missing H1 Tags on Visually Custom Pages]
**Learning:** Even when a page's visual design calls for the main title to be hidden (like on a landing page where a logo image is used instead), a level 1 heading (`<h1>` or `#`) is still strictly required for screen reader users to understand the page's primary topic and maintain a valid document outline. The existing CSS (`.md-typeset h1` using the `.sr-only` pattern) was already in place to visually hide it, but the actual markdown heading was missing.
**Action:** Never skip the main `# Heading` on any page, even custom landing pages. If it shouldn't be visible, apply a `.sr-only` utility class or visually-hidden CSS to the heading rather than omitting it entirely.

## 2026-03-24 - [Missing Hover States on Custom CTA Buttons]
**Learning:** When adding custom classes (like `.md-button`) or overriding MkDocs Material's default styling, it's easy to forget interactive pseudo-classes like `:hover`. Without this, users lack visual feedback when interacting with buttons. Adding a simple transition (e.g. `transform`, `box-shadow`) drastically improves the tactile feel of the UI.
**Action:** Whenever adding or customizing interactive elements (buttons, links), always implement a `:hover` state and consider small transitions (like moving the button up slightly with `transform: translateY(-2px);` or adding a `box-shadow`) to maintain a responsive, tactile UX.

## 2026-03-24 - [Ambiguous Link Text in Screen Reader Link Lists]
**Learning:** Links like "Get Started", "Download", or "Learn More" make perfect sense visually due to surrounding context. However, screen reader users frequently navigate a page by pulling up a list of all links. Out of context, these links become ambiguous. Adding a descriptive `aria-label` (e.g., `aria-label="Download Eddy3D"`) preserves the clean visual design while providing complete context to assistive technologies.
**Action:** Whenever creating call-to-action buttons with generic text, always add a descriptive `aria-label` to provide context for users navigating out-of-context.

## 2026-03-26 - [Ambiguous Repeating Links in Markdown Tables]
**Learning:** Tables summarizing repeated items often use concise, generic link text like "3DM", "GHX", "Install", or "Release notes" in every row. While visually understandable due to column and row headers, these repeating links are confusing for screen reader users navigating via a link list, as they lack context. MkDocs supports inline attribute lists (e.g., `[Link Text](url){ aria-label="Descriptive Text" }`), which allows for adding descriptive context to these links without cluttering the visual table.
**Action:** When creating or maintaining markdown tables with repeating, generic link text, use the `{ aria-label="..." }` syntax to provide unique, row-specific context for each link.
