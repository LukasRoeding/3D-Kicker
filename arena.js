import * as THREE from './node_modules/three/build/three.module.js';
const texture = new THREE.TextureLoader().load( 'ArenaTexture.jpg' );
const material = new THREE.MeshBasicMaterial( { map: texture } );
let Arena = []
let floor = new THREE.Mesh(new THREE.BoxGeometry( 21.1, 1, 11 ), material )
Arena.push(floor)

let wall = new THREE.Mesh(new THREE.BoxGeometry( 10, 2, 1 ), material )
wall.rotateY(Math.PI / 2);
wall.position.x = 10;
wall.position.y = 3;
Arena.push(wall);

let wall2 = new THREE.Mesh(new THREE.BoxGeometry( 10, 2, 1 ), material )
wall2.rotateY(Math.PI / 2);
wall2.position.x = -10;
wall2.position.y = 3;
Arena.push(wall2)

let wall3 = new THREE.Mesh(new THREE.BoxGeometry( 21.1, 4, 1 ), material )
wall3.position.z = -5;
wall3.position.y = 2;
Arena.push(wall3)

let wall4 = new THREE.Mesh(new THREE.BoxGeometry( 21.1, 4, 1 ), material )
wall4.position.z = 5;
wall4.position.y = 2;
Arena.push(wall4)

let wall5 = new THREE.Mesh(new THREE.BoxGeometry( 3, 2, 1 ), material )
wall5.rotateY(Math.PI / 2);
wall5.position.x = 10;
wall5.position.z = 3;
wall5.position.y = 1;
Arena.push(wall5);

let wall6 = new THREE.Mesh(new THREE.BoxGeometry( 3, 2, 1 ), material )
wall6.rotateY(Math.PI / 2);
wall6.position.x = 10;
wall6.position.z = -3;
wall6.position.y = 1;
Arena.push(wall6);

let wall7 = new THREE.Mesh(new THREE.BoxGeometry( 3, 2, 1 ), material )
wall7.rotateY(Math.PI / 2);
wall7.position.x = -10;
wall7.position.z = 3;
wall7.position.y = 1;
Arena.push(wall7);

let wall8 = new THREE.Mesh(new THREE.BoxGeometry( 3, 2, 1 ), material )
wall8.rotateY(Math.PI / 2);
wall8.position.x = -10;
wall8.position.z = -3;
wall8.position.y = 1;
Arena.push(wall8);

export default Arena;