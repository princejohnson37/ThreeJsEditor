import { useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import * as CSG from '@react-three/csg'
import React from "react";
/**
 * A functional component that loads an STL file and returns a
 * <mesh> element with the given material.
 *
 * @param props The props for this component
 * @param props.url The URL of the STL file to load
 * @param props.onClick A function to call when the mesh is clicked
 * @returns A <mesh> element with the loaded STL geometry and the given material
 */
const STLFileLoader = (props: { url: string; onClick: (event: any) => void }): JSX.Element => {
	const { url, onClick } = props;
	const geometry = useLoader(STLLoader, url);
  React.useEffect(()=> {console.log(geometry)},[]);
	const handleClick = (event: any) => {
		onClick(event);
	};

	return (
		<mesh onClick={handleClick} >
			<meshStandardMaterial attach='material'/>
      <CSG.Geometry>
        <CSG.Base geometry={geometry}>
          </CSG.Base>
        <CSG.Subtraction position={[-1,1,1]}>
          <sphereGeometry args={[1]} />
        </CSG.Subtraction>
      </CSG.Geometry>
		</mesh>
	);
};

export default STLFileLoader;
