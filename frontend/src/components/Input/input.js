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
        backgroundColor: COLORS.marron,
        borderRadius: BORDER_RADIUS.square,
        fontSize: 16,
    },
});

export default Input;
