import { Mesh } from "three";
import { Planet } from "../constants/planets";
import { sphereGeometry } from "../utils/geometries";
import { createTrail } from "./create_trails";
import { planetTrails, scene } from "../main";

export const createPlanet = (planet: Planet) => {
  const planetMesh = new Mesh(sphereGeometry, planet.material); // create mesh
  planetMesh.scale.setScalar(planet.radius); // setting the scale
  planetMesh.position.x = planet.distance; // setting the distance from the sun
  scene.add(planetMesh); // adding to the scene
  scene.add(createTrail(planet, planetTrails)); // creating trail

  return planetMesh;
};
