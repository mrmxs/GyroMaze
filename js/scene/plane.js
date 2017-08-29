// https://threejs.org/docs/index.html#api/geometries/PlaneGeometry

class Plane {
  constructor(x, y) {
    const geometry = new THREE.PlaneGeometry( x, y);
    const material = new THREE.MeshPhysicalMaterial({
      color: COLORS.cream,
      side: THREE.FrontSide,
    });

    this.mesh = new Physijs.BoxMesh(geometry, material);
    this.mesh.receiveShadow = true;
    this.mesh.castShadow = true;
  }
}
