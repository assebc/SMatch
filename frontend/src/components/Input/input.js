import React from "react";
import { StyleSheet, TextInput } from "react-native";

import { BORDER_RADIUS, COLORS } from "../../constants/constants";

const Input = (props) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            secureTextEntry={props.secureTextEntry}
            keyboardType={props.keyboardType}
            autoComplete="off"
            autoCorrect={false}
            autoCapitalize="none"
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 250,
        margin: 12,
        padding: 10,
        borderWidth: 0,
        backgroundColor: COLORS.green_smooth + 40,
        borderRadius: BORDER_RADIUS.square,
        fontSize: 16,
        letterSpacing: 0.3,
    },
});

export default Input;
