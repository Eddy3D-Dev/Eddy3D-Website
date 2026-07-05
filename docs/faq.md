# Frequently Asked Questions (FAQ)

Welcome to the Eddy3D FAQ! We have compiled the most common questions from our Discourse community to help you resolve issues quickly.

## Installation & Setup

**Is Eddy3D compatible with Rhino 8?**  
Yes, starting from version `1.0.2.827`, Eddy3D supports Rhino 8 (8.27 or higher) natively on both Windows and macOS. Earlier versions (0.4.x) may require legacy configurations or exhibit issues. We highly recommend upgrading to the latest version via the Rhino Package Manager (`PackageManager`).

**How do I install Eddy3D?**  
The easiest and recommended way to install Eddy3D is through the Rhino Package Manager (`PackageManager` command in Rhino). Search for "Eddy3D" and install the latest stable version.

**Why does my Eddy3D script show a "license expired" warning?**  
Older beta and pre-release builds (like 0.4.8 and earlier) contained hardcoded expiration dates. To fix this, simply upgrade to the latest Eddy3D version using the Rhino Package Manager.

**Eddy3D says it cannot find BlueCFD / The Mesh Folder Does Not Exist.**  
Starting from the new stable release, Eddy3D has transitioned from BlueCFD to **Docker/WSL** (Windows Subsystem for Linux) running **OpenFOAM 12**. If you see errors about BlueCFD or missing mesh folders, ensure you have:
1. Uninstalled BlueCFD and removed old PATH variables.
2. Switched to WSL or Docker mode in the Eddy3D Engine Settings.
3. Successfully completed the automated OpenFOAM installation via the Grasshopper components.

## Simulation Setup & Errors

**I am getting a "Your building geometries are too far from the origin" error.**  
OpenFOAM and general CFD processes rely on single-precision or specific geometric tolerances that degrade far from the origin. Always center your model around `(0, 0, 0)` in Rhino before running simulations.

**Value cannot be null (Parameter 's') / Index [-1] too low.**  
This usually indicates an issue with missing geometry, disconnected inputs, or empty lists being passed to Eddy3D components. Ensure your building and context geometries are properly baked/referenced and that list lengths match expected inputs.

**What CPU settings should I use?**  
Eddy3D supports parallel calculation. By default, it will detect your logical cores. We recommend reserving at least 1-2 cores for your OS to prevent system freezes (e.g., if you have 8 cores, set it to 6 or 7).

## Visualization & Post-Processing

**The vectors are not visible or look like random fuzzy lines.**  
Check your visualization scale settings. Often, the vector length multiplier in the visualization component is too small or too large for your scene scale. Try scaling it significantly up or down. Also, ensure your geometries are set to Meters.

**There are multiple arrows coming from one place.**  
If you probed multiple wind directions without clearing or grouping the points properly, you will see superimposed vectors. Try visualizing a single wind direction at a time or adjusting the point cull settings in the probe component.

**ParaView doesn't automatically load the simulation.**  
Ensure you have installed the recommended version of ParaView. Sometimes security settings or incorrect paths block the automatic launching. You can always open ParaView manually and load the `.foam` file generated inside your project folder.

## General Support

**Where can I download older versions?**  
While we encourage using the latest release for all new features and bug fixes, older versions can still be downloaded via the [Rhino Package Manager by selecting a specific version](https://yak.rhino3d.com/packages/Eddy3D). 

**How do I report a bug or request a feature?**  
We actively monitor the [McNeel Discourse forum](https://discourse.mcneel.com/c/plug-ins/eddy3d) under the `Eddy3D` category. Please post your questions there and include screenshots or minimal reproducible Grasshopper files!
