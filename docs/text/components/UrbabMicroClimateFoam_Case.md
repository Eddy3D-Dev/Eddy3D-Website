## ![](../../images/icons/UrbabMicroClimateFoam_Case.png) UrbabMicroClimateFoam Case - [[source code]](C:\Users\pkastner\Documents\GitHub\Eddy3D\UMCF/UrbabMicroClimateFoam%20Case.py)

![](../../images/components/UrbabMicroClimateFoam_Case.png)

Creates an UMCF case

#### Inputs
* ##### WC []
Set to true to write the case in the working directory
* ##### CC []
Set to true to remove all files in the working directory
* ##### CN []
Name of the new case to create. It cannot contain spaces
* ##### WD []
Working directory to place the case files and results
* ##### AR []
Air region for this case
* ##### VR []
Vegetation reegions in this case
* ##### SR []
Solid regions in this case
* ##### TS []
Case timing settings
* ##### SS []
Simulation settings
* ##### CS []
Optional input for optinal entries

#### Outputs
* ##### ML
Case modification logs
* ##### C
Modified case
* ##### DB
Case domain
* ##### RB
Refinement box of the case


[Check Hydra Example Files for UrbabMicroClimateFoam Case](https://hydrashare.github.io/hydra/index.html?keywords=UrbabMicroClimateFoam Case)