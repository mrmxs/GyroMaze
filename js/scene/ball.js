class BallModel {
  constructor(radius) {
    //https://threejs.org/docs/#api/geometries/SphereGeometry

    // create the geometry (shape) of the cylinder;
    // the parameters are:
    // radius top, radius bottom, height, number of segments on the radius, number of segments vertically
    const geometry = new THREE.SphereGeometry(radius, 32, 32);

    // rotate the geometry on the x axis
    //geom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));

    // create the material
    const material = new THREE.MeshPhongMaterial({
        color: COLORS.cherry,
        //transparent:true,
        //opacity:.6,
        //shading:THREE.FlatShading,
    });

    // To create an object in Three.js, we have to create a mesh
    // which is a combination of a geometry and some material
    this.mesh = new THREE.Mesh(geometry, material);

    // Allow the sea to receive shadows
    this.mesh.receiveShadow = true;
    this.mesh.castShadow = true;

    // push it a little bit at the bottom of the scene
    this.mesh.position.y = 110;
  }

}
