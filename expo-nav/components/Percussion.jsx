import { View, StyleSheet } from "react-native";

import Conga from "./Percussion/Conga";
import DrumSet from "./Percussion/DrumSet";
import Timpani from "./Percussion/Timpani";
import Xylophone from "./Percussion/Xylophone";

function Percussion() {

    return (
        <View style={styles.container}>
            <Conga/>
            <DrumSet/>
            <Timpani/>
            <Xylophone/>
        </View>
    )
}

export default Percussion;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eeeeee",
    }
})