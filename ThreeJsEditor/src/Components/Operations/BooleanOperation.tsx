import React, { useRef, useEffect } from "react";
import { SUBTRACTION, Brush, Evaluator } from "three-bvh-csg";
import { MeshStandardMaterial, Mesh, SphereGeometry, BoxGeometry } from "three";
import * as THREE from 'three'

const BooleanOperation = ({ canvas }) => {
	const canvasRef = useRef(canvas);

	useEffect(() => {
		// Create brushes
		const brush1 = new Brush(new SphereGeometry());
		brush1.updateMatrixWorld();

		const brush2 = new Brush(new BoxGeometry());
		brush2.position.y = 0.5;
		brush2.updateMatrixWorld();

		// Perform boolean operation
		const evaluator = new Evaluator();
		const result = evaluator.evaluate(brush1, brush2, SUBTRACTION);

		// Create mesh for the result
		const mesh = new Mesh(result.geometry, new MeshStandardMaterial({ color: 0xff0000 }));

		// Get canvas context
		const ctx = canvasRef.current.getContext("webgl");

		// Render the result
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			canvasRef.current.width / canvasRef.current.height,
			0.1,
			1000
		);
		const renderer = new THREE.WebGLRenderer({ context: ctx });

		renderer.setSize(canvasRef.current.width, canvasRef.current.height);
		scene.add(mesh);
		camera.position.z = 5;

		const animate = () => {
			requestAnimationFrame(animate);
			mesh.rotation.x += 0.01;
			mesh.rotation.y += 0.01;
			renderer.render(scene, camera);
		};

		animate();

		// Clean up
		return () => {
			scene.remove(mesh);
			mesh.geometry.dispose();
			mesh.material.dispose();
			renderer.dispose();
		};
	}, []);

	return <canvas ref={canvasRef} />;
};

export default BooleanOperation;
