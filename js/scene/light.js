class Light {
  constructor() {
    //http://learningthreejs.com/blog/2012/01/20/casting-shadows/

    this.hemisphereLight = new THREE.HemisphereLight(0xffffff,COLORS.pine, .9)

    this.spotLight = new THREE.SpotLight( 0xffffff, .9 );
    this.spotLight.position.set(30, 120, 100);
    this.spotLight.shadow.mapSize.width = 2048;
    this.spotLight.shadow.mapSize.height = 2048;
    this.spotLight.castShadow = true;
    this.spotLight.shadow.camera.visible = true;

  }
}
