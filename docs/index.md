---
hide:
  - navigation
  - toc
---

# Eddy3D {.sr-only}

<figure class="hero-logo" markdown="span">
  ![Eddy3D](assets/cd/LogoEddy-01_preview-crop.png){ width="250" .skip-lightbox .hero-logo__image }
</figure>

<p style="text-align: center; font-size: 24px;">
  Airflow and Microclimate Simulations for Rhino & Grasshopper
</p>

<br>

![Eddy3D Example Canvas](assets/images/combo.png){.skip-lightbox}

<div align="center" markdown="1">
  [Get Started :material-arrow-right:](https://docs.eddy3d.com/){ .md-button .md-button--primary aria-label="Get Started with Eddy3D Documentation" }
  [Download :material-download:](download.md){ .md-button aria-label="Download Eddy3D" }
</div>

<p style="text-align: center; margin-top: 0.75rem;">
  Latest stable release and pre-release builds are listed on the <a href="download" aria-label="Go to the download page for Eddy3D releases">download page</a>.
</p>


---

## What you can simulate
Each card opens a ready-to-run Grasshopper template in the [template gallery](https://templates.eddy3d.com); the same templates load from the Templates component inside Grasshopper.
<div class="grid cards results" markdown>

-   [![Diagram: wind profile around three buildings](assets/images/asset_22.png){ loading=lazy .skip-lightbox }](https://templates.eddy3d.com/#t-wind-openfoam-boxdomain)

    **Wind around buildings**

    Steady RANS in OpenFOAM: wind speed and pedestrian comfort around buildings, trees and terrain.

-   [![Diagram: thermal comfort over a site](assets/images/asset_31.png){ loading=lazy .skip-lightbox }](https://templates.eddy3d.com/#t-microclimate-umf-utci)

    **Outdoor thermal comfort**

    UTCI from a fully coupled microclimate simulation with urbanMicroclimateFoam.

-   [![Result: annual solar irradiation over Hong Kong buildings](assets/images/results/Solar_Radiation.webp){ loading=lazy .skip-lightbox }](https://templates.eddy3d.com/#t-sun-solar-radiation)

    **Sun and solar radiation**

    Annual irradiation on ground and facades, sun hours and BRE sunlight checks.

-   [![Result: surface temperatures around Manhattan buildings](assets/images/results/SurfaceTemps_FFT.webp){ loading=lazy .skip-lightbox }](https://templates.eddy3d.com/#t-microclimate-mrt-surfacetemps-fft)

    **Surface and radiant temperature**

    Surface temperatures of ground and walls, the input to mean radiant temperature.

-   [![Result: live wind streaks around Zurich buildings](assets/images/results/LiveTunnel2D.webp){ loading=lazy .skip-lightbox }](https://templates.eddy3d.com/#t-wind-lbm-livetunnel2d)

    **Live wind tunnel**

    GPU lattice-Boltzmann wind that updates while you move the geometry.

-   [![Result: predicted wind comfort around a city](assets/images/results/ML_Inference_Comfort.webp){ loading=lazy .skip-lightbox }](https://templates.eddy3d.com/#t-wind-ml-ml-inference-comfort)

    **Wind comfort without CFD**

    Year-round pedestrian wind comfort classes from a trained model, in seconds.

-   [![Result: road noise levels around New York buildings](assets/images/results/Noise.webp){ loading=lazy .skip-lightbox }](https://templates.eddy3d.com/#t-noise-noise)

    **Road traffic noise**

    CNOSSOS-EU Lden on the ground and on every facade storey.

-   [![Result: ponding depth over an Atlanta site](assets/images/results/Stormwater.webp){ loading=lazy .skip-lightbox }](https://templates.eddy3d.com/#t-water-stormwater)

    **Stormwater**

    Where water ponds on a graded site, and which way it runs.

</div>

Weather files and climate charts for about 16,000 stations are at [climate.eddy3d.com](https://climate.eddy3d.com). AI agents can query them over MCP at `https://climate.eddy3d.com/mcp`: see [how to connect](https://docs.eddy3d.com/latest/mcp/).

---

## Team


<div class="mdx-users">

<figure class="mdx-users__testimonial black-and-white">
    <img src="assets/images/team/kastner.jpg" alt="" loading="lazy" class="skip-lightbox">
    <figcaption class="md-typeset">Patrick Kastner</figcaption>
  </figure>

<figure class="mdx-users__testimonial black-and-white">
    <img src="assets/images/team/karadag.jpg" alt="" loading="lazy" class="skip-lightbox">
    <figcaption class="md-typeset">İlker Karadağ</figcaption>
  </figure>


<figure class="mdx-users__testimonial black-and-white">
    <img src="assets/images/team/rahimi.jpg" alt="" loading="lazy" class="skip-lightbox">
    <figcaption class="md-typeset">Sina Rahimi</figcaption>
  </figure>
  
  <figure class="mdx-users__testimonial black-and-white">
    <img src="assets/images/team/vegas.jpg" alt="" loading="lazy" class="skip-lightbox">
    <figcaption class="md-typeset">Gonzalo Vegas</figcaption>
  </figure>
  
   <figure class="mdx-users__testimonial black-and-white">
    <img src="assets/images/team/alvarez.jpg" alt="" loading="lazy" class="skip-lightbox">
    <figcaption class="md-typeset">Marcelo Álvarez</figcaption>
  </figure>

<figure class="mdx-users__testimonial black-and-white">
    <img src="assets/images/team/dogan.jpg" alt="" loading="lazy" class="skip-lightbox">
    <figcaption class="md-typeset">Timur Dogan</figcaption>
  </figure>



</div>

## Advisors & Alumni

<div class="mdx-users">

<figure class="mdx-users__testimonial black-and-white">
    <img src="assets/images/team/holzmann.jpg" alt="" loading="lazy" class="skip-lightbox">
    <figcaption class="md-typeset">Tobias Holzmann</figcaption>
  </figure>
 
<figure class="mdx-users__testimonial black-and-white">
    <img src="assets/images/team/mermelstein.jpg" alt="" loading="lazy" class="skip-lightbox">
    <figcaption class="md-typeset">Remy Mermelstein</figcaption>
  </figure>

<figure class="mdx-users__testimonial black-and-white">
    <img src="assets/images/team/de-simone.jpg" alt="" loading="lazy" class="skip-lightbox">
    <figcaption class="md-typeset">Zoe De Simone</figcaption>
  </figure>

</div>

---

![Sustainable Urban Systems Lab](assets/images/SustainLab.svg){width="350" .skip-lightbox align=left loading=lazy}
![Environmental Systems Lab](assets/images/eslab.svg){width="320" .skip-lightbox align=right loading=lazy}
<center markdown="1">
:octicons-plus-24:{ aria-hidden="true" }
</center>

<br><br><br>

Eddy3D is being developed as a cross-disciplinary project through a collaboration between the Georgia Tech School of Architecture, the Environmental Systems Lab at Cornell AAP, and the Systems Engineering department at Cornell Engineering.

---

## Supporters

<div class="grid" markdown>

![Georgia Tech School of Architecture](assets/images/CoD_SoA.jpg){width="250" .skip-lightbox loading=lazy .center}
{ .card }

![Georgia Tech](assets/images/GeorgiaTech_RGB.png){width="250" .skip-lightbox loading=lazy .center}
{ .card }

![Cornell AAP](assets/images/AAP_logo_stacked.png){width="75" .skip-lightbox loading=lazy .center}
{ .card }

![Cornell University](assets/images/cornell.svg){width="75" .skip-lightbox loading=lazy .center}
{ .card }

![Cornell Atkinson Center for Sustainability](assets/images/atkinson.png){width="200" .skip-lightbox loading=lazy .center}
{ .card }

![Cornell Systems Engineering](assets/images/logo-systemseng.svg){width="250" .skip-lightbox loading=lazy .center}
{ .card }

</div>
