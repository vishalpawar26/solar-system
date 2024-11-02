import { Mesh } from "three";
import { planets } from "../constants/planets";
import { planetMeshes } from "../main";

export const animatePlanets = () => {
  planetMeshes.map((planet, planetIndex) => {
    planet.rotation.y += planets[planetIndex].rotationSpeed;

    const planetSpeed = planet.rotation.y * planets[planetIndex].speed;

    planet.position.x = Math.sin(planetSpeed) * planets[planetIndex].distance;
    planet.position.z = Math.cos(planetSpeed) * planets[planetIndex].distance;

    // animating the moons
    planetMeshes[planetIndex].children.map((moon, moonIndex) => {
      if (moon instanceof Mesh && moon.geometry.type === "SphereGeometry") {
        const planetMoon = planets[planetIndex].moons;

        if (planetMoon) {
          moon.rotation.y += planetMoon[moonIndex]?.rotationSpeed;

          const moonSpeed = moon.rotation.y * planetMoon[moonIndex]?.speed;

          moon.position.x =
            Math.sin(moonSpeed) * planetMoon[moonIndex]?.distance;
          moon.position.z =
            Math.cos(moonSpeed) * planetMoon[moonIndex]?.distance;
        }
      }
    });
  });
};
