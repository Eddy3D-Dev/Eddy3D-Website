# Support & FAQ

We are currently collecting bugs and requests for new features on [Github](https://github.com/orgs/Eddy3D-Dev/discussions){ aria-label="Visit Eddy3D GitHub Discussions" }, where people help each other out with questions that go beyond our documentation. Please feel free to start a new thread if you have any questions!

If your problem is urgent, please also notify us via e-mail as we are unable to monitor new posts 24/7.

When posting a new question, **please include**:
1. A clear question or intent.
2. A clear description of your problem, ideally with a screenshot.
3. What you have done so far to solve it.
4. A minimal Grasshopper file (`.gh` or `.ghx`) that contains only the components relevant to your problem with all data internalized.
5. Your Eddy3D Version, Rhino Version, and Windows Version.

---

## Frequently Asked Questions

Welcome to the Eddy3D FAQ! We have compiled the most common questions from our Discourse community to help you resolve issues quickly.

### Installation, Setup, and Compatibility

??? note "Is Eddy3D compatible with Rhino 8?"
    Yes, starting from version `1.0.2.827`, Eddy3D supports Rhino 8 (8.27 or higher) natively on both Windows and macOS. Earlier versions (0.4.x) may require legacy configurations or exhibit issues in Rhino 8. We highly recommend upgrading to the latest version via the Rhino Package Manager (`PackageManager`).

??? note "How do I install Eddy3D and where are the files located?"
    The easiest and recommended way to install Eddy3D is through the Rhino Package Manager (`PackageManager` command in Rhino). Search for "Eddy3D" and install the latest stable version. Yak (the package manager) automatically manages the folder location, usually under `%APPDATA%\McNeel\Rhinoceros\packages\`.

??? note "Why does my Eddy3D script show a 'license expired' warning?"
    Older beta and pre-release builds (like 0.4.8 and earlier) contained hardcoded expiration dates. To fix this, simply upgrade to the latest Eddy3D version using the Rhino Package Manager.

??? note "Eddy3D is not able to find BlueCFD / I get Docker errors"
    Starting from the unified stable release, Eddy3D has transitioned from BlueCFD to **WSL (Windows Subsystem for Linux) / Docker** running **OpenFOAM 12**. If you see errors about BlueCFD, ensure you have:
    1. Uninstalled BlueCFD and removed old PATH variables.
    2. Switched to WSL or Docker mode in the Eddy3D Engine Settings.
    3. Successfully completed the automated OpenFOAM installation via the Grasshopper components.

??? note "How do I access previous versions of Eddy3D?"
    While we encourage using the latest release for all new features and bug fixes, older versions can still be downloaded via the [Rhino Package Manager by selecting a specific version](https://yak.rhino3d.com/packages/Eddy3D).

### Geometry & Mesh Generation

??? note "Error says 'Your building geometries are too far from the origin'"
    OpenFOAM and general CFD processes rely on specific geometric tolerances that degrade far from the origin. Always center your model around `(0, 0, 0)` in Rhino before generating your bounding box or running simulations.

??? note "The mesh folder does not exist. Please create a mesh first"
    This error means the mesh generation step either failed or hasn't been run. Ensure you have successfully executed the `Run Mesh` component and that it completed without OpenFOAM errors before attempting to run the simulation.

??? note "How do I define trees and Z0 roughness?"
    In Eddy3D, trees can be defined using porous zones. You can assign tree volumes as inputs to the mesh components. Surface roughness ($Z_0$) is assigned globally in the ABL settings or locally on specific surfaces to model ground friction accurately.

### Simulation Configuration & Execution

??? note "What CPU settings should I use? / Errors in parallel calculation"
    Eddy3D supports parallel calculation. By default, it will detect your logical cores. We recommend reserving at least 1-2 cores for your OS to prevent system freezes. For example, if you have 8 physical cores, setting it to 6 is a safe bet. Setting it higher than your physical core count will actually slow down the simulation.

??? note "Value cannot be null (Parameter 's') / Input parameter index [-1] too low"
    This usually indicates an issue with missing geometry, disconnected inputs, or empty lists being passed to Eddy3D components. Ensure your building and context geometries are properly baked/referenced and that list lengths match expected inputs.

??? note "Template 5 PressureOnBuildingFacade fails to load in the latest version"
    We occasionally update templates to match the latest OpenFOAM configurations. If a template is failing to load, try deleting the local `Eddy3D-Templates` folder in your Documents directory and let the plugin re-download the latest templates from GitHub.

### Post-Processing & Visualization

??? note "The vectors are not visible or look like random fuzzy lines"
    Check your visualization scale settings. Often, the vector length multiplier in the visualization component is too small or too large for your scene scale. Try scaling it significantly up or down. Also, ensure your geometries are modeled in Meters.

??? note "There are multiple arrows coming from one place"
    If you probed multiple wind directions without clearing or grouping the points properly, you will see superimposed vectors. Try visualizing a single wind direction at a time or adjusting the point cull settings in the probe component.

??? note "ParaView doesn't automatically load the simulation"
    Ensure you have installed a compatible version of ParaView. Sometimes security settings or incorrect PATHs block the automatic launching. You can always open ParaView manually, navigate to your project folder, and create an empty `case.foam` file to load the results.

??? note "Probing always reports an error: 'Failed to find the path'"
    This means the OpenFOAM probe data wasn't successfully written, or the simulation crashed before it reached the probe time. Check the OpenFOAM logs in the component's output to see if the simulation diverged or failed.

??? note "How can I import results to Excel?"
    Eddy3D includes components to write probing results directly to CSV format. Once the simulation is done and probed, connect the data tree to a CSV Writer component to export the values for Excel.
