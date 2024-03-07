import React from "react";
import { useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { Base, Subtraction } from "@react-three/csg";

const STLFileLoader = ({ url, onClick }) => {
	const geometry = useLoader(STLLoader, url);

	const handleClick = (event) => {
		onClick(event);
	};

	return (
		<>
			<Base geometry={geometry} scale={1.5} position={[0, 0.5, 0]} />
			{/** Chain your boolean operations: Addition, Subtraction, Difference and Intersection. */}
		</>
	);
};

export default STLFileLoader;
