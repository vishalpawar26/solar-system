import { Mesh, Object3D } from "three";
import { Moon } from "../constants/planets";
import { sphereGeometry } from "../utils/geometries";

export const createMoon = (moon: Moon, planet: Object3D) => {
  console.log(moon);
  const moonMesh = new Mesh(sphereGeometry, moon.material); // creating the mesh
  moonMesh.scale.setScalar(moon.radius); // setting the scale
  moonMesh.position.z = moon.distance; // setting the position
  planet.add(moonMesh); // adding to the moons to the planet

  return moonMesh;
};
