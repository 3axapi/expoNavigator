import { View, StyleSheet, Image } from "react-native"

function Timpani() {

    return (
        <>
            <View style={styles.main}>
                <View style={styles.text}>
                    <p>Timpani or kettledrums (also informally called timps) are musical instruments in the percussion family.</p>
                    <p>A type of drum categorised as a hemispherical drum, they consist of a membrane called a head stretched over a large bowl traditionally made of copper.</p>
                    <p>Thus timpani are an example of kettle drums, also known as vessel drums and semispherical drums, whose body is similar to a section of a sphere whose cut conforms the head. Most modern timpani are pedal timpani and can be tuned quickly and accurately to specific pitches by skilled players through the use of a movable foot-pedal.</p>
                    <p>They are played by striking the head with a specialized drum stick called a timpani stick or timpani mallet.</p>
                    <p>Timpani evolved from military drums to become a staple of the classical orchestra by the last third of the 18th century.</p>
                    <p>Timpani is an Italian plural, the singular of which is timpano. However, in English the term timpano is only widely in use by practitioners: several are more typically referred to collectively as kettledrums, timpani, temple drums, or timps.</p>
                    <p>They are also often incorrectly termed timpanis.</p>
                    <p>A musician who plays timpani is a timpanist.</p>
                </View>
                <View style={styles.imageC}>
                    <Image style={styles.image} source={require('../../src/timpani.png')}/>
                </View>
            </View>
        </>
    )
}

export default Timpani;

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