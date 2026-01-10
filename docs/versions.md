0.4.18.815 (Jan. 10, 2026)


!!! Compatibility

    Tested with [**Rhino 8.15**](https://files.mcneel.com/dujour/exe/20250119/rhino_en-us_8.15.25019.13001.exe). It might work with newer Rhino versions but they are untested. It does not work with Rhino 7 due to incompatibility issues introduced by McNeel (see below). If you need to downgrade or upgrade, please check the bottom of this page for specific Rhino download links.  

## Previous Versions

Please use the form above to get access to previous Eddy3D versions. We will send you a link to your email inbox.

## Known Issues

[Eddy3D-Dev · Discussions · GitHub](https://github.com/orgs/Eddy3D-Dev/discussions)


## Changelog

### 0.4.18.815 (January 10, 2026)

- Improved:

    Probe component is improved to work without input mesh dependency to write to probe points.

### 0.4.17.815 (December 27, 2025)

- Improved:

    Better output handling for more reliable exports and processing for DatasetCurator component.
    Introduces a 'Run' boolean parameter to BrepGridPoints component to control execution and sets output to idle when not running. Updates DatasetCuratorCMP to check bounding boxes using only XY coordinates, improving handling of stacked geometries.

- Added:

    A new visualiser interface at https://eddy3d-dev.github.io/Eddy3D-Visualizer/

### 0.4.16.815 (December 19, 2025)

- Improved:

    DatasetCuratorCMP now supports multiple wind directions

    Added CSV / batch / script generation workflows

    Improved output handling for more reliable exports and processing

- Added:

    DatasetReaderCMP component to read processed CSV datasets into Grasshopper

    Supports all spatial features and simulated wind speed

    New resources, icons, and Python post-processing scripts

    Mesh settings updated to support nCellsBetweenLevels

    Project + resource files updated to include new components and assets

### 0.4.15.14 (December 13, 2025)

- Improved: Cylindrical computational domain is enhanced.

- Added: New template files added.

### 0.4.15.13 (November 9, 2025)

- Added: DatasetCurator component creates datasets ready to use by Fourier Neural Operator models. Please check the 3_SimpleWindAnalysisCylDomain_ML template file to quick start.

- Improved: Most of the template files renewed.

### 0.4.15.12 (November 6, 2025)

- Added: Brep to Grid Points component for fast generation of probe points from building Breps (has spacing option to better define the distances between probe points).

- Added: _AccBuildingMax input on Mesh Settings component to control the maximum target cell size over/around buildings for local mesh refinement.

- Improved: 3_SimpleWindAnalysis template wired to use Brep2points for sensors and passes _buildingsMax to meshing by @karadagi.

### 0.4.15.11 (October 19, 2025)

- Added: Additional inputs for finer control of cylindrical domain by @karadagi.

### 0.4.15.10 (October 4, 2025)

- Improved: Stability of cylindrical domain by @karadagi.

### 0.4.15.8 (September 14, 2025)

- Fixed: [39](https://github.com/orgs/Eddy3D-Dev/discussions/39)
- Added: [35](https://github.com/orgs/Eddy3D-Dev/discussions/35)

### 0.4.15.7 (September 12, 2025)

- Fixed: CellSize component in wrong tab
- Fixed: IndoorDomain not respecting CPUs input

### 0.4.15.6 (August 18, 2025)

- Refactored and cleaned up code for function object handling in the indoor domain, including removal of obsolete and commented-out code.
- Updated scalar transport configuration generation in ControlDict to use a new helper method.
- Standardized solver settings for AoA and Covid19 in FvSolutionDict.
- Fixed property naming in ViralEmitter.
- Updated parameter descriptions in CO2Emitter_Component and ViralEmitter_Component.
- Updated Grasshopper template metadata and viewport settings.
- Fixed: [[1]](https://github.com/orgs/Eddy3D-Dev/discussions/31#discussioncomment-14137270)

### 0.4.15.6 (August 18, 2025)

- Refactored and cleaned up code for function object handling in the indoor domain, including removal of obsolete and commented-out code.
- Updated scalar transport configuration generation in ControlDict to use a new helper method.
- Standardized solver settings for AoA and Covid19 in FvSolutionDict.
- Fixed property naming in ViralEmitter.
- Updated parameter descriptions in CO2Emitter_Component and ViralEmitter_Component.
- Updated Grasshopper template metadata and viewport settings.
- Fixed: [[1]](https://github.com/orgs/Eddy3D-Dev/discussions/31#discussioncomment-14137270)

### 0.4.15.5 (August 13, 2025)

- Refactor cell size component and improve Weibull comfort logic
- Refactored the Cell Size Grasshopper component for clarity, improved input validation, and updated parameter descriptions.
- Enhanced the wind comfort Weibull metric logic to handle edge cases, filter invalid data, and robustly select comfort thresholds.
- Updated Eddy version to 0.4.15.5, increased CPUs in test settings, and made minor template and Grasshopper document adjustments.
- Fixed: [[1]](https://github.com/orgs/Eddy3D-Dev/discussions/2#discussioncomment-13782927).

### 0.4.15.3 (Mar 27, 2025)

- Fixed [bug](https://github.com/orgs/Eddy3D-Dev/discussions/14#discussioncomment-12647741) in: `3_SimpleWindAnalysis.ghx` Template. Thank you `@YanivHatiel`

### 0.4.15.2 (Mar 10, 2025)

- Fixed: `5_PressureOnBuildingFacade.ghx` Template

### 0.4.15.1 (Jan 28, 2025)

- Fixed: Indoor probing issue

### 0.4.15.0 (Jan 21, 2025)

- Fixed: ***In Rhino 8.9 McNeel introduced a breaking change, see [here](https://discourse.mcneel.com/t/rhino-8-9-update-behavior-of-curve-extension-methods-changed/192560/5).*** If you upgraded to Rhino 8.9 already, below are links to downgrade to various versions Rhino 8.8:
- https://files.mcneel.com/dujour/exe/20240618/rhino_en-us_8.8.24170.13001.exe
- https://files.mcneel.com/dujour/exe/20240611/rhino_en-us_8.8.24163.12481.exe

### 0.4.8.0 (Mar 4, 2024)

- Fixed: [Wind Factor Component version 4.2 is throwing error in Annual wind study template](https://github.com/EnvironmentalSystemsLab/Eddy3D-Public/issues/9)

### 0.4.2.1 (Jan 21, 2024)

- Recompiled for Rhino 7, due to Rhino 8 introducing breaking changes in the UI, see below.

### 0.4.2.0 (Dec 23, 2023)

- Added: custom boundary conditions per individual wind direction.
- Added alpha/experimental Rhino 8 compatibility. R8 introduces breaking changes, see [here](https://github.com/EnvironmentalSystemsLab/Eddy3D-Public/issues/9).

### 0.4.1.4 (Nov 23, 2023)

- Fixed issue with “covid19” function object for the indoor module.

### 0.4.1.1 (Apr 29, 2022)

- New installer to fix BlueCFD 2017 [issue](https://github.com/EnvironmentalSystemsLab/Eddy3D-Public/issues/1) with Indoor module.

### 0.4.1.0 (Apr 17, 2022)

- Updated both outdoor and indoor module to [BlueCFD 2020](https://github.com/blueCFD/Core/releases/download/blueCFD-Core-2020-1/blueCFD-Core-2020-1-win64-setup.exe).
- Updated MRT calculation, still experimental.

### 0.4.0.10 (Apr 6, 2022)

- Update to [BlueCFD 2020](https://github.com/blueCFD/Core/releases/download/blueCFD-Core-2020-1/blueCFD-Core-2020-1-win64-setup.exe).
- Indoor Module
- Updated MRT calculation.
- Improved numerical robustness by [Tobias Holzmann](https://holzmann-cfd.com/).

### 0.3.8.0 (Feb 17, 2021)

- Age of air in simulation domain can be evaluated.
- Simulation of trees modeled as porous media is supported.
- MRT component was updated with the TwoPhase method, see [this publication](https://www.researchgate.net/publication/346039200_Predicting_space_usage_by_multi-objective_assessment_of_outdoor_thermal_comfort_around_a_university_campus).
- General stability has been improved.
- Culling of probing points outside of domain is now robust.

__Known issues__

- Probing on decomposed cases doesn’t work for now (need to reconstruct first).
- The latest release of Eddy3D (v0.3.8.0) currently *only* works with **Rhino 6**. McNeel made changes to the SDK in **Rhino 7** which renders the box-shaped simulation domain incompatible with v0.3.8.0. Fixed on beta branch.

### 0.3.6.3

- Fix for problem with cp probing.
- Added switch for potentialFoam initialization and mesh renumbering.
- Added Lawson, Davenport, and NEN8100 pedestrian comfort indices.

### 0.3.5

- Fix for change in latest Rhino release.
- Probing component automatically refreshes after probing has finished.
### 0.3.0

- Added: cellPoint interpolation instead of cellPointFace
- Fix: WindFactors, MRT, UTCI running
- Fix: Many bug fixes
- Added: Paraview/Residual component now select from executable of  
  choice
- Added: Template engine implemented

### 0.2.3

- Fix: turbulentEpsilon was 0 if the ABL BC was in use

### 0.2.2

- Fix: Both Box and Cylinder are converging properly when terrain is in use
- Fix: Alwas load the residuals for the first wind direction instead of wind direction “0” if the selection is empty
- Fix: locationInMesh works with Terrain for BoxDomain
- Change: fvSchemes according to SimScale
- Change: New mesh settings
- Change: Slip BC for all symmetry patches instead of symmetry
- Fix: Domain has correct size if TerrainMesh is being used
- Fix: Perim .stls were written in snappyHexMeshDict if TerrainMesh was connected
- Added: Option to adapt dimensions of box domains
- Fix: Erroneous case decomposition with BlueCFD
- Change: Renamed output of settings components
- Added: div(U) batch files

### 0.2.1

- New component: ParaView can now be opened from the canvas
- Fixes:
- The ParaView are now called as their respective wind directions which helps to distinguish them if more than one if opened in ParaView

### 0.1.0

- First release
