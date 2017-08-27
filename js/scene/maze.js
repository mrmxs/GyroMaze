class MazeModel {
  constructor(scale) {
    this.createMap();

    const x = this.map.length,
          y = this.map[0].length,
          mazeSizeX = y*scale, // transposed matrix
          mazeSizeY = x*scale;

    this.plane = new Plane(mazeSizeX, mazeSizeY);
    this.mesh = this.plane.mesh;

    const blockSize = {
      width: scale,
      height: scale/5,
      depth: scale/2,
    };
    this.hMaterial = new THREE.MeshPhysicalMaterial({color: COLORS.pine});
    this.vMaterial = new THREE.MeshPhysicalMaterial({color: COLORS.choco});

    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        if (j === 0) { // cell has left
          // add vertical geometry
          const geometry = new THREE.BoxGeometry(
            blockSize.width, blockSize.height, blockSize.depth );
          geometry.
            applyMatrix(new THREE.Matrix4().makeRotationZ(-Math.PI/2));
          geometry.applyMatrix(
            new THREE.Matrix4().setPosition(
              new THREE.Vector3(
                scale*j - mazeSizeX/2,
                -scale*(i + 0.5) + mazeSizeY/2,
                0 )));

          const mesh = new THREE.Mesh( geometry, this.hMaterial);
          mesh.receiveShadow = true;
          mesh.castShadow = true;

          this.mesh.add(mesh);
        }

        if (i === 0) { // cell has top
          // add horisontal geometry
          const geometry = new THREE.BoxGeometry(
            blockSize.width, blockSize.height, blockSize.depth );
          geometry.applyMatrix(
            new THREE.Matrix4().setPosition(
              new THREE.Vector3(
                scale*(j + 0.5) - mazeSizeX/2,
                -scale*i + mazeSizeY/2,
                0 )));

          const mesh = new THREE.Mesh( geometry, this.hMaterial);
          mesh.receiveShadow = true;
          mesh.castShadow = true;

          this.mesh.add(mesh);
        }

        if (this.map[i][j].right) {
          // add vertical geometry
          const geometry = new THREE.BoxGeometry(
            blockSize.width, blockSize.height, blockSize.depth );
          geometry.
            applyMatrix(new THREE.Matrix4().makeRotationZ(-Math.PI/2));
          geometry.applyMatrix(
            new THREE.Matrix4().setPosition(
              new THREE.Vector3(
                scale*(j + 1) - mazeSizeX/2,
                -scale*(i + 0.5) + mazeSizeY/2,
                0 )));

          const mesh = new THREE.Mesh( geometry, this.hMaterial);
          mesh.receiveShadow = true;
          mesh.castShadow = true;

          this.mesh.add(mesh);
        }

        if (this.map[i][j].bottom) {
          // add horisontal geometry
          const geometry = new THREE.BoxGeometry(
            blockSize.width, blockSize.height, blockSize.depth );
          geometry.applyMatrix(
            new THREE.Matrix4().setPosition(
              new THREE.Vector3(
                scale*(j + 0.5) - mazeSizeX/2,
                -scale*(i + 1) + mazeSizeY/2,
                0 )));

          const mesh = new THREE.Mesh( geometry, this.hMaterial);
          mesh.receiveShadow = true;
          mesh.castShadow = true;

          this.mesh.add(mesh);
        }
      }
    }

    this.mesh.position.y = 100;
    this.mesh.position.x = 0;
    this.mesh.position.z = 0;
  }

  createMap() {
    this.map = (new Maze(10, 10)).matrix;
  }

  testMap() {
    //   _ _ _ _
    //  |.|.'_'_|
    //  |.|.'_'_|
    //  |.|_'_'.|
    //  |.|.'.|.|
    //  |_'_|_'_|
    //
    return  [[
      {x: 0, y: 0, right: true, bottom: false},
      {x: 0, y: 1, right: false, bottom: false},
      {x: 0, y: 2, right: false, bottom: true},
      {x: 0, y: 3, right: true, bottom: true},
    ],[
      {x: 1, y: 0, right: true, bottom: false},
      {x: 1, y: 1, right: false, bottom: false},
      {x: 1, y: 2, right: false, bottom: true},
      {x: 1, y: 3, right: true, bottom: true},
    ],[
      {x: 2, y: 0, right: true, bottom: false},
      {x: 2, y: 1, right: false, bottom: true},
      {x: 2, y: 2, right: false, bottom: true},
      {x: 2, y: 3, right: true, bottom: false},
    ],[
      {x: 3, y: 0, right: true, bottom: false},
      {x: 3, y: 1, right: false, bottom: false},
      {x: 3, y: 2, right: true, bottom: false},
      {x: 3, y: 3, right: true, bottom: false},
    ],[
      {x: 4, y: 0, right: false, bottom: true},
      {x: 4, y: 1, right: true, bottom: true},
      {x: 4, y: 2, right: false, bottom: true},
      {x: 4, y: 3, right: true, bottom: true},
    ]];
  }
}
