import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import Input from "../../components/Input/input.js";
import Footer from "../../components/Footer/footer.js";
import ButtonInput from "../../components/Button/button.js";

import { COLORS } from "../../constants/constants.js";

const ForgotPassword = ({ navigation }, props) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <View style={styles.global}>
            <View style={styles.image_container}>
                <Image
                    source={require("../../assets/logo_SMatch.png")}
                    style={styles.image}
                />
            </View>
            <View style={styles.form_container}>
                <View style={styles.form}>
                    <Input
                        placeholder="Email"
                        secureTextEntry={false}
                        onChangeText={(value) => setEmail(value)}
                    />
                    <Input placeholder="New Password" secureTextEntry={false} />
                    <Input
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                    />
                    <ButtonInput
                        title="Change Password"
                        onclick={undefined}
                        wh={250}
                    />
                </View>
                <View style={styles.relink}>
                    <TouchableOpacity
                        style={styles.quizButton}
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text>Back to Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}>
                <Footer />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    global: {
        flex: 1,
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
    },
    image_container: {
        flex: 3,
        marginTop: 20,
        marginBottom: 20,
    },
    image: {
        width: 450,
        height: 450,
    },
    form_container: {
        flex: 6,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20,
    },
    form: {
        justifyContent: "center",
        alignItems: "center",
        width: 250,
        borderRadius: 20,
    },
    relink: {
        width: 250,
        alignItems: "center",
    },
    footer: {
        bottom: 0,
        width: "100%",
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default ForgotPassword;
