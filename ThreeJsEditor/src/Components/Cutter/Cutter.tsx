import { Subtraction, useCSG } from "@react-three/csg";
import { OrbitControls, PivotControls } from "@react-three/drei";
import { useState } from "react";

const Cutter = () => {
	const { update } = useCSG();
	const [orbitControls, setOrbitControls] = useState(false);
	return (
		<PivotControls onDragStart={()=>setOrbitControls(false)} onDragEnd={()=>setOrbitControls(true)} scale={55} onDrag={update}>
			<Subtraction>
				<boxGeometry args={[25, 25, 25]} />
			</Subtraction>
			<OrbitControls enabled={orbitControls} dampingFactor={1} />
		</PivotControls>
	);
};
export default Cutter;
