import * as THREE from "three";
//scene
const scene = new THREE.Scene();

//sizes
const sizes = {
  width: innerWidth,
  height: innerHeight,
};

//camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  1000
);
camera.position.z = 3;

//geometry
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

//material
const material = new THREE.MeshBasicMaterial({
  color: "red",
});

//mesh
const box = new THREE.Mesh(boxGeometry, material);
scene.add(box);

//renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

renderer.render(scene, camera);
