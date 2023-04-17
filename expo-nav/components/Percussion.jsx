import { View, StyleSheet } from "react-native";

import Conga from "./Percussion/Conga";
import DrumSet from "./Percussion/DrumSet";
import Timpani from "./Percussion/Timpani";
import Xylophone from "./Percussion/Xylophone";

function Percussion() {

    return (
        <View style={styles.container}>
            <Conga style={styles.instrblock}/>
            <DrumSet style={styles.instrblock}/>
            <Timpani style={styles.instrblock}/>
            <Xylophone style={styles.instrblock}/>
        </View>
    )
}

export default Percussion;

const styles = StyleSheet.create({
    container: {
        
        borderColor: "#aaaaaa",
        borderStyle: "solid",
        borderWidth: 7,
        borderRadius: "10%",
        margin: 10
    },

    instrblock: {

    }
})