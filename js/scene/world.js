class World {
  constructor() {
    this.HEIGHT = window.innerHeight;
    this.WIDTH = window.innerWidth;

    this.scene = new Physijs.Scene();
    this.scene.setGravity(new THREE.Vector3(0, 0, -10));
    this.scene.fog = new THREE.Fog(COLORS.choco, 100, 150);

    const aspectRatio = this.WIDTH / this.HEIGHT,
        fieldOfView = 60,
        nearPlane = 1,
        farPlane = 500;
    this.camera = new THREE.PerspectiveCamera(
        fieldOfView,
        aspectRatio,
        nearPlane,
        farPlane
        );
    this.camera.position.x = 0;
    this.camera.position.z = 100;
    this.camera.position.y = 0;
    //https://threejs.org/docs/#manual/introduction/Matrix-transformations
    //this.camera.rotation.x = Math.PI/6;

    this.renderer = new THREE.WebGLRenderer({
        alpha: true, // Allow transparency
        antialias: true, // Acnti-aliasing; less performant
    });
    this.renderer.setSize(this.WIDTH, this.HEIGHT);
    this.renderer.shadowMap.enabled = true;
    //this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.container = document.getElementById('world');
    this.container.appendChild(this.renderer.domElement);

    // Listen to screen resizes
    //this.window.addEventListener('resize', handleWindowResize, false);
  }
}
