import { View, StyleSheet } from "react-native";

import Clarinet from "./Wind/Clarinet";
import Saxophone from "./Wind/Saxophone";
import Trombone from "./Wind/Trombone";
import Trumpet from "./Wind/Trumpet";

function Wind() {

    return (
        <View style={styles.container}>
            <Clarinet />
            <Saxophone />
            <Trombone />
            <Trumpet />
        </View>
    )
}

export default Wind;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eeeeee",
    }
})