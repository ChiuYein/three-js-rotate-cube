import * as THREE from "three";
import { OrbitControls } from "OrbitControls";

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
const material = new THREE.MeshNormalMaterial();

//mesh
const box = new THREE.Mesh(boxGeometry, material);
scene.add(box);

//renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

renderer.render(scene, camera);

//controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const clock = new THREE.Clock();

//animate
function animate(){
    const elapsedTime = clock.getElapsedTime();
    //rotation
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;

    box.position.x = Math.cos(elapsedTime) * 3;
    box.position.y = Math.sin(elapsedTime) * 3;
    
    //update
    controls.update();

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
