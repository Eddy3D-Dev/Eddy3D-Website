---
hide:
  - navigation
  - toc
---
# FAQ & Support

We are currently collecting bugs and requests for new features on [Github](https://github.com/orgs/Eddy3D-Dev/discussions){ aria-label="Visit Eddy3D GitHub Discussions" }, where people help each other out with questions that go beyond our documentation. Please feel free to start a new thread if you have any questions!

If your problem is urgent, please also notify us via e-mail as we are unable to monitor new posts 24/7.

---

## How to increase the probability of receiving fast and helpful answers
 
Please include the following in your post:

1. A clear question or intent
2. Clear description of your problem, ideally with a screenshot.
3. What have you done so far to solve it?
4. Please add a minimal Grasshopper file (`.gh` or `.ghx`) that contains only components relevant to your problem with all data internalized.
5. Please add your Eddy3D Version, Rhino Version, and Windows Version.

**Example Template:**
```text
Hi,

This is my question.
—
OS: Windows 11 Pro
Eddy3D Version: 1.0.2.827
Rhino Version: 8.27.26019.16022
```

---

## FAQ

We have compiled the most common questions from our Discourse community to help you resolve issues quickly.

### 1. Installation, Setup, and Compatibility

??? note "Is Eddy3D compatible with Rhino 8?"
    Yes, starting from version `1.0.2.827`, Eddy3D supports Rhino 8 (8.27 or higher) natively on both Windows and macOS. Earlier versions (0.4.x) may require legacy configurations or exhibit issues in Rhino 8. We highly recommend upgrading to the latest version via the Rhino Package Manager (`PackageManager`).

??? note "Does Eddy3D support macOS?"
    Yes! With the unified release (`1.0.2.827` and higher), Eddy3D is available cross-platform for both Windows and macOS users directly from the Rhino Package Manager.

??? note "How do I install Eddy3D and where are the files located?"
    The easiest and recommended way to install Eddy3D is through the Rhino Package Manager (`PackageManager` command in Rhino). Search for "Eddy3D" and install the latest stable version. Yak (the package manager) automatically manages the folder location, usually under `%APPDATA%\McNeel\Rhinoceros\packages\` on Windows and `~/Library/Application Support/McNeel/Rhinoceros/packages/` on macOS.

??? note "Eddy3D is not showing up in Grasshopper after installation"
    Ensure you have completely restarted Rhino and Grasshopper after installing via the Package Manager. Check that you are not running multiple conflicting versions. Sometimes running the `_GrasshopperDeveloperSettings` command and unchecking "Memory Load" can resolve conflicts.

??? note "Why does my Eddy3D script show a 'license expired' warning?"
    Older beta and pre-release builds (like 0.4.8 and earlier) contained hardcoded expiration dates. To fix this, simply upgrade to the latest Eddy3D version using the Rhino Package Manager. 

??? note "Version 0.4.8.0 requires admin rights / Rhino 7 run with Admin Issue"
    Older installer-based versions of Eddy3D (like 0.4.x) required admin rights because they installed BlueCFD globally. The modern Yak packages (0.6.x and higher) **do not** require admin rights to install the Grasshopper plugin, though WSL OpenFOAM setup may prompt for initial elevation.

??? note "How do I access previous versions of Eddy3D?"
    While we encourage using the latest release for all new features and bug fixes, older versions can be downloaded [here](https://eddycfd.uber.space/download/download.php). Recent releases can also be found via the [Rhino Package Manager](https://yak.rhino3d.com/packages/Eddy3D).

??? note "Eddy3D is not able to find BlueCFD / I get Docker errors"
    Starting from the unified stable release, Eddy3D has transitioned from BlueCFD to **WSL (Windows Subsystem for Linux) / Docker** running **OpenFOAM 12**. If you see errors about BlueCFD, ensure you have:
    1. Uninstalled BlueCFD and removed old PATH variables.
    2. Switched to WSL or Docker mode in the Eddy3D Engine Settings.
    3. Successfully completed the automated OpenFOAM installation via the Grasshopper components.

### 2. Geometry, Meshing & Domain Generation

??? note "Error says 'Your building geometries are too far from the origin'"
    OpenFOAM and general CFD processes rely on specific geometric tolerances that degrade far from the origin. Always center your model around `(0, 0, 0)` in Rhino before generating your bounding box or running simulations.

??? note "The mesh folder does not exist. Please create a mesh first"
    This error means the mesh generation step either failed or hasn't been run. Ensure you have successfully executed the `Run Mesh` component and that it completed without OpenFOAM errors before attempting to run the simulation.

??? note "Eddy3D Bounding Box domain not generating / Fails for East-West on Terrain"
    When combining a cylindrical domain with terrain, edge intersections can fail if the geometry isn't aligned or overlaps the domain boundaries exactly. Ensure your terrain extends well past the bounding box and try slightly adjusting your base geometry's elevation.

??? note "Missing Surfaces / Decompose and Scale Up Mesh"
    If decomposed mesh components are missing surfaces, ensure your input geometry consists of closed, valid polysurfaces. Naked edges or non-manifold geometry can cause snappyHexMesh to fail at snapping to specific regions.

??? note "Value cannot be null (Parameter 's') / Input parameter index [-1] too low"
    This usually indicates an issue with missing geometry, disconnected inputs, or empty lists being passed to Eddy3D components. Ensure your building and context geometries are properly baked/referenced and that list lengths match expected inputs.

??? note "How do I include trees and porous zones?"
    In Eddy3D, trees are modeled as porous zones using **Darcy-Forchheimer coefficients** (D and F) rather than solid geometry. Assign tree volumes — simple 3D objects like thick cylinders or ellipsoids — as inputs to the Tree component. Trunks can be modeled with very high D and F values (very low permeability) so the crown floats without requiring solid trunk geometry.

    Keep in mind:
    - Per-tree refinement levels are not currently supported; use the `AccBuilding` parameter for uniform surface accuracy.
    - Too many separate dense tree instances significantly increase mesh complexity and can cause crashes. Group crowns into larger volumes where possible.
    - Directional variation of surface roughness (z₀) is not yet supported.

??? note "What units does Eddy3D require?"
    Eddy3D requires all geometry to be in **meters**. Using millimeters or other units will cause simulations to fail or produce incorrect results. Before running any analysis, confirm your Rhino document units are set to meters and your model is at real-world scale. A grid density of 10–100 cells per meter is typical for architectural elements.

??? note "Can I reuse the same mesh for different wind speeds or directions?"
    - **Different wind speed, same direction**: Yes — wind speed has no effect on mesh geometry. Reuse the same mesh and re-run only the solver.
    - **Different wind direction**: No — each direction requires its own mesh, because the domain orientation and inlet/outlet face assignments are direction-dependent. Run separate mesh and solve steps per direction.

??? note "Can I run a terrain-only simulation without buildings?"
    Yes. Keep the building geometry input populated — you can use the terrain surface itself as a placeholder if there are no structures. When probing results over sloped terrain, offset probe points upward from the actual terrain surface rather than placing them on a flat horizontal plane at z=0, or you will sample incorrect values inside the terrain volume.

### 3. Simulation Configuration

??? note "What CPU settings should I use? / Errors in parallel calculation"
    Eddy3D supports parallel calculation via OpenFOAM MPI. By default, it will detect your logical cores. We recommend reserving at least 1-2 cores for your OS to prevent system freezes. Setting it higher than your physical core count will slow down the simulation.

??? note "Simulation keeps rerunning / Optimizing with Evolutionary Engines"
    If you are using evolutionary solvers (like Galapagos or Wallacei), ensure you use the synchronous run components and toggle the Boolean correctly so Grasshopper waits for the CFD solve to finish before evaluating the next genome.

??? note "Pressure residuals stalling / Solution not converging"
    If residuals stall (e.g., at $10^{-2}$) or oscillate, the most common root cause is **poor mesh quality around building geometry** — specifically concave cells and high non-orthogonality (>65°) caused by jagged or uncleaned surface geometry. Increasing iterations beyond 4000 will not fix a fundamentally diverging case.

    Diagnostic checklist:
    - Run `checkMesh` and look for concave cells, high non-orthogonality, and low face-flatness values. Even a few thousand concave cells can block convergence.
    - Clean input geometry before importing: remove naked edges, non-manifold faces, and sharp extrusion artifacts.
    - Try the **Robust** mesh mode in Eddy3D's mesh settings for more conservative snapping tolerances.
    - Ensure your domain is large enough for the wake to dissipate (≥5H clearance downwind is a common minimum).
    - For k-ε with wall functions, target y⁺ between 30 and 300 on wall-adjacent cells.

??? note "Weather Files (EPW) & Adjusting Wind Directions"
    Eddy3D automatically extracts dominant wind directions from the `.epw` file. If you wish to filter for specific seasons, use the Ladybug tools to parse the EPW file first, and feed the filtered wind profile data directly into Eddy3D.

??? note "Customized Inlet Boundary / Atmospheric Boundary Layer (ABL) vs Uniform Flow"
    By default, Eddy3D uses an Atmospheric Boundary Layer profile (logarithmic wind speed increase with height). You can explicitly override this by setting a uniform flow profile or modifying the `U` dictionary in the `0` folder prior to running the simulation.

??? note "Template 5 PressureOnBuildingFacade fails to load"
    We occasionally update templates to match the latest OpenFOAM configurations. If a template is failing to load, try deleting the local `Eddy3D-Templates` folder in your Documents directory and let the plugin re-download the latest templates from GitHub.

??? note "Command Error 1726 / MPI Run Error / simpleFoam abort code 1"
    These are fatal OpenFOAM crashes. They usually happen due to:
    - Out of Memory (OOM) errors during meshing or solving.
    - Floating point exceptions (divergence) in the first few iterations due to bad mesh cells. Check your `log.simpleFoam` for exact details.

??? note "Does Eddy3D support custom or measured wind profiles?"
    Yes. The [Manual Inflow Profile](https://docs.eddy3d.com/components/Manual_Inflow_Profile/) component accepts a vertical profile as lists of normalized heights (`z/zR`), velocities (`U/UR`), and turbulent kinetic energies (`k/UR²`), together with the boundary layer height `zR` and reference velocity `UR`. Eddy3D then writes `fixedProfile` inlet conditions for `U`, `k`, and `epsilon` instead of the parametric log-law ABL. To use a measured profile from an external file (CSV, Excel, txt), read the file with standard Grasshopper file/text components and feed the columns into the component — no manual editing of the `0/U` file is needed, and the profile survives mesh or solver re-runs.

### 4. Post-Processing & Visualization

??? note "The vectors are not visible / Random fuzzy vectors"
    Check your visualization scale settings. Often, the vector length multiplier in the visualization component is too small or too large for your scene scale. Try scaling it significantly up or down. Also, ensure your geometries are modeled in Meters.

??? note "There are multiple arrows coming from one place"
    If you probed multiple wind directions without clearing or grouping the points properly, you will see superimposed vectors. Try visualizing a single wind direction at a time or adjusting the point cull settings in the probe component.

??? note "Probing Result Magnitude / Unreasonable Values / Velocity Validation"
    If wind speeds are returning in the thousands, you might have probed exactly inside a building volume or boundary layer where OpenFOAM creates singularity artifacts. Adjust your probe height slightly (e.g., 1.5m above ground instead of exactly on it).

??? note "'Failed to find the path' / Can't read U File / VisProbes doesn't work"
    This means the OpenFOAM probe data wasn't successfully written, or the simulation crashed before it reached the probe time. Check the OpenFOAM logs in the component's output to verify the simulation completed.

??? note "Flow rates centers do not match probing points"
    Ensure you are using the exact same mesh reference that was used during the solve. Regenerating the grid after solving will misalign the indices.

??? note "Grid is visible in results / Heatmap Results"
    When viewing heatmaps or colored surfaces, if you see the underlying triangular grid, you can toggle Rhino's display mode to hide mesh edges, or adjust the mesh smoothing parameters in the display component.

??? note "Annual Wind Analysis & Comfort Output Discrepancies"
    Annual wind comfort requires simulating at least 8 to 16 wind directions and compounding them with EPW frequency data. If a specific direction is missing or failed to run, the entire comfort calculation will be skewed. Ensure every wind direction folder contains valid results.

??? note "How can I extract data or import results to Excel?"
    Eddy3D includes components to write probing results directly to CSV format. Once the simulation is done and probed, connect the data tree to a `CSV Writer` component to export the values for Excel.

??? note "Pressure units and Pressure Coefficients (Cp)"
    In OpenFOAM's incompressible solvers (like `simpleFoam`), pressure is represented as kinematic pressure ($p / \rho$) in units of $m^2/s^2$. To get physical pressure in Pascals, you must multiply by the density of air ($\sim 1.225 \text{ kg/m}^3$). Eddy3D's Cp components calculate the dimensionless coefficient automatically.

??? note "ParaView doesn't automatically load the simulation"
    Ensure you have installed a compatible version of ParaView. Sometimes security settings or incorrect PATHs block the automatic launching. You can always open ParaView manually, navigate to your project folder, and create an empty `case.foam` file to load the results.

??? note "How do I load a previous simulation result / results from a different folder?"
    Connect the path to your Eddy3D **analysis folder** to the `Dir` input of the post-processing components. Point to the folder, not to an individual result file. If you reopen a Grasshopper file where the folder path is already connected, re-enabling the component will reload the previous results. This works with paths on any drive or network location as long as the simulation folder structure is intact.

??? note "How do I visualize airflow velocity on building facades (instead of pressure coefficients)?"
    Eddy3D's default templates display pressure coefficient (Cp) on building surfaces and velocity on horizontal cut planes only. To extract velocity on a facade:
    1. Open ParaView and load your case via `case.foam`.
    2. Apply the **Extract Surface** filter to isolate the building geometry.
    3. Sample the `U` field on that surface to get velocity magnitude and direction per face.
    There is currently no native Eddy3D component for facade velocity extraction — ParaView is required.

??? note "How do I couple exterior Eddy3D pressure results to an interior CFD model?"
    The standard workflow:
    1. Run the external simulation in Eddy3D and extract Cp at each window or opening centroid.
    2. If pressure is non-uniform across an opening, compute an area-weighted average Cp for that opening.
    3. Back-calculate physical pressure: `P = Cp × 0.5 × ρ × U_ref²` where ρ ≈ 1.225 kg/m³ and `U_ref` is the reference velocity at building height.
    4. Apply the resulting pressure values as boundary conditions in your interior CFD tool.
    Use the same `U_ref` in both the external and internal models to maintain consistency.
