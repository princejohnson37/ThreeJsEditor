import React from "react";
import { useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

const STLFileLoader = ({ url, onClick }) => {
	const geometry = useLoader(STLLoader, url);

	const handleClick = (event) => {
		onClick(event);
	};

	return (
		<mesh onClick={handleClick} geometry={geometry}>
			<meshStandardMaterial attach='material' />
		</mesh>
	);
};

export default STLFileLoader;
