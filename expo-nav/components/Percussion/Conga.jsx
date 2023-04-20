import { View, StyleSheet, Image } from "react-native"

function Conga() {

    return (
        <>
            <View style={styles.main}>
                <View style={styles.text}>
                    <p>The conga, also known as tumbadora, is a tall, narrow, single-headed drum from Cuba. Congas are staved like barrels and classified into three types: quinto (lead drum, highest), tres dos or tres golpes (middle), and tumba or salidor (lowest).</p>
                    <p>Congas were originally used in Afro-Cuban music genres such as conga (hence their name) and rumba, where each drummer would play a single drum.</p>
                    <p>Following numerous innovations in conga drumming and construction during the mid-20th century, as well as its internationalization, it became increasingly common for drummers to play two or three drums.</p>
                    <p>Congas have become a popular instrument in many forms of Latin music such as son (when played by conjuntos), descarga, Afro-Cuban jazz, salsa, songo, merengue and Latin rock.</p>
                    <p>Although the exact origins of the conga drum are unknown, researchers agree that it was developed by Cuban people of African descent during the late 19th century or early 20th century.</p>
                    <p>Its direct ancestors are thought to be the yuka and makuta (of Bantu origin) and the bembé drums (of Yoruba origin).</p>
                    <p>In Cuba and Latin America, congas are primarily played as hand drums.</p>
                    <p>In Trinidadian calypso and soca, congas are sometimes struck with mallets, while in the Congos, they are often struck with one hand and one mallet.</p>
                </View>
                <View style={styles.imageC}>
                    <Image style={styles.image} source={require('../../src/conga.png')}/>
                </View>
            </View>
        </>
    )
}

export default Conga;

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