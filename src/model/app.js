import THREE from 'treejs';

// ThreeJS scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z = 30;

// Web GL renderer
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

// Light
const light = new THREE.AmbientLight(0x404040, 1);
scene.add(light);
// Directional lights
const directionalLight = new THREE.DirectionalLight(0xFF245E, 2);
directionalLight.position.set(0, 1, 9);
scene.add(directionalLight);
const directionalLight2 = new THREE.DirectionalLight(0x2EFF96, .10);
directionalLight2.position.set(-10, 0, -2);
scene.add(directionalLight2);
const directionalLight3 = new THREE.DirectionalLight(0xA24FFF, 2);
directionalLight3.position.set(-4, 2, 1);
scene.add(directionalLight3);

// 

// GLTF Loader
const gltfLoader = new THREE.GLTFLoader();
gltfLoader.load('./asset/model/cats.gltf', (gltf) => {
    const root = gltf.scene;
    root.position.set(0,0,0);
    root.rotation.y = Math.PI * -0.3;
    root1 = root.getObjectByName('cats');
    scene.add(root);
})

//Orbit controls
const controls = new THREE.OrbitControls(camera);
controls.Zoom = true;
controls.Pan = false;
controls.Rotate = true;

// Animate function
const animate = function(){
    requestAnimationFrame(animate);
    if(root1){
        root1.rotation.y += 0.05;
    }
    controls.update();
    renderer.render(scene,camera);
};
animate();
