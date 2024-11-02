import { TextureLoader, CubeTextureLoader } from "three";

const textureLoader = new TextureLoader();
const cubeTextureLoader = new CubeTextureLoader().setPath(
  "public/textures/milkyway-cube-map/"
);

const mercuryTexture = textureLoader.load("/textures/2k_mercury.jpg");
const sunTexture = textureLoader.load("/textures/2k_sun.jpg");
const venusTexture = textureLoader.load("/textures/2k_venus_surface.jpg");
const earthTexture = textureLoader.load("/textures/2k_earth_daymap.jpg");
const moonTexture = textureLoader.load("/textures/2k_moon.jpg");
const marsTexture = textureLoader.load("/textures/2k_mars.jpg");
const deimosTexture = textureLoader.load("/textures/2k_deimos.jpg");
const phobosTexture = textureLoader.load("/textures/2k_phobos.jpg");
const jupiterTexture = textureLoader.load("/textures/2k_jupiter.jpg");
const ioTexture = textureLoader.load("/textures/2k_io.jpg");
const europaTexture = textureLoader.load("/textures/2k_europa.jpg");
const saturnTexture = textureLoader.load("/textures/2k_saturn.jpg");
const saturnRingsTexture = textureLoader.load(
  "/textures/2k_saturn_ring_alpha.png"
);
const uranusTexture = textureLoader.load("/textures/2k_uranus.jpg");
const neptuneTexture = textureLoader.load("/textures/2k_neptune.jpg");
const milkywayTexture = cubeTextureLoader.load([
  "px.png",
  "nx.png",
  "py.png",
  "ny.png",
  "pz.png",
  "nz.png",
]);

export const planetTextures = {
  sunTexture: sunTexture,
  mercuryTexture: mercuryTexture,
  venusTexture: venusTexture,
  earthTexture: earthTexture,
  moonTexture: moonTexture,
  marsTexture: marsTexture,
  phobosTexture: phobosTexture,
  deimosTexture: deimosTexture,
  jupiterTexture: jupiterTexture,
  ioTexture: ioTexture,
  europaTexture: europaTexture,
  saturnTexture: saturnTexture,
  saturnRingsTexture: saturnRingsTexture,
  uranusTexture: uranusTexture,
  neptuneTexture: neptuneTexture,
  milkywayTexture: milkywayTexture,
};
