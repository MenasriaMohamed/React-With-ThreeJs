import React, { Component } from 'react';
import ReactDOM from "react-dom";
import * as THREE from "three";
class Test extends Component {
    componentDidMount =() => {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        // document.body.appendChild( renderer.domElement );
        // use ref as a mount point of the Three.js scene instead of the document.body
        this.mount.appendChild( renderer.domElement );
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
       
        var video   = document.createElement('video');
        video.width    = 50;
        video.height   = 50;
        video.autoplay = true;
        video.src = "http://techslides.com/demos/sample-videos/small.webm";
        var videoTexture = new THREE.Texture( video );
        var material   = new THREE.MeshLambertMaterial({
          videoTexture
        });
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
        camera.position.z = 5;
       
      }
    render() {
        return (
            <div ref={ref => (this.mount = ref)} >
                <div>Mouh</div>
            </div>
        );
    }
}
export default Test;