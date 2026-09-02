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
Eddy3D Version: 1.10.0.827
Rhino Version: 8.27.26019.16022
```

---

## FAQ

We have compiled the most common questions from the [GitHub Discussions](https://github.com/orgs/Eddy3D-Dev/discussions) and the [McNeel forum](https://discourse.mcneel.com/c/grasshopper/eddy3d/){ aria-label="Eddy3D category on the McNeel forum" } (2024–2026) to help you resolve issues quickly. Every component mentioned below has its own page in the [component reference](https://docs.eddy3d.com/latest/Components/){ aria-label="Eddy3D component reference" }.

### 1. Installation, Setup, and Compatibility

??? note "Is Eddy3D compatible with Rhino 8?"
    Yes. Since the unified `1.0.2.827` release, Eddy3D is a single package for Rhino 8 on Windows and macOS. Each release is tested against one Rhino service release — the last number of the version encodes it (`…827` = Rhino 8.27) — and usually works on newer ones. Earlier versions (0.4.x) were installer-based and may exhibit issues in Rhino 8. Upgrade via the Rhino Package Manager (`PackageManager` command).

??? note "Does Eddy3D work with Rhino 7 (or Rhino 6)?"
    No. Rhino 7 reached end of life and the 1.x line is built for Rhino 8 only. Old 0.x installers for Rhino 6/7 are still listed on the [versions page](versions.md) but are unsupported and are missing most of the current features. If you are stuck on Rhino 7 for licensing reasons, ask your reseller about the Rhino 8 upgrade before investing time in an unsupported version.

??? note "Does Eddy3D support macOS?"
    Yes. With the unified release (`1.0.2.827` and higher), Eddy3D is available cross-platform from the Rhino Package Manager. On macOS the OpenFOAM, OpenLB, Radiance/EnergyPlus and PALM engines run in containers (Podman or Docker Desktop); FluidX3D builds natively against Apple's OpenCL. Apple Silicon is supported — the solver images are published for arm64, so nothing runs under emulation.

??? note "Stable or beta — which channel should I install?"
    Both channels ship from the same Package Manager entry. The **stable** channel (`1.10.0.827` style versions) is what you want for teaching, production work and anything a saved definition depends on. The **beta** channel (`1.12.0-beta.827` style) carries new features first; tick *Include pre-releases* in the Package Manager to see it. A beta can rename or reorder component inputs between versions, and in Grasshopper that can silently re-route wires in a saved definition. Update notifications follow the channel you installed: stable users are never offered a beta.

??? note "How do I install Eddy3D and where are the files located?"
    Install through the Rhino Package Manager (`PackageManager` command), search for "Eddy3D" and install the latest stable version. Yak manages the folder, usually `%APPDATA%\McNeel\Rhinoceros\packages\8.0\Eddy3D\` on Windows and `~/Library/Application Support/McNeel/Rhinoceros/packages/8.0/Eddy3D/` on macOS. Simulation cases default to `~/Eddy3D/` (e.g. `Eddy3D/Outdoor`, `Eddy3D/Indoor`, `Eddy3D/Cases/LBM`); engines that Eddy3D downloads live under `~/Eddy3D/Engines/`.

??? note "Eddy3D is not showing up in Grasshopper after installation"
    **Restart Rhino.** Grasshopper scans its component libraries once per session, so a package installed while Rhino is open is not visible until the next start. Then check that you are not running two copies — an old 0.x installer left an `Eddy3D.ghlink` in `%APPDATA%\Grasshopper\Libraries\`; delete it, because a stale plugin build can shadow the package version. If Grasshopper reports that a `.gha` failed to load, copy the exact message into a [new discussion](https://github.com/orgs/Eddy3D-Dev/discussions).

??? note "Eddy3D is not showing up in the Package Manager"
    This is typically caused by running an outdated version of Rhino. Each Eddy3D release requires a minimum Rhino service release — the last digits of the version number encode it (e.g. `1.10.0.827` requires Rhino 8.27 or newer). The Package Manager hides packages that need a newer Rhino than the one installed, so Eddy3D simply does not appear. Update Rhino via `Help → Check for Updates...` (Windows) or `Rhinoceros → Check for Updates...` (macOS), restart, and search again. Beta versions only show with *Include pre-releases* ticked.

??? note "Grasshopper says components are missing / shows white boxes when I open an old definition"
    Version 1.x is a rewrite; definitions saved with a 0.x installer version (or with the earlier separate Outdoor / MRT / UMCF plugins) reference component IDs that no longer exist, so Grasshopper draws them as unresolved placeholders and offers to "download" plugins it cannot find. There is no automatic migration. Rebuild the definition from the current [templates](https://docs.eddy3d.com/latest/components/Select_Template/) — the workflow shape is the same, and the [component reference](https://docs.eddy3d.com/latest/Components/) lets you look up every input without opening Grasshopper.

??? note "\"Solution exception: Input parameter index [-1] too low\""
    Grasshopper stores input **names** in the saved file. When a component's inputs are renamed between versions, the saved wires cannot be matched and the component throws this error. Drop a fresh copy of the same component from the ribbon, reconnect its inputs, and delete the old one. Definitions saved with a current version are protected by load-time migrations, so this mainly affects files from 0.x betas.

??? note "\"Failed to install missing components\" when opening a template"
    The objects Grasshopper wants to download date from when Outdoor, MRT/Radiance and UMCF were separate plugins. Since `1.0.2.827` everything ships in the single `Eddy3D` package, so there is nothing to download. Restart Rhino after installing or updating the package (Grasshopper scans libraries once per session), then use *Select Template → Force Refresh Main List* so you get the template branch that matches your installed version.

??? note "Grasshopper crashes on start after installing Eddy3D (System.Resources.Extensions)"
    A packaging bug in `1.4.0.827` shipped a copy of an assembly Rhino already carries. Update to `1.4.1.827` or newer. If Grasshopper then reports it could not load `System.Runtime, Version=8.0.0.0`, your Rhino installation is running on an older .NET runtime than the plugin expects — update Rhino to the service release named on the [versions page](versions.md).

??? note "Do I need admin rights? / Installing in a lab or on a corporate machine"
    The Grasshopper package installs per user and needs no elevation. Elevation is required exactly three times, once per machine: the EnergyPlus vendor installer, blueCFD-Core 2024, and enabling WSL. For managed labs, IT can run the prerequisite script once (`installer/prereqs/Install-Eddy3DPrereqs.ps1` in the [repository](https://github.com/Eddy3D-Dev/Eddy3D)) or drive the same setup catalog headlessly with `eddy3d-cli setup install …`; after that, no user ever sees an elevation prompt. Every user still installs the package from the Package Manager under their own account — Yak packages are per-user by design.

??? note "Which engine runs the CFD, and how do I choose it?"
    The OpenFOAM engine is a property of the **study**: the *Engine* input on the [Outdoor Case](https://docs.eddy3d.com/latest/components/Outdoor_Case/) component (and the equivalent on the indoor and Outdoor+ cases) offers **BlueCFD**, **WSL** (Windows only) and **Containerized** (Podman or Docker Desktop). Wind Run, Write Run Scripts, Probe and Streamlines all read it from the case, and it is written into the study so a reopened case keeps the engine it was solved with. On macOS the only option is Containerized. Check what is present on your machine with the [Eddy3D Setup](https://docs.eddy3d.com/latest/components/Eddy3D_Setup/) window.

??? note "Eddy3D is not able to find BlueCFD / \"docker is not recognized\""
    Three things to check:

    1. **blueCFD-Core 2024-1** (OpenFOAM 12) is required. blueCFD 2017 and 2020 are not supported anymore; Eddy3D looks for the `setvars_OF12.bat` marker of a 2024 install.
    2. **Install it in a path without spaces**, e.g. `C:\blueCFD-Core\2024`. A path such as `C:\Program Files\blueCFD…` breaks the generated scripts; Outdoor Case and the setup window warn about it.
    3. If the run window says `docker is not recognized`, the study's Engine is set to Containerized but no container engine is installed. Either install Podman (preferred) or Docker Desktop, or switch the Engine input to BlueCFD.

    Old 0.x definitions can also carry a stale engine value; re-place the case component and set the Engine explicitly.

??? note "The mesh and simulation windows open for a second and close / \"The mesh folder does not exist\""
    The console closed because the engine could not start, not because meshing was quick. The Probe component then reports that `constant/polyMesh` is missing. Open the case folder and read the newest `NN_*.txt` log (e.g. `01_blockMesh.txt`); standard error is captured into the same file. The usual causes are an unsupported blueCFD (2017/2020), a blueCFD path with spaces, a missing container engine, or Rhino units other than meters. The [Meshing Progress](https://docs.eddy3d.com/latest/components/Meshing_Progress/) and [Parse Case Logs](https://docs.eddy3d.com/latest/components/Parse_Case_Logs/) components show the same information on the canvas.

??? note "Meshing takes hours or never finishes on blueCFD"
    snappyHexMesh under blueCFD's MinGW build can stall on fine meshes (a known [blueCFD-Core issue](https://github.com/blueCFD/Core/issues/143)). Kill the window, and either coarsen the cell size (0.5 m instead of 0.25 m, for instance) or switch the study's Engine to Containerized, which runs the standard Linux OpenFOAM 12 build and does not have this problem.

??? note "Which container runtime should I use — Podman or Docker?"
    Both run the same images. Eddy3D prefers **Podman** (license-free, no Docker Desktop subscription) and falls back to Docker Desktop. Containers run with networking disabled; only the image pull needs internet. Two rules: the working directory must not contain spaces (it becomes a bind mount — the default `~/Eddy3D/…` folders are fine), and on macOS or Docker Desktop the daemon runs in a VM whose CPU allotment is often 1–2 cores — the run component warns and names the fix (`podman machine set --cpus N`, or Docker Desktop → Settings → Resources).

??? note "Why does my Eddy3D script show a 'license expired' warning?"
    Older beta and pre-release builds (like 0.4.8 and earlier) contained hardcoded expiration dates. Upgrade to the latest Eddy3D version using the Rhino Package Manager.

??? note "How do I access previous versions of Eddy3D?"
    Recent releases and the full changelog are on the [versions page](versions.md) and in the [Rhino Package Manager](https://yak.rhino3d.com/packages/Eddy3D). Legacy 0.x installers can be downloaded [here](https://eddycfd.uber.space/download/download.php). We encourage using the latest release: bugs reported against 0.x are only fixed in 1.x.

??? note "Where are the templates? The Select Template list is empty."
    [Select Template](https://docs.eddy3d.com/latest/components/Select_Template/) reads the [Eddy3D-Templates](https://github.com/Eddy3D-Dev/Eddy3D-Templates) repository on the branch that matches your installed version and caches the files under `%APPDATA%\Eddy3D\Templates\`. Templates are grouped as Outdoor (OpenFOAM, LBM, ML, Microclimate), Outdoor+, Indoor (natural ventilation, CO2 occupancy, breathing manikin, thermal comfort) and Misc. If the list is empty or stale, right-click the component and choose *Force Refresh Main List*; the context menu also shows which branch it is reading. Templates for a **newer** version than the one installed will not open cleanly — update the package first.

### 2. Geometry, Meshing & Domain Generation

??? note "What units does Eddy3D require?"
    All geometry must be in **meters**. Millimeters or feet make the domain thousands of "meters" wide, the probes collapse onto one spot ("multiple arrows from one place") and the solver diverges. Set the Rhino document units to meters and model at real-world scale before running anything.

??? note "Error says 'Your building geometries are too far from the origin'"
    OpenFOAM and general CFD processes rely on specific geometric tolerances that degrade far from the origin. Center your model around `(0, 0, 0)` in Rhino before generating the domain or running simulations.

??? note "How big should the simulation domain be?"
    The [Box Domain](https://docs.eddy3d.com/latest/components/Box_Domain/) defaults follow the COST 732 / Franke best practice: 5H upstream, 15H downstream, 5H to the sides and top, with H the tallest building. Leave the extensions at `-1` to get these automatically. The [Cylinder Domain](https://docs.eddy3d.com/latest/components/Cylinder_Domain/) sizes its radius to keep frontal blockage under 3 % (ASCE/SEI Prestandard), and the case component checks the blockage of whatever you write. Shrinking the domain to save cells is the most common cause of "unexpected acceleration" at the edge of the probe plane.

??? note "Box domain or cylinder domain?"
    Use the **box** for one or two directions: each direction gets its own rotated mesh. Use the **cylinder** for multi-direction and annual studies: one mesh serves every direction, and the cylinder's side faces switch between inlet and outlet per direction, so eight or sixteen directions cost one meshing run. The cylinder's radial grading keeps the far field coarse.

??? note "Can I refine the mesh locally (a tower wake, a courtyard, an area of interest)?"
    Yes. The [Refinement Region](https://docs.eddy3d.com/latest/components/Refinement_Region/) component takes a box, closed Brep, mesh or open surface plus a snappyHexMesh level and a mode (inside / outside / distance). Wire its *Extras* output into the case component's *Extras* input so the region is written every time the case is written. It works on wind, Outdoor+, indoor and CHT cases. Separate accuracy levels per building are not supported; use a region around the buildings you care about instead.

??? note "The mesh folder does not exist. Please create a mesh first"
    Meshing either has not been run or failed. Run *Mesh* (or *Run All*) and check the console and the `NN_*.txt` logs in the case folder before running the solver. See "The mesh and simulation windows open for a second and close" above for the common causes.

??? note "Eddy3D Bounding Box domain not generating / Fails for East-West on Terrain"
    When combining a domain with terrain, edge intersections fail if the terrain does not extend past the domain or overlaps its boundary exactly. Make the terrain considerably larger than the domain footprint and keep it continuous (no gaps or overlapping patches). The [Check Geometry](https://docs.eddy3d.com/latest/components/Check_Geometry/) and [Watertight](https://docs.eddy3d.com/latest/components/Watertight/) components report what will break meshing.

??? note "Missing Surfaces / Decompose and Scale Up Mesh"
    If decomposed mesh components are missing surfaces, ensure your input geometry consists of closed, valid polysurfaces. Naked edges or non-manifold geometry can cause snappyHexMesh to fail at snapping to specific regions.

??? note "Value cannot be null (Parameter 's')"
    An input received an empty list or a null item — typically a geometry reference that no longer exists in the Rhino file, or a case path to a folder that was deleted. Internalize the geometry, check every orange input, and re-write the case.

??? note "How do I include trees and porous zones?"
    Trees are modeled as porous zones (Darcy-Forchheimer) rather than solid geometry. Feed crown volumes — one closed solid per tree — into the [Tree](https://docs.eddy3d.com/latest/components/Tree/) component and pick a crown density class or a species from the shared vegetation library, or wire a leaf area index. The same objects drive the Outdoor+ vegetation region and the LBM engines. If some trees seem to have no effect, check that the crown volume actually intersects the probe height and that the mesh resolves it (a crown smaller than a few cells is invisible to the solver).

??? note "Can I model a perforated screen, a small enclosed void, or a balcony behind a mesh?"
    The outdoor workflows assume an open domain with ample space around solid buildings; a small void behind a perforated panel is often not meshed at all (probes there report "Did not find location"). Model such cases as a wind-tunnel box with the panel on a flat plate and a cell size well below the hole size, or treat the screen as a porous zone. For rooms with openings, use the indoor workflow.

??? note "Can I reuse the same mesh for different wind speeds or directions?"
    - **Different wind speed, same direction**: yes. Press *Simulate* only; the mesh is kept.
    - **Different wind direction**: with a cylinder domain, yes — one mesh serves all directions. With a box domain, each direction needs its own rotated mesh; Eddy3D writes one `mesh_NNN` per direction.

??? note "Can I run a terrain-only simulation without buildings?"
    Yes. Keep the building input populated (the terrain surface itself works as a placeholder). When probing over sloped terrain, offset the probe points from the terrain surface rather than placing them on a flat horizontal plane, or you will sample inside the terrain volume.

??? note "The case folder looks like a shortcut in Explorer"
    That is expected. Every direction case's `constant/polyMesh` is a directory junction (Windows) or symlink (WSL / container) pointing at the shared `mesh/` folder, so eight directions do not store eight copies of the mesh. Keep the whole study folder together when you move or archive it; if the links break after a move, run `LinkPolyMesh.bat` in the study folder or re-mesh.

### 3. Simulation Configuration

??? note "How do I simulate several wind directions and speeds in one batch?"
    The [Atmospheric Boundary Layer](https://docs.eddy3d.com/latest/components/Atmospheric_Boundary_Layer/) component takes **lists**: *Wind Directions* and *Wind Speed* are paired by index (a single speed applies to every direction), and Outdoor Case writes one solver case per direction. For directions taken from a weather file, chain [Download Weather](https://docs.eddy3d.com/latest/components/Download_Weather/) → [Deconstruct Weather](https://docs.eddy3d.com/latest/components/Deconstruct_Weather/) → [Wind Rose Cluster](https://docs.eddy3d.com/latest/components/Wind_Rose_Cluster/), which reduces the 8760 hours to a budget of representative direction/speed pairs with their frequencies, ready to wire into the ABL.

??? note "What is the wind direction convention?"
    Meteorological: degrees the wind blows **from**, clockwise from north — 0° is a north wind flowing toward −Y, 90° an east wind. The ABL and Uniform Flow components also accept flow vectors. [Wind Compass](https://docs.eddy3d.com/latest/components/Wind_Compass/) draws the direction and turns into an annual wind rose when a Weather object is wired.

??? note "Is an EPW file required?"
    Not for the CFD itself. The ABL component takes direction, speed, reference height and roughness length directly. The EPW is needed when the weather drives something: selecting directions from a wind rose, annual pedestrian wind comfort (the [Velocity Amplification Factors](https://docs.eddy3d.com/latest/components/Velocity_Amplification_Factors_VAF/) component maps every weather hour onto the simulated directions) and the comfort metrics. Wind statistics that are not hourly (probability tables, `.stat` files) can drive the direction and speed lists, but annual comfort classification needs hourly data.

??? note "Can I set the inlet turbulence (k, ε, ω) or choose the turbulence model?"
    Yes. The ABL component exposes *Turbulent KE (k)*, *Turbulent Epsilon (ε)* and *Turbulent Omega (ω)* as initial/internal values (the inlet patch keeps the atmBoundaryLayer profiles), and [Run Settings](https://docs.eddy3d.com/latest/components/Run_Settings/) offers Realizable k-ε (default), Standard k-ε, RNG k-ε and SST k-ω. A turbulence-intensity or mixing-length input does not exist; for a measured inflow use the Manual Inflow Profile (next question).

??? note "Does Eddy3D support custom or measured wind profiles?"
    Yes. The [Manual Inflow Profile](https://docs.eddy3d.com/latest/components/Manual_Inflow_Profile/) component accepts a vertical profile as lists of normalized heights (`z/zR`), velocities (`U/UR`) and turbulent kinetic energies (`k/UR²`), plus the boundary layer height `zR` and reference velocity `UR`. Eddy3D writes `fixedProfile` inlet conditions for `U`, `k` and `epsilon` instead of the log-law ABL. Read a CSV or text file with standard Grasshopper components and feed the columns in; no manual editing of `0/U` is needed, and the profile survives re-runs. To match an EnergyPlus AirflowNetwork power-law profile, tabulate that law and wire it in the same way.

??? note "Customized Inlet Boundary / ABL vs Uniform Flow"
    The ABL component writes a logarithmic profile (wind speed increases with height). The [Uniform Flow](https://docs.eddy3d.com/latest/components/Uniform_Flow/) component writes a constant inlet velocity — for wind-tunnel-style comparisons and verification cases. Both output the same *Boundary Conditions* object.

??? note "What CPU settings should I use? / Errors in parallel calculation"
    *CPU Count* on Run Settings defaults to `-1` = all cores but one, which is the right answer on most workstations. Enter physical cores, not logical processors (hyper-threads do not help OpenFOAM). More ranks than physical cores slows the solve down. In a container the count is the VM's, not the host's — see the container question above.

??? note "Pressure residuals stalling / Solution not converging / The solver crashes after a few hundred iterations"
    A pressure residual that plateaus around $10^{-2}$ on bluff bodies is normal; judge convergence from the field monitors and probe values instead of the residual alone. A genuine divergence (huge velocities, floating point exception) almost always comes from the mesh or the domain, not from the iteration count:

    - Run `checkMesh` (the [CheckMesh](https://docs.eddy3d.com/latest/components/CheckMesh/) component parses it) and look for concave cells, non-orthogonality above 65° and low face flatness. A few thousand bad cells are enough.
    - Clean the geometry: naked edges, overlapping faces, sliver extrusions, discontinuous terrain.
    - Turn the *Robustness* dial on Run Settings toward 5, enable *Potential Foam Init* and leave the *Warm-up Iterations* automatic — this tames the cold-start overshoot.
    - Keep the domain at the default extents (≥ 15H downwind).
    - *Convergence* (residualControl) and *Auto-stop on Plateau* stop the run once it is flat instead of burning 4000 iterations.

??? note "How do I know a run has finished, and where are the logs?"
    The console prints a `MESHING DONE` / `SIMULATION DONE` line and closes after a countdown. On the canvas, [Meshing Progress](https://docs.eddy3d.com/latest/components/Meshing_Progress/) has a *Done* output, [Live Residuals](https://docs.eddy3d.com/latest/components/Live_Residuals/) draws the convergence history, and [Parse Case Logs](https://docs.eddy3d.com/latest/components/Parse_Case_Logs/) lists FOAM errors and warnings. Every step writes a numbered log (`01_blockMesh.txt`, `run_01_foamRun.txt`, …) into the case folder, with standard error captured. A missing log means that step never ran — read the earliest absent one first.

??? note "Can I continue a run instead of starting from scratch?"
    Press *Simulate* rather than *Run All*: the mesh and the existing case are kept and only the solver runs. *Run All* and *Mesh* wipe the solved time directories. Resuming the solver from its latest time step is not exposed as an option yet.

??? note "Can I run Eddy3D from a script, a batch queue, or outside Grasshopper?"
    Yes. [Write Run Scripts](https://docs.eddy3d.com/latest/components/Write_Run_Scripts/) writes the exact meshing, solving and post-processing scripts (`.bat` / `.sh`) the Run component executes into the study's `Scripts/` folder, so a case can be queued on another machine. `eddy3d-cli` builds and runs indoor and campus cases headlessly. Several studies can run at the same time as long as their case names differ.

??? note "Simulation keeps rerunning / Optimizing with Evolutionary Engines"
    If you are using evolutionary solvers (like Galapagos or Wallacei), ensure the run is complete before the next genome is evaluated (Meshing Progress *Done*, or the DONE line in the log) and toggle the Boolean correctly. Runs launched in a terminal window are asynchronous by design.

??? note "Command Error 1726 / MPI Run Error / simpleFoam abort code 1"
    These are fatal OpenFOAM crashes. They usually happen due to:
    - Out of Memory (OOM) errors during meshing or solving.
    - Floating point exceptions (divergence) in the first few iterations due to bad mesh cells. Check the `run_01_foamRun.txt` log for the exact message.

??? note "Can I run a transient (URANS) wind simulation?"
    Yes. Set *Solver Algorithm* on Run Settings to **PIMPLE**; the *Duration*, *Time Step*, *Max Courant* and *Averaging Window* inputs then apply. The case writes `UMean` / `pMean` (and `UPrime2Mean`) — read those downstream, not the instantaneous `U`.

??? note "How do I export intermediate time steps for a ParaView animation?"
    Run Settings → *Write Interval* sets how often OpenFOAM writes, and *Keep Time Steps* (purgeWrite) how many written times stay on disk (default 3). Raise *Keep Time Steps* to a large number to retain every time slice for the ParaView time animation. Purged times can no longer be probed.

??? note "Does Eddy3D use my GPU?"
    The OpenFOAM engines do not. Two GPU engines share the same ABL and geometry inputs:

    - **FluidX3D** (lattice Boltzmann, OpenCL): runs on NVIDIA, AMD, Intel and Apple Silicon GPUs. Eddy3D clones and builds the source on first run, so it needs `git` and a C++ toolchain (Visual Studio Build Tools on Windows — the launch script installs them if missing; `g++` on macOS/Linux). Free for non-commercial use only.
    - **OpenLB** (lattice Boltzmann LES, containerized): the CPU image runs everywhere; the CUDA image (`pkastner/openlb-wind:gpu`) needs an NVIDIA GPU and the container toolkit on Windows or Linux — macOS containers have no GPU passthrough. Tick *GPU* on [LBM Run Settings](https://docs.eddy3d.com/latest/components/LBM_Run_Settings/). The image is built for compute capability 7.5 through 9.0 (Turing to Hopper) with PTX for newer cards; if the GPU launch fails, the run falls back to the CPU image and leaves a `RAN_ON_CPU.txt` marker so the result is labelled honestly.

    Both are driven by [LBM Run](https://docs.eddy3d.com/latest/components/LBM_Run/): wire a FluidX3D Run Settings to select FluidX3D, an LBM Run Settings for OpenLB.

??? note "OpenLB stops with \"This program was not compiled for SM 86\""
    An older GPU image was built for one GPU generation only. Pull the current image (`podman pull docker.io/pkastner/openlb-wind:gpu` or the Docker equivalent, or use the Eddy3D Setup window) — it now targets SM 75/80/86/89/90 and the plugin checks the image's target list against your card before launching.

??? note "FluidX3D on macOS fails with \"syntax error near unexpected token `{'\" in make.sh"
    A line-ending bug in the patched build script, fixed in `1.8.0.827`. Update the package and clear the FluidX3D case folder so the script is rewritten.

??? note "Can I get a wind field without running CFD at all?"
    Yes, for early design iteration. [ML Model](https://docs.eddy3d.com/latest/components/ML_Model/) downloads an ONNX wind-prediction model (Yel 2.0 is public), and [Wind Predictor](https://docs.eddy3d.com/latest/components/Wind_Predictor/) runs it locally on your buildings, points and ABL boundary conditions in seconds. Its output feeds the same VAF → Pedestrian Wind Comfort → UTCI chain as a CFD probe. Treat it as a screening tool and confirm the final design with a solve.

??? note "Can Eddy3D document the study for a report or a reviewer?"
    [Study Report](https://docs.eddy3d.com/latest/components/Study_Report/) writes a Markdown report of a wind case — solver and OpenFOAM version, domain and blockage, boundary conditions, numerics, mesh quality, convergence, y+, Reynolds number, an optional comfort section and a compliance summary against the ASCE/SEI CWE Prestandard's QA discipline.

### 4. Post-Processing & Visualization

??? note "What does a null vector in Probing mean?"
    A null is Eddy3D refusing to hand you a number it does not trust, not a failure. Four causes, told apart by the component's remarks:

    1. **Culled before probing** — points outside the domain or inside a building are removed and the Remark says how many (`Culled N probe point(s)`). Toggle *Cull Invalid Points* in the right-click menu.
    2. **Huge vector** — a sample above 1000 m/s (a point inside a solid or on a degenerate cell) is nulled so the branch keeps its length; the Remark names the count. Toggle *Cull Huge Vectors* to see the raw value.
    3. **Not solved yet** — the case has no written time step. A run that was cancelled before the first write interval has nothing to probe, unlike tools that show the uniform initial field.
    4. **All points culled** — a Warning; usually the probe plane is at the wrong height or the units are wrong.

    The [Probe](https://docs.eddy3d.com/latest/components/Probe/) component samples any field (U, p, Cp, T, k, age, CO2, …) at any written time, one branch per wind direction.

??? note "The vectors are not visible / Random fuzzy vectors"
    Check, in this order: the Probe component's *Values* output actually contains vectors (see the null-vector question); the [Vector Field Viewer](https://docs.eddy3d.com/latest/components/Vector_Field_Viewer/) is wired to the right sub-result (direction); the arrow scale suits the scene; and the geometry is in meters. A very sparse set of arrows after a full solve usually means most points were culled.

??? note "There are multiple arrows coming from one place"
    Either the document units are not meters (all probe points collapse onto one spot) or several wind directions are being drawn on top of each other. Visualize a single sub-result at a time.

??? note "Anomalous, very high speeds next to buildings or at the edge of the probe plane"
    Extreme values interspersed with plausible ones are a local solver artefact rather than a post-processing bug: probes inside or touching a wall, an under-resolved near-wall mesh, or a probe plane that reaches the domain boundary (values near the inlet or side walls are dominated by the boundary condition). Keep the sampling plane inside the refinement box, raise the building surface accuracy or add a Refinement Region, and use the *Cull Huge Vectors* option to drop samples that cannot be physical.

??? note "'Failed to find the path' / Can't read U File / Could not find a part of the path"
    The probe data was not written because meshing or the solve never ran to a written time. Check the logs in the case folder (see the "How do I know a run has finished" question) and re-run; do not create the folder by hand.

??? note "How do I get a heatmap / colored mesh instead of arrows?"
    Wire the probe points and one scalar per point into the [Scalar Field Viewer](https://docs.eddy3d.com/latest/components/Scalar_Field_Viewer/) (point cloud, heatmap mesh, or volumetric cloud), or feed the annual wind field into [Deconstruct Wind](https://docs.eddy3d.com/latest/components/Deconstruct_Wind/), which colors a probe mesh by the mean, min or max. [Flex Legend](https://docs.eddy3d.com/latest/components/Flex_Legend/) draws a matching legend from the viewer's *Range* output. No CSV round-trip is needed; the CSV export exists for the web visualizer.

??? note "How can I extract data or import results to Excel?"
    The Probe *Values* output is an ordinary Grasshopper data tree (one branch per direction, one item per point) that any CSV or Excel writer can consume. [Export to Visualizer](https://docs.eddy3d.com/latest/components/Export_to_Visualizer/) writes a ready-made CSV (X, Y, Z, speed and the velocity components, one row per point) for [viz.eddy3d.com](https://viz.eddy3d.com/), which also opens in Excel.

??? note "Can I draw streamlines?"
    Yes. [Streamlines](https://docs.eddy3d.com/latest/components/Streamlines/) traces OpenFOAM's own streamlines function object through the solved mesh from a seed line or seed points, colored by speed, per direction — also while a parallel solve is still running. The ParaView launcher adds stream lines by default as well.

??? note "Pressure units and Pressure Coefficients (Cp)"
    In OpenFOAM's incompressible solvers pressure is kinematic ($p / \rho$, in $m^2/s^2$). Multiply by the air density (≈ 1.225 kg/m³) for Pascals. Enable *Pressure Coefficient* on Run Settings to write the dimensionless Cp field, referenced to the ABL speed at building height; Cp does not change with the inlet speed, physical pressure does.

??? note "Cp values on the facade come back as huge negative numbers"
    A probe sitting exactly on (or a hair inside) the building surface does not fall into a fluid cell, so the sample is garbage. Offset the sampling points a small distance into the flow along the face normal — Rhino's face normals (or a Brep Grid Points output) give the direction for complex roofs. A few cells' worth of offset is enough; the first fluid cell already carries the surface pressure.

??? note "How do I get facade pressures into EnergyPlus / Ladybug's AirflowNetwork?"
    Probe the `Cp` field at the facade points and wire the tree into [Airflow Network Cp](https://docs.eddy3d.com/latest/components/Airflow_Network_Cp/). It writes the `WindPressureCoefficientArray`, per-node `WindPressureCoefficientValues` and `ExternalNode` objects as an IDF snippet to merge into the EnergyPlus model.

??? note "How do I visualize airflow velocity on building facades?"
    Probe the `U` field at points offset from the facade (see the Cp question), or open the case in ParaView and apply *Extract Surface* on the building geometry.

??? note "Annual Wind Analysis & Comfort Output Discrepancies"
    Annual wind comfort combines per-direction CFD results with the EPW: [Velocity Amplification Factors](https://docs.eddy3d.com/latest/components/Velocity_Amplification_Factors_VAF/) maps every weather hour onto the simulated directions (*Interpolate* blends the two bracketing directions, *Nearest* snaps), and [Pedestrian Wind Comfort](https://docs.eddy3d.com/latest/components/Pedestrian_Wind_Comfort/) classifies with Lawson (three variants), Davenport or NEN 8100, for the year, a season or a month. Simulate at least 8, better 16, directions; a single simulated direction is applied to every hour and the component warns about it. If every probe lands in the worst class, check that the probe branches match the direction list and that the speeds are not in the wrong units.

??? note "How are hours of the year indexed?"
    Deconstruct Weather's *Hour of Year* is 0-based and aligned with every other series (index 0 is the first EPW record, January 1, 00:01–01:00); the standalone [Hour of Year](https://docs.eddy3d.com/latest/components/Hour_of_Year/) component and the HOY inputs downstream are 1-based (1–8760). EPW files start in January regardless of the hemisphere; seasons in the comfort components are named by month.

??? note "ParaView doesn't automatically load the simulation"
    [Open In ParaView](https://docs.eddy3d.com/latest/components/Open_In_ParaView/) launches ParaView with every direction case added to the pipeline browser; click *Apply* on the ones you want (nothing is loaded automatically on purpose, because a sixteen-direction study would take minutes). ParaView is not installed by Eddy3D — download it from [paraview.org](https://www.paraview.org/) into the default location; the component finds all installed versions and the right-click *ParaView Version* menu pins one. If it still does not open, create an empty `case.foam` in the direction folder and open it manually.

??? note "How do I load a previous simulation result / results from a different folder?"
    Wire the study folder — the one containing `mesh/` and `case_NNN/` — into [Load Wind Case](https://docs.eddy3d.com/latest/components/Load_Wind_Case/) and plug its *Case* output into Probe, Streamlines, Open In ParaView or Study Report. Point at the folder, not at a file inside it. This works from any drive or network location as long as the folder structure is intact.

??? note "Flow rates centers do not match probing points"
    Ensure you are using the exact same mesh reference that was used during the solve. Regenerating the grid after solving will misalign the indices.

??? note "Is the arrow length equal to the velocity in m/s?"
    The probe *Values* are velocity vectors in m/s. The viewers scale the arrows for legibility, so read magnitudes from the values or the legend, not from the arrow length.

### 5. Indoor ventilation

??? note "Can Eddy3D run indoor simulations?"
    Yes. [Indoor Case](https://docs.eddy3d.com/latest/components/Indoor_Case/) takes a closed room Brep, inlet and outlet surfaces, sinks and sources, and the indoor templates (natural ventilation, CO2 occupancy, breathing manikin, thermal comfort) are in Select Template under *Indoor*. Isothermal cases run the incompressible solver; as soon as a wall temperature or a heat source is present the case switches to the buoyant solver, so stack (chimney) effects are captured.

??? note "My room has only one window — can it be both inlet and outlet?"
    Not yet. An opening is classified as inlet or outlet when the case is written, and there is no pressure-driven opening type. Split the opening into an upper and a lower part (buoyancy then drives flow through them in opposite directions), or provide a second opening.

??? note "How do I give each wall its own temperature?"
    Use one [Indoor Wall](https://docs.eddy3d.com/latest/components/Indoor_Wall/) component per surface: wire the room face into its *Surface* input and set *Temperature* (or *Power* in watts for an occupant or a luminaire). Wire the walls into Indoor Case's *Walls* input; faces not covered keep the case-wide *Wall Temp*. Do not deconstruct the room Brep — Indoor Case needs the closed shell.

??? note "How do I read temperature, CO2 or age of air at points?"
    The same [Probe](https://docs.eddy3d.com/latest/components/Probe/) component works on indoor cases. Set *Field* to `T`, `CO2`, `viral` or `age` (enable *Age of Air* on Indoor Case first). Indoor cases are never geometrically culled, so points inside the room are safe.

??? note "Which contaminant sources are available?"
    CO2 Emitter and Viral Emitter (zone sources), Heat Source and Momentum Source, plus the breathing [Manikin](https://docs.eddy3d.com/latest/components/Manikin/) with the [Indoor Species Case](https://docs.eddy3d.com/latest/components/Indoor_Species_Case/) for exhaled CO2 as a real species. [Occupant CO2](https://docs.eddy3d.com/latest/components/Occupant_CO2/) and [CO2 Air Quality](https://docs.eddy3d.com/latest/components/CO2_Air_Quality/) give the EN 16798-1 categories without CFD. For outdoor pollutant dispersion, use Pollutant Source on the wind case.

??? note "How do I couple exterior Eddy3D pressure results to an interior CFD model?"
    The standard workflow:
    1. Run the external simulation in Eddy3D and probe Cp at each opening centroid (offset from the facade).
    2. If pressure is non-uniform across an opening, compute an area-weighted average Cp for that opening.
    3. Back-calculate physical pressure: `P = Cp × 0.5 × ρ × U_ref²` with ρ ≈ 1.225 kg/m³ and `U_ref` the reference velocity at building height.
    4. Apply the resulting pressure values as boundary conditions in your interior CFD tool.
    Use the same `U_ref` in both models. For EnergyPlus, the Airflow Network Cp component writes the coefficients directly.

### 6. Comfort, MRT & UTCI

??? note "Do I need Radiance and EnergyPlus for a comfort study?"
    Not by default. The [MRT](https://docs.eddy3d.com/latest/components/MRT/) component runs a pure C# path — direct-raycast shortwave, view factors, ambient surface temperatures — with no external engine. Connect [MRT Settings](https://docs.eddy3d.com/latest/components/MRT_Settings/) to enable Radiance reflections and EnergyPlus surface temperatures; those need either native installs (the Setup window installs Radiance and EnergyPlus 26.1.0) or the bundled Radiance + EnergyPlus container image, selected per run on the MRT component's *Engine* input.

??? note "The CFD wind speed is not used in the UTCI calculation"
    [UTCI (Simulation)](https://docs.eddy3d.com/latest/components/UTCI_Simulation/) takes the annual wind field object from the Velocity Amplification Factors component's *Wind Speed* output (fed by CFD probes or the ML Wind Predictor). If nothing is wired, it uses a calm 0.5 m/s for every probe and says so in a warning — it does **not** fall back to the EPW wind. The point calculator [Thermal Comfort](https://docs.eddy3d.com/latest/components/Thermal_Comfort/) (UTCI, PET, Heat Index) takes a plain number for wind speed.

??? note "Do the sensor normals matter for MRT?"
    Not for the result: the direct solar term uses the standing body's projected area, never the sensor plane, and the longwave view factors use the surface normals. The normal only sets the direction of the *Height* offset on [MRT Sensors](https://docs.eddy3d.com/latest/components/MRT_Sensors/) (default 1.1 m above the ground mesh), so a downward-pointing normal pushes the sensor below the ground. Keep ground sensors facing up. Versions before August 2026 had a bug that made MRT depend on the normal; update if your results change when flipping normals.

??? note "The EnergyPlus step finishes in seconds and MRT.eddy is empty"
    EnergyPlus exited with an error. Open the EnergyPlus `.err` file in the project folder under the working directory; the usual causes are a version mismatch (the pinned 26.1.0 is coupled to the embedded template) and a working directory the process cannot write to (project folders under `C:\` root often are). Run the Setup window to verify the engine, or switch the MRT component to the container engine.

??? note "Is PET available?"
    Yes. The Thermal Comfort component offers UTCI, PET and NOAA Heat Index from a dropdown (PET adds the nine personal parameters), and [PET (Simulation)](https://docs.eddy3d.com/latest/components/PET_Simulation/) computes annual, probe-specific PET on the same pipeline as UTCI (Simulation). [Thermal Comfort Legend](https://docs.eddy3d.com/latest/components/Thermal_Comfort_Legend/) classifies either metric.

??? note "Can I use the Eddy3D assistant instead of reading all of this?"
    [Esinti](https://docs.eddy3d.com/latest/components/Esinti/) (Eddy3D → *00 | Setup*) opens a session in Codex, Claude Code or Antigravity that reads the live canvas, recommends and loads templates, wires components and explains workflow trade-offs, and only applies changes you confirm.

### 7. Standards & Compliance

??? note "How does Eddy3D relate to the ASCE/SEI Prestandard for Computational Wind Engineering (2026)?"
    The *Prestandard for Use of Computational Wind Engineering in Building Design* (ASCE/SEI + NIST, 2026) is the first US standardization effort for CFD-based wind engineering. Its normative scope is **structural wind loads**, for which it mandates turbulence-resolving LES — that is not what Eddy3D does (see the next question). For **pedestrian wind comfort**, however, the Prestandard explicitly states that steady-state RANS approaches "give acceptable results", deferring to the established guidelines Eddy3D follows (AIJ 2008, AWES-QAM, Franke et al. 2011). Its approach-flow and QA chapters transfer to comfort studies, and Eddy3D already aligns with the core of them:

    - **Domain sizing** follows the COST 732 / Franke best practice the Prestandard builds on (5H inflow, 15H wake, 5H sides/top for box domains), and every written case is checked against the Prestandard's blockage limits (frontal ≤ 3%, lateral/vertical ≤ 17%, AC 6-8b) — exceedances surface as a component warning with a fix hint.
    - **Atmospheric boundary layer modeling** uses the log-law `atmBoundaryLayerInletVelocity` inlet and the z0-based atmospheric rough-wall ground treatment — exactly the roughness formulation the Prestandard's commentary prefers over generic sand-grain wall functions (AC 5-4).
    - **Topography** is modeled explicitly in the domain ("Topography Method 2", AC 3-4), with the same rough-wall treatment on terrain.
    - **Vegetation** enters as porous canopy zones rather than a roughness fudge — the approach the Prestandard's commentary recommends for forested/vegetated areas (AC 6-11).
    - **Mesh quality** is gated by an automatic `checkMesh` step whose skewness / non-orthogonality results are parsed and surfaced on the canvas (AC 6-9).
    - **Convergence** is monitored live with automatic residual-plateau detection and graceful solver stop (AC 4-6).
    - **Wall treatment** is verified: per-patch y+ statistics are reported after every run, warning when averages leave the wall-function validity range (AC 6-10a).
    - **Full-scale simulation** means the Prestandard's Reynolds-number criterion (Re ≥ 11,000, AC 4-7) is always satisfied — and stated per study in the Study Report.
    - **Wind climate statistics** combine per-direction CFD results with directional Weibull fits and the Lawson (three variants), Davenport, and NEN 8100 comfort/safety criteria — the sector-method family the Prestandard lists for combining climate with simulation data.
    - **Second-order numerics** per the Prestandard's discretization requirement (AC 4-3) are available on the Run Settings robustness dial (levels 1–3); the robust default is first-order, and the input description tells you where the standard-aligned range is.

    Remaining gaps (empty-domain inflow verification, automated grid-independence studies) are tracked in the repository's compliance matrix and on the roadmap.

??? note "Can Eddy3D calculate design wind loads (MWFRS / cladding) per the Prestandard?"
    No — and no steady-RANS tool can. The Prestandard requires turbulence-resolving large-eddy simulation for peak load prediction and explicitly rules out RANS for structural wind loads. Eddy3D targets pedestrian-level wind, comfort, and microclimate — the application class for which the Prestandard itself endorses steady-state methods. For code wind loads, use wind tunnel testing per ASCE 49 or an LES-based study executed under the Prestandard's full QA and peer-review process. For a first estimate of facade pressures under EN 1991-1-4, the [Facade Wind Pressure](https://docs.eddy3d.com/latest/components/Facade_Wind_Pressure/) component applies the code's zone and terrain factors without CFD.
