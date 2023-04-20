import { View, StyleSheet, Image } from "react-native"

function Xylophone() {

    return (
        <>
            <View style={styles.main}>
                <View style={styles.text}>
                    <p>The xylophonenis a musical instrument in the percussion family that consists of wooden bars struck by mallets.</p>
                    <p>Like the glockenspiel (which uses metal bars), the xylophone essentially consists of a set of tuned wooden keys arranged in the fashion of the keyboard of a piano.</p>
                    <p>Each bar is an idiophone tuned to a pitch of a musical scale, whether pentatonic or heptatonic in the case of many African and Asian instruments, diatonic in many western children's instruments, or chromatic for orchestral use.</p>
                    <p>The term xylophone may be used generally, to include all such instruments such as the marimba, balafon and even the semantron.</p>
                    <p>However, in the orchestra, the term xylophone refers specifically to a chromatic instrument of somewhat higher pitch range and drier timbre than the marimba, and these two instruments should not be confused.</p>
                    <p>A person who plays the xylophone is known as a xylophonist or simply a xylophone player.</p> {/*coment*/}
                </View>
                <View style={styles.imageC}>
                    <Image style={styles.image} source={require('../../src/xylophone.png')}/>
                </View>
            </View>
        </>
    )
}

export default Xylophone;

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