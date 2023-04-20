import { View, StyleSheet, Image } from "react-native"

function Clarinet() {

    return (
        <>
            <View style={styles.main}>
                <View style={styles.text}>
                    <p>The clarinet is a single-reed musical instrument in the woodwind family, with a nearly cylindrical bore and a flared bell.</p>
                    <p>Clarinets comprise a family of instruments of differing sizes and pitches. The clarinet family is the largest woodwind family, ranging from the BB♭ contrabass to the E♭ soprano.</p>
                    <p>The B♭ soprano clarinet is the most common type, and is the instrument usually indicated by the word "clarinet".</p>
                    <p>German instrument maker Johann Christoph Denner is generally credited with inventing the clarinet sometime after 1698 by adding a register key to the chalumeau, an earlier single-reed instrument. Over time, additional keywork and airtight pads were added to improve the tone and playability</p>
                    <p>Today the clarinet is a standard fixture of the orchestra and concert band and is used in classical music, military bands, klezmer, jazz, and other styles.</p>
                    <p>The clarinet's cylindrical bore is the main reason for its distinctive timbre, which varies between the three main registers (the chalumeau, clarion, and altissimo).</p>
                    <p>The A and B♭ clarinets have nearly the same bore and nearly identical tonal quality, although the A typically has a slightly warmer sound. The tone of the E♭ clarinet is brighter and can be heard through loud orchestral textures.</p>
                    <p>The bass clarinet has a characteristically deep, mellow sound, and the alto clarinet sounds similar to the bass, though not as dark.</p>
                </View>
                <View style={styles.imageC}>
                    <Image style={styles.image} source={require('../../src/clarinet.png')}/>
                </View>
            </View>
        </>
    )
}

export default Clarinet;

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