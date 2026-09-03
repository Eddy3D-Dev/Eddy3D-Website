# Download

## Current Versions

- **Package page:** [Rhino Packages](https://rhinopackages.github.io/?search=eddy3d&sort=2&p=Eddy3D)
- **Current version:** `1.12.0.827` (September 2, 2026)

[![Total downloads](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fyak.rhino3d.com%2Fpackages%2FEddy3D&label=total%20downloads&query=%24.download_count)](https://yak.rhino3d.com/packages/Eddy3D)

Install **Eddy3D** from the Rhino Package Manager: run `PackageManager` in Rhino 8 and search for **`Eddy3D`**.

| Channel | Version | Date | Platform | Rhino | Downloads | Install | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Stable release | `1.12.0.827` | September 2, 2026 | Windows / Mac | 8.27 | 0 | [Install via Rhino Package Manager](https://rhinopackages.github.io/?search=eddy3d&sort=2&p=Eddy3D){ aria-label="Install Eddy3D 1.12.0.827 via the Rhino Package Manager" } | [Changelog](#changelog) |
| Pre-release (beta) | `1.12.0-beta.827` | September 2, 2026 | Windows / Mac | 8.27 | 0 | [Install via Rhino Package Manager](https://rhinopackages.github.io/?search=eddy3d&sort=2&p=Eddy3D){ aria-label="Install Eddy3D 1.12.0-beta.827 via the Rhino Package Manager" } | Tick *Include pre-releases* in the Package Manager |

All modules &mdash; Outdoor, Outdoor+, Indoor, MRT, and FluidX3D &mdash; now ship in the single **Eddy3D** package on **Windows and macOS**. Depending on your use case, you may need additional software (BlueCFD, Radiance), [see documentation](https://docs.eddy3d.com){ aria-label="See documentation for additional software requirements" }.

---

## Release Notes

{%
    include-markdown "versions.md"
%}

---

## Previous Rhino Versions

Use the [**Rhino version selection page**](https://rhinoversions.github.io/?version=8.27.26019.16022&locale=en-us).

<style>
    /* Application header should be static for the landing page */
    .md-header {
      position: initial;
    }
    /* Hide navigation */
    @media screen and (min-width: 76.25em) {
      .md-sidebar--primary {
        display: none;
      }
    }
    /* Keep only top 2 levels in the right TOC */
    .md-sidebar--secondary .md-nav__list .md-nav__list { display: none; }
</style>
