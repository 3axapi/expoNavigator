import { View, StyleSheet, Image } from "react-native"

function Saxophone() {

    return (
        <>
            <View style={styles.main}>
                <View style={styles.text}>
                    <p>The saxophone (often referred to colloquially as the sax) is a type of single-reed woodwind instrument with a conical body, usually made of brass.</p>
                    <p>As with all single-reed instruments, sound is produced when a reed on a mouthpiece vibrates to produce a sound wave inside the instrument's body.</p>
                    <p>The pitch is controlled by opening and closing holes in the body to change the effective length of the tube.</p>
                    <p>The holes are closed by leather pads attached to keys operated by the player.</p>
                    <p>Saxophones are made in various sizes and are almost always treated as transposing instruments. Saxophone players are called saxophonists.</p>
                    <p>The saxophone is used in a wide range of musical styles including classical music (such as concert bands, chamber music, solo repertoire, and occasionally orchestras), military bands, marching bands, jazz (such as big bands and jazz combos), and contemporary music.</p>
                    <p>The saxophone is also used as a solo and melody instrument or as a member of a horn section in some styles of rock and roll and popular music.</p>
                </View>
                <View style={styles.imageC}>
                    <Image style={styles.image} source={require('../../src/saxophone.png')}/>
                </View>
            </View>
        </>
    )
}

export default Saxophone;

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