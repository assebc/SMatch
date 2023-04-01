import { StyleSheet, View, Text, Image } from "react-native";

import { COLORS, SIZES } from "../../constants/constants.js";
import Footer from "../../components/Footer/footer.js";

export default function LoadingScreen({ navigation }) {
    setTimeout(() => {
        navigation.navigate("Login");
    }, 2000);

    return (
        <View style={styles.global}>
            <View style={styles.image_container}>
                <Image
                    source={require("../../assets/favicon_watermark_w.png")}
                    style={styles.image}
                />
            </View>
            <View style={styles.footer}>
                <Footer />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    global: {
        flex: 1,
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
    },
    image_container: {
        flex: 9,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 300,
        height: 300,
    },
    footer: {
        // flex: 1,
        bottom: 0,
        marginBottom: 10,
        justifyContent: "center",
    },
});
