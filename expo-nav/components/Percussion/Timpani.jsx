import { View, StyleSheet, Image } from "react-native"

function Timpani() {

    return (
        <>
            <View style={styles.main}>
                <View style={styles.text}></View>
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