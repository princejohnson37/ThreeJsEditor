import { Subtraction, useCSG } from "@react-three/csg";
import { PivotControls } from "@react-three/drei";

const Cutter = () => {
	const { update } = useCSG();
	return (
		<PivotControls scale={55} onDrag={update}>
			<Subtraction>
				<boxGeometry args={[25,25,25]}/>
			</Subtraction>
		</PivotControls>
	);
};
export default Cutter;