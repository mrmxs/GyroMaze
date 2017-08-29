class Scene {
  constructor() {
    // set up the scene, the camera and the renderer
    this.world = new World();
    // add the lights
    this.light = new Light();
    // add the objects
    this.scale = 14;
    this.maze = new MazeModel(this.scale);
    this.ball = new BallModel(this.scale/4);
  }

  render() {
     const gn = new GyroNorm();
     const args = {
       frequencyfrequency: 20,
       orientationBase: GyroNorm.GAME,
       decimalCount: 2,
       gravityNormalized: true,
     };

    this.world.scene.add(this.light.hemisphereLight);
    this.world.scene.add(this.light.spotLight);

    this.world.scene.add(this.maze.mesh);
    this.world.scene.add(this.ball.mesh);
     
    let mazeX0 = null;

     gn.init(args).then(() => {
      gn.start(function(data) {

        if (!mazeX0) {
          mazeX0 = data.dm.gz;
        } else {
          this.maze.mesh.rotation.x = (data.dm.gz - mazeX0)/8;
        }
         this.maze.mesh.rotation.y = data.dm.gx/8;
        // z axis not intresting

        this.world.renderer.render(this.world.scene, this.world.camera);
      }.bind(this));
    }).catch(e => {
      // Catch if the DeviceOrientation or DeviceMotion is not supported by the browser or device
    });
  }
}
