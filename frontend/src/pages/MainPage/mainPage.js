import { StyleSheet, View, Text, Image } from "react-native";

import { COLORS } from "../constants/constants.js";

export default function MainPage ({ navigation }) {
    // const [favicon, setFavicon] = useState("../../../assets/favicon.png");

    return (
        <View style={styles.global_container}>

        </View>
    )
}

const styles = StyleSheet.create({
    global_container: {
        justifyContent: center,
        alignItems: center,
        backgroundColor: COLORS.olive
    }
})
