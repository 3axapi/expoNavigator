import { Image } from "react-native";

import Conga from "./Percussion/Conga";
import DrumSet from "./Percussion/DrumSet";
import Timpani from "./Percussion/Timpani";
import Xylophone from "./Percussion/Xylophone";

function Percussion() {

    return (
        <>
            <Conga />
            <DrumSet />
            <Timpani />
            <Xylophone />
        </>
    )
}

export default Percussion;