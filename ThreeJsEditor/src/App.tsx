import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import STLFileLoader from "./Components/FileLoader/STLFileLoader";
import { SUBTRACTION, Brush, Evaluator } from "three-bvh-csg";

import "./App.css";
import { Geometry } from "@react-three/csg";
import Cutter from "./Components/Cutter/Cutter";

function GeneratedSphere({ position }) {
	return (
		<Sphere args={[3, 32, 32]} position={position}>
			<meshStandardMaterial color='red' />
		</Sphere>
	);
}

function App() {
	const [spherePosition, setSpherePosition] = useState(null);

	const handleSTLClick = (event) => {
		// Get the clicked position
		const { point } = event;
		setSpherePosition(point.toArray());
	};

	return (
		<div className='canvas-container'>
			<Canvas style={{ backgroundColor: "#0f0f0f" }} camera={{ position: [100, -100, 0] }}>
				<ambientLight intensity={0.5} />
				<mesh>
					<Geometry showOperations>
						<STLFileLoader onClick={handleSTLClick} url={"/model.stl"} />
						<Cutter />
					</Geometry>
				</mesh>
				{spherePosition && <GeneratedSphere position={spherePosition} />}
				<directionalLight position={[-2, 5, 2]} intensity={1} />
			</Canvas>
		</div>
	);
}

export default App;
