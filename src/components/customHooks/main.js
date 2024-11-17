import Bubble from "./bubble";


import { usePointerPosition } from "./usePointerPosition";
import { useDelayedValue } from "./useDelayedValue";

const Main = () => {

    const pos1 = usePointerPosition();

    const pos2 = useDelayedValue(pos1 , 50);
    const pos3 = useDelayedValue(pos2 , 70);
    const pos4 = useDelayedValue(pos3 , 90);
    const pos5 = useDelayedValue(pos4 , 100);

    return(
        <>
            <Bubble pos={pos1} opacity={1} />
            <Bubble pos={pos2} opacity={0.8} />
            <Bubble pos={pos3} opacity={0.6} />
            <Bubble pos={pos4} opacity={0.4} />
            <Bubble pos={pos5} opacity={0.2} />
        </>
    )
}

export default Main;