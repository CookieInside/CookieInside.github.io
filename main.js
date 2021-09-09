import './style.css'

import * as THREE from 'three';

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
})

/*
const gripHelper = new THREE.GridHelper(200, 50);
scene.add(gripHelper)
*/

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(300);

renderer.render(scene, camera);

const loader = new THREE.TextureLoader();



//SUN
var radSun = 69.6340;
const geomentrySun = new THREE.SphereGeometry(69.634, 32, 16);
const materialSun = new THREE.MeshBasicMaterial({ map: loader.load('resources/2k_sun.jpg'),});
const sun = new THREE.Mesh(geomentrySun, materialSun);

//Mercury
const geomentryMercury = new THREE.SphereGeometry(0.24397, 32, 16);
const materialMercury = new THREE.MeshBasicMaterial({ map: loader.load('resources/Bump_1k.png'),});
const mercury = new THREE.Mesh(geomentryMercury, materialMercury);

//Venus
const geomentryVenus = new THREE.SphereGeometry(0.60518, 32, 16);
const materialVenus = new THREE.MeshBasicMaterial({ map: loader.load('resources/2k_venus_surface.jpg'),});
const venus = new THREE.Mesh(geomentryVenus, materialVenus);

//EARTH
const geomentryEarth = new THREE.SphereGeometry(0.6371, 32, 16);
const materialEarth = new THREE.MeshBasicMaterial({ map: loader.load('resources/Earth_Diffuse.jpg'),});
const earth = new THREE.Mesh(geomentryEarth, materialEarth);

//Mars
const geomentryMars = new THREE.SphereGeometry(0.33895, 32, 16);
const materialMars = new THREE.MeshBasicMaterial({ map: loader.load('resources/mars.png'),});
const mars = new THREE.Mesh(geomentryMars, materialMars);

//Jupiter
const geomentryJupiter = new THREE.SphereGeometry(6.9911, 32, 16);
const materialJupiter = new THREE.MeshBasicMaterial({ map: loader.load('resources/jupiter.jpg'),});
const jupiter = new THREE.Mesh(geomentryJupiter, materialJupiter);

//Saturn
const geomentrySaturn = new THREE.SphereGeometry(5.8232, 32, 16);
const materialSaturn = new THREE.MeshBasicMaterial({ map: loader.load('resources/2k_saturn.jpg'),});
const geomentrySaturnRing = new THREE.TorusGeometry(9, 2, 2, 100);
const materialSaturnRing = new THREE.MeshBasicMaterial({ map: loader.load('resources/ring.PNG'),});
const saturn = new THREE.Mesh(geomentrySaturn, materialSaturn);
const saturnRing = new THREE.Mesh(geomentrySaturnRing, materialSaturnRing);

//Uranus
const geomentryUranus = new THREE.SphereGeometry(2.5362, 32, 16);
const materialUranus = new THREE.MeshBasicMaterial({ map: loader.load('resources/uranusmap.jpg'),});
const uranus = new THREE.Mesh(geomentryUranus, materialUranus);

//Neptune
const geomentryNeptune = new THREE.SphereGeometry(2.4622, 32, 16);
const materialNeptune = new THREE.MeshBasicMaterial({ map: loader.load('resources/neptunemap.jpg'),});
const neptune = new THREE.Mesh(geomentryNeptune, materialNeptune);

scene.add(sun);
scene.add(earth);
scene.add(mercury);
scene.add(venus);
scene.add(mars);
scene.add(jupiter);
scene.add(uranus);
scene.add(saturn, saturnRing);
scene.add(neptune);
earth.position.setX(15.2 + radSun);
mercury.position.setX(5.8 + radSun);
venus.position.setX(10.8 + radSun);
mars.position.setX(22.79 + radSun);
jupiter.position.setX(66.4 + radSun);
saturn.position.setX(143 + radSun);
saturnRing.position.setX(143 + radSun);
saturnRing.rotation.x = 90;
uranus.position.setX(280 + radSun);
neptune.position.setX(450 + radSun);





const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: true } );
const sphere = new THREE.Mesh( geometry, material );
scene.add(sphere);

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
    requestAnimationFrame(animate);

    earth.rotation.y += 0.01670;
    mars.rotation.y += 0.0086822;
    mercury.rotation.y += 0.00010892;
    venus.rotation.y += 0.00006872;
    neptune.rotation.y += 0.01113;
    saturnRing.rotation.z += -0.00765;
    saturn.rotation.y += 0.00765;
    jupiter.rotation.y += 0.00695;
    sun.rotation.y += 0.000463;

    sphere.rotation.Z += 0.01;
    sphere.rotation.y += 0.05;
    sphere.rotation.x += 0.01;

    
    
    controls.update();

    renderer.render(scene, camera);
}

animate();