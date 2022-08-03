import * as THREE from './node_modules/three/build/three.module.js';



function createRow(players, position, scene, physics, color) {
    const material = new THREE.MeshBasicMaterial( { color: color } );
    let startPosition = -2.5;
    let row = [];
    for (let index = 0; index < players; index++) {
       let player = new THREE.Mesh(new THREE.BoxGeometry( 0.5, 3, 0.5 ), material )
       player.position.x = position;
       if (players > 1) {
        player.position.z = startPosition + (5 / (players - 1) * (index));
       }
       player.position.y = 2.2;
       scene.add( player );
       physics.addMesh( player );
       row.push(player)
    }
    return row;
}

export { createRow }