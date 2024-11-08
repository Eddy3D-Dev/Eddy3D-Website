## ![](../../images/icons/Read_OpenFOAM_Case.png) Read OpenFOAM Case - [[source code]](C:\Users\pkastner\Documents\GitHub\Eddy3D\UMCF/Read%20OpenFOAM%20Case.py)

![](../../images/components/Read_OpenFOAM_Case.png)

Reads an OpenFOAM case and outputs a Case instance with all its files.

#### Inputs
* ##### D []
Directory to OpenFOAM case.
* ##### I []
Names of additional files to include

#### Outputs
* ##### C
The read OpenFOAM case as a Case instance containing all found files as FileContainers.
* ##### B
Boudnary conditions found in the case.
* ##### I
Names of files in the directory that were not `added to the case


[Check Hydra Example Files for Read OpenFOAM Case](https://hydrashare.github.io/hydra/index.html?keywords=Read OpenFOAM Case)