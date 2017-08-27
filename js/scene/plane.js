// https://threejs.org/docs/index.html#api/geometries/PlaneGeometry

class Plane {
  constructor() {
    const geometry = new THREE.PlaneGeometry( 100, 100);

    //https://threejs.org/docs/#manual/introduction/Matrix-transformations
    geometry.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/6));

    const material = new THREE.MeshPhysicalMaterial({
      color: COLORS.cream,
      side: THREE.FrontSide,
    });

    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.receiveShadow = true;
    this.mesh.position.y = 100;
  }
}
