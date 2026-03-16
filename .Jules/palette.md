## 2026-03-15 - [Incorrect Image Alt Text]
**Learning:** In `docs/index.md`, there was a copy-paste error where Timur Dogan's photo alt text was incorrectly set to "Patrick Kastner". Having incorrect image alt text is bad for accessibility because users relying on screen readers receive wrong information about the image content, which can be confusing.
**Action:** When adding images, especially when copy-pasting code blocks (e.g., for team members), always double check the `alt` text to ensure it accurately describes the specific image.

## 2026-03-15 - [Copyability of Issue Templates]
**Learning:** In MkDocs, formatting issue templates as blockquotes (`>`) makes them difficult for users to copy without also grabbing the markdown formatting characters or struggling with selection. Converting templates into code blocks (` ```text `) automatically adds a "Copy" button in MkDocs Material, drastically reducing user friction when reporting issues.
**Action:** Always use code blocks for text intended to be copy-pasted (like issue templates or commands) rather than blockquotes, to leverage built-in copy functionality and ensure plain-text preservation.
