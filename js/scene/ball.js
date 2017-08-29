class BallModel {
  constructor(radius) {
    //https://threejs.org/docs/#api/geometries/SphereGeometry

    const geometry = new THREE.SphereGeometry(radius, 32, 32);
    const material = new THREE.MeshPhongMaterial({
        color: COLORS.cherry,
        //transparent:true,
        //opacity:.6,
        //shading:THREE.FlatShading,
    });

    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.z = 10;
    this.mesh.receiveShadow = true;
    this.mesh.castShadow = true;
  }

}
