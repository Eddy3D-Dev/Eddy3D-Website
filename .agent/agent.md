# Eddy3D Agent Instructions

This file contains rules and conventions that the AI agent (Antigravity) must follow when working on the Eddy3D Website project.

## Versioning Convention

- The Eddy3D version number follows the format `Major.Minor.Patch.RhinoVersion`.
- The last segment of the version number (e.g., `815` in `0.5.8.815`) indicates the Rhino version it was tested with.
- **Example**: `0.5.8.815` means the version was tested with **Rhino 8.15**.
- When updating `versions.md` or other documentation, always ensure the "Tested with Rhino X.YY" matches the suffix of the version being released.

## Markdown Styling

- In the changelog (`versions.md`), categories must be a bullet point followed by a colon:
  - `- Added:`
  - `- Improved:`
  - `- Fixed:`
- The actual change entries must be placed in indented blocks (**2 spaces**) under the category.
- Change entries should **NOT** have bullets.
- Each entry should be separated by a blank line.
- Remove any invisible or illegal characters (like `Â`) that may appear due to encoding issues.
