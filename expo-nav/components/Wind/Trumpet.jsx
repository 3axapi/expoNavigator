import { View, StyleSheet, Image } from "react-native"

function Trumpet() {

    return (
        <>
            <View style={styles.main}>
                <View style={styles.text}>
                    <p>The trumpet is a brass instrument commonly used in classical and jazz ensembles.</p>
                    <p>The trumpet group ranges from the piccolo trumpet—with the highest register in the brass family—to the bass trumpet, pitched one octave below the standard B♭ or C trumpet.</p>
                    <p>Trumpet-like instruments have historically been used as signaling devices in battle or hunting, with examples dating back to at least 1500 BC.</p>
                    <p>They began to be used as musical instruments only in the late 14th or early 15th century.</p>
                    <p>Trumpets are used in art music styles, for instance in orchestras, concert bands, and jazz ensembles, as well as in popular music.</p>
                    <p>They are played by blowing air through nearly closed lips (called the player's embouchure), producing a "buzzing" sound that starts a standing wave vibration in the air column inside the instrument.</p>
                    <p>Since the late 15th century, trumpets have primarily been constructed of brass tubing, usually bent twice into a rounded rectangular shape.</p>
                </View>
                <View style={styles.imageC}>
                    <Image style={styles.image} source={require('../../src/trumpet.png')}/>
                </View>
            </View>
        </>
    )
}

export default Trumpet;

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%",
    },

    imageC: {
        width: 600,
        height: 600,
    },

    text: {
        width: 600,
    },

    main: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        borderColor: "#aaaaaa",
        borderStyle: "solid",
        borderWidth: 10,
        borderRadius: "10%",
        padding: 25,
        margin: 75,
        backgroundColor: "#dddddd"
    }
})