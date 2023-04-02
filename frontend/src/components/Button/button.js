import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

import { BORDER_RADIUS, COLORS } from "../../constants/constants.js";

export default function ButtonInput(props) {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: COLORS.green,
            height: 40,
            width: props.wh,
            margin: 12,
            padding: 10,
            borderRadius: 12,
            borderWidth: 0,
        },
        buttonText: {
            textAlign: "center",
            color: "white",
            letterSpacing: 0.3,
        },
    });

    // export default ButtonInput;
    return (
        <View>
            <TouchableOpacity
                borderRadius={BORDER_RADIUS.square}
                underlayColor="white"
                onPress={props.onPress}
            >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{props.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
