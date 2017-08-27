class World {
  constructor() {
    // Get the width and the height of the screen,
    // use them to set up the aspect ratio of the camera
    // and the size of the renderer.
    this.HEIGHT = window.innerHeight;
    this.WIDTH = window.innerWidth;

    // Create the scene
    this.scene = new THREE.Scene();

    // Add a fog effect to the scene; same color as the
    // background color used in the style sheet
    this.scene.fog = new THREE.Fog(COLORS.choco, 100, 150);

    // Create the camera
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

    // Set the position of the camera
    this.camera.position.x = 0;
    this.camera.position.z = 100;
    this.camera.position.y = 50;
    //https://threejs.org/docs/#manual/introduction/Matrix-transformations
    this.camera.rotation.x = Math.PI/6;

    // Create the renderer
    this.renderer = new THREE.WebGLRenderer({
        // Allow transparency to show the gradient background
        // we defined in the CSS
        alpha: true,

        // Activate the anti-aliasing; this is less performant,
        // but, as our project is low-poly based, it should be fine :)
        antialias: true
    });

    // Define the size of the renderer; in this case,
    // it will fill the entire screen
    this.renderer.setSize(this.WIDTH, this.HEIGHT);

    // Enable shadow rendering
    this.renderer.shadowMap.enabled = true;
    //this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Add the DOM element of the renderer to the
    // container we created in the HTML
    this.container = document.getElementById('world');
    this.container.appendChild(this.renderer.domElement);

    // Listen to the screen: if the user resizes it
    // we have to update the camera and the renderer size
    //this.window.addEventListener('resize', handleWindowResize, false);
  }
}
