import { MeshStandardMaterial, MeshBasicMaterial } from "three";
import { planetTextures } from "../utils/planet_textures";

export type Moon = {
  name: string;
  radius: number;
  distance: number;
  speed: number;
  rotationSpeed: number;
  material: MeshStandardMaterial;
};

export type Planet = {
  name: string;
  radius: number;
  distance: number;
  speed: number;
  rotationSpeed: number;
  material: MeshStandardMaterial | MeshBasicMaterial;
  moons?: Moon[];
};

export const planets: Planet[] = [
  {
    name: "Sun",
    radius: 5,
    distance: 0,
    speed: 0,
    rotationSpeed: 0.0005,
    material: new MeshBasicMaterial({
      map: planetTextures.sunTexture,
    }),
  },
  {
    name: "Mercury",
    radius: 0.265,
    distance: 17,
    speed: 0.4,
    rotationSpeed: 0.01,
    material: new MeshStandardMaterial({
      map: planetTextures.mercuryTexture,
    }),
  },
  {
    name: "Venus",
    radius: 0.645,
    distance: 23,
    speed: 0.3,
    rotationSpeed: 0.0075,
    material: new MeshStandardMaterial({
      map: planetTextures.venusTexture,
    }),
  },
  {
    name: "Earth",
    radius: 0.69,
    distance: 27.5,
    speed: 0.05,
    rotationSpeed: 0.035,
    material: new MeshStandardMaterial({
      map: planetTextures.earthTexture,
    }),
    moons: [
      {
        name: "Moon",
        radius: 0.185,
        distance: 3,
        speed: 0.1,
        rotationSpeed: 0.03,
        material: new MeshStandardMaterial({
          map: planetTextures.moonTexture,
        }),
      },
    ],
  },
  {
    name: "Mars",
    radius: 0.37,
    distance: 35,
    speed: 0.04,
    rotationSpeed: 0.03,
    material: new MeshStandardMaterial({
      map: planetTextures.marsTexture,
    }),
    moons: [
      {
        name: "Phobos",
        radius: 0.08,
        distance: 2.5,
        speed: 0.125,
        rotationSpeed: 0.045,
        material: new MeshStandardMaterial({
          map: planetTextures.phobosTexture,
        }),
      },
      {
        name: "Deimos",
        radius: 0.05,
        distance: 3.1,
        speed: 0.11,
        rotationSpeed: 0.04,
        material: new MeshStandardMaterial({
          map: planetTextures.deimosTexture,
        }),
      },
    ],
  },
  {
    name: "Jupiter",
    radius: 1.5,
    distance: 95,
    speed: 0.015,
    rotationSpeed: 0.025,
    material: new MeshStandardMaterial({
      map: planetTextures.jupiterTexture,
    }),
    moons: [
      {
        name: "Io",
        radius: 0.225,
        distance: 4,
        speed: 0.12,
        rotationSpeed: 0.04,
        material: new MeshStandardMaterial({
          map: planetTextures.ioTexture,
        }),
      },
      {
        name: "Europa",
        radius: 0.15,
        distance: 6,
        speed: 0.09,
        rotationSpeed: 0.045,
        material: new MeshStandardMaterial({
          map: planetTextures.europaTexture,
        }),
      },
    ],
  },
  {
    name: "Saturn",
    radius: 1.225,
    distance: 165,
    speed: 0.0125,
    rotationSpeed: 0.06,
    material: new MeshStandardMaterial({
      map: planetTextures.saturnTexture,
    }),
  },
  {
    name: "Uranus",
    radius: 0.54,
    distance: 330,
    speed: 0.01,
    rotationSpeed: 0.045,
    material: new MeshStandardMaterial({
      map: planetTextures.uranusTexture,
    }),
  },
  {
    name: "Neptune",
    radius: 0.525,
    distance: 500,
    speed: 0.009,
    rotationSpeed: 0.04,
    material: new MeshStandardMaterial({
      map: planetTextures.neptuneTexture,
    }),
  },
];
