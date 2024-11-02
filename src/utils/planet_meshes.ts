import {
  ClampToEdgeWrapping,
  DoubleSide,
  Mesh,
  MeshStandardMaterial,
} from "three";
import { createPlanet } from "../helper/create_planet";
import { planetTextures } from "./planet_textures";
import { planets } from "../constants/planets";
import { ringGeometry } from "./geometries";
import { createMoon } from "../helper/create_moon";

export const planetMeshes: Mesh[] = planets.map((planet) => {
  const planetMesh = createPlanet(planet);

  if (planet.name === "Saturn") {
    // Add ring to Saturn
    const ringTexture = planetTextures.saturnRingsTexture;
    const ringMaterial = new MeshStandardMaterial({ map: ringTexture });
    ringMaterial.side = DoubleSide;

    // Set wrapping to clamp the texture to the edges
    ringTexture.wrapS = ClampToEdgeWrapping;
    ringTexture.wrapT = ClampToEdgeWrapping;
    ringTexture.repeat.set(1, 1); // Reset to full texture coverage

    // Adjust UVs for Polar Mapping
    const uvAttribute = ringGeometry.attributes.uv;
    for (let i = 0; i < uvAttribute.count; i++) {
      const u = uvAttribute.getX(i);
      const v = uvAttribute.getY(i);

      // Calculate radius in UV space
      const radius = Math.sqrt((u - 0.5) ** 2 + (v - 0.5) ** 2);

      // Set the UV values
      uvAttribute.setX(i, 0.5);
      uvAttribute.setY(i, radius);
    }

    const ringMesh = new Mesh(ringGeometry, ringMaterial);
    ringMesh.rotation.x = Math.PI * 0.5; // Position the ring horizontally
    planetMesh.add(ringMesh);
  }

  planet.moons?.map((moon) => {
    createMoon(moon, planetMesh);
  });

  return planetMesh;
});
