import React, { Component } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

class Three extends Component {
  componentDidMount() {
    //scene
    this.scene = new THREE.Scene();

    //renderer
    this.renderer = new THREE.WebGL1Renderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.mount.appendChild(this.renderer.domElement);

    //camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 5;

    //create box
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({
      color: 0x00fff99,
    });
    this.cube = new THREE.Mesh(geometry, material);

    this.renderer.render(this.scene, this.camera);

    //add cube to scene

    this.scene.add(this.cube);
    this.animation();
    this.renderer.render(this.scene, this.camera);

    //orbitControls
    new OrbitControls(this.camera, this.renderer.domElement);

    //Event Handelers
    window.addEventListener("resize", this.handleWindowResize);
  }

  animation = () => {
    requestAnimationFrame(this.animation);
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  };
  handleWindowResize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <div>
        <div className="flex-home">
          <div className="home-item">
            <div className="home-content ">
              <h5>Portfolio</h5>
              <br />
              <p>
                Officia enim do irure Lorem nulla incididunt Officia cillum sunt
                aliquip esse .
              </p>
              <br />
              <a href="/work">
                <button className="btn41-43 btn-42">Get Start</button>
              </a>
            </div>
          </div>
        </div>
        <div
          ref={(mount) => {
            this.mount = mount;
          }}
        />
      </div>
    );
  }
}

export default Three;
