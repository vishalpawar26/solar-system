import * as THREE from "three";
import { MapControls } from "three/addons/controls/MapControls.js";
import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer.js";

import { planetTextures } from "./utils/planet_textures";
import { animatePlanets } from "./helper/animate_planets";
import { showPlanetNames } from "./helper/show_planet_names";

// initialize variables
export const planetTrails: THREE.Line[] = [];

// initialize scene
export const scene = new THREE.Scene();
scene.background = planetTextures.milkywayTexture;

// initialize camera
const camera = new THREE.PerspectiveCamera(
  35,
  innerWidth / innerHeight,
  0.1,
  5000
);
camera.position.set(75, 50, 0);
scene.add(camera);

// add the ligths
const ambientLight = new THREE.AmbientLight("#ffffff", 0.075);
const pointLight = new THREE.PointLight("#ffffff", 2, 0, 0.1);
scene.add(ambientLight, pointLight);

// initialize canvas and div
const canvas = document.querySelector("canvas.threejs");

// check if canvas is not null
if (canvas instanceof HTMLCanvasElement) {
  // initialize renderer
  const webGLRenderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  webGLRenderer.setSize(window.innerWidth, window.innerHeight);

  const labelRenderer = new CSS2DRenderer();
  labelRenderer.setSize(window.innerWidth, window.innerHeight);
  labelRenderer.domElement.style.position = "absolute";
  labelRenderer.domElement.style.top = "0px";
  document.body.appendChild(labelRenderer.domElement);

  const orbitControls = new MapControls(camera, labelRenderer.domElement);
  orbitControls.enableDamping = true;

  // handle resizing of the window
  window.addEventListener("resize", () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();

    webGLRenderer.setSize(window.innerWidth, window.innerHeight);
    labelRenderer.setSize(window.innerWidth, window.innerHeight);
  });

  function animate() {
    // add animations to the planets
    animatePlanets();

    orbitControls.update();
    webGLRenderer.render(scene, camera);
    labelRenderer.render(scene, camera);
    window.requestAnimationFrame(animate);
  }

  animate();
  showPlanetNames();
} else {
  console.error("Canvas element not found or is not a valid HTMLCanvasElement");
}
