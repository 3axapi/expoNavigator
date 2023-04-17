import { View, StyleSheet, Image } from "react-native"

function DrumSet() {

    return (
        <View style={styles.main}>
            <View style={styles.text}>
                <p>A <strong>drum kit</strong> is a collection of drums, cymbals, and sometimes other auxiliary percussion instruments set up to be played by one person.</p>
                <p>The drummer typically holds a pair of matching drumsticks, one in each hand, and uses their feet to operate a foot-controlled hi-hat and bass drum pedal.</p>
                <p>A standard kit may contain:</p>
                <ul>
                    <li>A snare drum, mounted on a stand</li>
                    <li>A bass drum, played with a beater moved by a foot-operated pedal</li>
                    <li>One or more tom-toms, including rack toms and/or floor toms</li>
                    <li>One or more cymbals, including a ride cymbal and crash cymbal</li>
                    <li>Hi-hat cymbals, a pair of cymbals that can be manipulated by a foot-operated pedal</li>
                </ul>
                <p>The drum kit is a part of the standard rhythm section and is used in many types of popular and traditional music styles, ranging from rock and pop to blues and jazz.</p>
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
    },

    imageC: {
        width: 600,
        height: "100%",
    },

    text: {
        width: 600,
        height: "45%",
    },

    main: {
        margin: 15,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        flex: 1,
        justifyContent: "space-evenly"
    }
})