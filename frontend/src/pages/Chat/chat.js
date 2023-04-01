import { Image, View , StyleSheet } from "react-native";

import { COLORS } from "../../constants/constants";

const Chat = (props) => {
    return (
        <View style={styles.global} >
            <View style={styles.header}>
                <Image
                source={require("../../assets/favicon_watermark_w.png")}
                style={styles.image} />
            </View>
        </View>
    )
}

export default Chat;

const styles = StyleSheet.create({
    global: {
        flex: 1,
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    image: {
        width: 100,
        height: 100,
    },
    header: {
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: "center"
    },

})

