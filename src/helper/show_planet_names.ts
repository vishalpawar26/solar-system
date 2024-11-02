import { Mesh } from "three";
import { CSS2DObject } from "three/examples/jsm/Addons.js";
import { planets } from "../constants/planets";
import { planetMeshes } from "../utils/planet_meshes";

export const showPlanetNames = () => {
  planetMeshes.forEach((planetMesh, planetIndex) => {
    // Create a label element
    const planetLabelDiv = document.createElement("div");
    planetLabelDiv.className = "planetLabel";
    planetLabelDiv.textContent = planets[planetIndex].name;
    planetLabelDiv.style.color = "white";
    planetLabelDiv.style.fontSize = "12px";

    // Create a CSS2DObject and add it to the planet
    const planetLabel = new CSS2DObject(planetLabelDiv);
    planetLabel.position.set(0, 1.5, 0);

    planetMesh.children.forEach((moonMesh, moonIndex) => {
      if (moonMesh instanceof Mesh) {
        const planetMoons = planets[planetIndex].moons;
        if (planetMoons) {
          const moonLabelDiv = document.createElement("div");
          moonLabelDiv.className = "moonLabel";
          moonLabelDiv.textContent = planetMoons[moonIndex]?.name;
          moonLabelDiv.style.color = "white";
          moonLabelDiv.style.fontSize = "8px";

          const moonLabel = new CSS2DObject(moonLabelDiv);
          moonLabel.position.set(0, 1.5, 0);

          moonMesh.add(moonLabel);
        }
      }
    });

    planetMesh.add(planetLabel);
  });
};
