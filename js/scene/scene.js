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
      // Rotate the propeller, the sea and the sky
      //airplane.propeller.rotation.x += 0.3;
      //sea.mesh.rotation.z += .005;
      //sky.mesh.rotation.z += .01;


      // to activate the lights, just add them to the scene
      this.world.scene.add(this.light.hemisphereLight);
      // this.world.scene.add(this.light.shadowLight);
      this.world.scene.add(this.light.spotLight);

      // add the mesh of the sea to the scene
      this.world.scene.add(this.maze.mesh);
      this.world.scene.add(this.ball.mesh);


      // render the scene
      this.world.renderer.render(this.world.scene, this.world.camera);

      // call the loop function again
      //requestAnimationFrame(loop);
  }
}
