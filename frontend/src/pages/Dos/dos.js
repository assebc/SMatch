import { StyleSheet, View, Text } from "react-native";
import { COLORS } from "../../constants/constants";

import MultiSelectComponent from "../../components/BubbleList/teste.js";

export default function Dos({ navigation }) {
    return (
        <View style={styles.global}>
            <MultiSelectComponent />
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
});
