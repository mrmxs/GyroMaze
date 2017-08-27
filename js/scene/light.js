class Light {
  constructor() {
    //http://learningthreejs.com/blog/2012/01/20/casting-shadows/

    // A hemisphere light is a gradient colored light;
    // the first parameter is the sky color, the second parameter is the ground color,
    // the third parameter is the intensity of the light
     this.hemisphereLight = new THREE.HemisphereLight(0xffffff,COLORS.pine, .9)

    // A directional light shines from a specific direction.
    // It acts like the sun, that means that all the rays produced are parallel.
    // this.shadowLight = new THREE.DirectionalLight(0xffffff, .9);
    //
    // // Set the direction of the light
    // this.shadowLight.position.set(0, 30, 200);

    // define the visible area of the projected shadow
    // this.shadowLight.shadow.camera.left = -400;
    // this.shadowLight.shadow.camera.right = 400;
    // this.shadowLight.shadow.camera.top = 400;
    // this.shadowLight.shadow.camera.bottom = -400;
    // this.shadowLight.shadow.camera.near = 100;
    // this.shadowLight.shadow.camera.far = 500;

    // define the resolution of the shadow; the higher the better,
    // but also the more expensive and less performant
    // this.shadowLight.shadow.mapSize.width = 2048;
    // this.shadowLight.shadow.mapSize.height = 2048;
    //
    // this.shadowLight.shadow.camera.visible = true;
    // this.shadowLight.castShadow = true;


    // spot light
    this.spotLight = new THREE.SpotLight( 0xffffff, .9 );
    this.spotLight.position.set( 0, 300, 200 );
    this.spotLight.shadow.mapSize.width = 2048;
    this.spotLight.shadow.mapSize.height = 2048;
    this.spotLight.castShadow = true;
    this.spotLight.shadow.camera.visible = true;

  }
}
