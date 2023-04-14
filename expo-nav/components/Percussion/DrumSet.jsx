import { View, Image, StyleSheet } from "react-native"

function DrumSet() {

    return (
        <View style={styles.main}>
            <View style={styles.text}>
                <h2>DrumSet</h2>
            </View>
            <View style={styles.imageC}>
                <Image style={styles.image} source={require('../../src/drumset.jpg')}/>
            </View>
        </View>
    )
}

export default DrumSet;

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%",
        borderColor: "gray",
        borderStyle: "solid",
        borderWidth: 4
    },

    imageC: {
        width: "45%",
        height: "45%"
    },

    text: {
        width: "45%",
        height: "45%",
        color: "red"
    },

    main: {
        marginTop: 25,
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        flex: 1,
        justifyContent: "space-evenly"
    }
})