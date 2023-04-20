import { View, StyleSheet, Image } from "react-native"

function Trombone() {

    return (
        <>
            <View style={styles.main}>
                <View style={styles.text}>
                    <p>The trombone (German: Posaune, Italian, French: trombone) is a musical instrument in the brass family.</p>
                    <p>As with all brass instruments, sound is produced when the player's vibrating lips cause the air column inside the instrument to vibrate.</p>
                    <p>Nearly all trombones use a telescoping slide mechanism to alter the pitch instead of the valves used by other brass instruments.</p>
                    <p>The valve trombone is an exception, using three valves similar to those on a trumpet, and the superbone has valves and a slide.</p>
                    <p>The word "trombone" derives from Italian tromba (trumpet) and -one (a suffix meaning "large"), so the name means "large trumpet".</p>
                    <p>The trombone has a predominantly cylindrical bore like the trumpet, in contrast to the more conical brass instruments like the cornet, the euphonium, and the French horn.</p>
                    <p>The most frequently encountered trombones are the tenor trombone and bass trombone.</p>
                    <p>These are treated as non-transposing instruments, reading at concert pitch in bass clef, with higher notes sometimes being notated in tenor clef.</p>
                    <p>They are pitched in B♭, an octave below the B♭ trumpet and an octave above the B♭ bass tuba.</p>
                    <p>The once common E♭ alto trombone became less common as improvements in technique extended the upper range of the tenor, but it is regaining popularity for its lighter sonority.</p>
                    <p>In British brass-band music the tenor trombone is treated as a B♭ transposing instrument, written in treble clef, and the alto trombone is written at concert pitch, usually in alto clef.</p>
                    <p>A person who plays the trombone is called a trombonist or trombone player.</p>
                </View>
                <View style={styles.imageC}>
                    <Image style={styles.image} source={require('../../src/trombone.png')}/>
                </View>
            </View>
        </>
    )
}

export default Trombone;

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