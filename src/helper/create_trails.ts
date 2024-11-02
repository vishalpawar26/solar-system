import { BufferGeometry, LineBasicMaterial, Vector3, Line } from "three";
import { Planet } from "../constants/planets";

export const createTrail = (planet: Planet, planetTrails: Line[]) => {
  const trailGeometry = new BufferGeometry();
  const trailMaterial = new LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.25,
  });

  // Orbit radius (same as the planet's distance from the Sun)
  const points = [];
  const trailSegments = 100;

  // Create points in a circular orbit
  for (let i = 0; i <= trailSegments; i++) {
    const angle = (i / trailSegments) * Math.PI * 2;
    points.push(
      new Vector3(
        planet.distance * Math.cos(angle),
        0,
        planet.distance * Math.sin(angle)
      )
    );
  }

  // Set points as BufferGeometry attribute
  trailGeometry.setFromPoints(points);
  const trail = new Line(trailGeometry, trailMaterial);

  planetTrails.push(trail); // Store reference for updating
  return trail;
};
