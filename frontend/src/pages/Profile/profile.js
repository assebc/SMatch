import React from "react";
import { StyleSheet, View, Text, Image, FlatList } from "react-native";

import ButtonInput from "../../components/Button/button";
import { COLORS, SIZES } from "../../constants/constants";

export default function Profile() {
    const data = require("./data.json");

    return (
        <View style={styles.global}>
            <View style={styles.logo_container}>
                <Image
                    source={require("../../assets/logo_SMatch.png")}
                    style={styles.logo}
                />
            </View>
            <View style={styles.image_container}>
                <Image
                    source={require("../../assets/profile_icon.png")}
                    style={styles.image}
                />
            </View>
            <View style={styles.name_container}>
                <Text style={styles.name}>{data.name}</Text>
            </View>
            <View style={styles.info_container}>
                {/* <Text style={styles.text}>
                    {"Hello, I am a computer scientist and this is my profile!"}
                </Text> */}
                <View style={styles.text_container}>
                    <Text style={styles.text_bold}>Email: </Text>
                    <Text style={styles.text}>{data.email}</Text>
                </View>
                <View style={styles.text_container}>
                    <Text style={styles.text_bold}>Phone Number: </Text>
                    <Text style={styles.text}>{data.contact}</Text>
                </View>
                {/* <View style={styles.text_container}>
                    <Text style={styles.text_bold}>Age: </Text>
                    <Text style={styles.text}>{20}</Text>
                </View> */}
                <View style={styles.text_container}>
                    <Text style={styles.text_bold}>Education: </Text>
                    <Text style={styles.text}>{"Bachelor's"}</Text>
                </View>
            </View>
            <View style={styles.interests_container}>
                {data.interests.map((interest, index) => (
                    <View key={index} style={styles.interest_cont}>
                        <Text style={styles.interest}>{interest}</Text>
                    </View>
                ))}
            </View>
            <View style={styles.editButton_container}>
                <ButtonInput
                    title="Edit Profile"
                    onPress={undefined}
                    wh={150}
                />
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
    logo_container: {
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 120,
        height: 120,
    },
    image_container: {
        // flex: 2,
        padding: 10,
        borderRadius: 60,
        borderWidth: 3,
        overflow: "hidden",
    },
    image: {
        width: 100,
        height: 100,
    },
    name_container: {
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    name: {
        fontSize: 30,
        fontWeight: "bold",
        letterSpacing: 0.5,
    },
    info_container: {
        flex: 3,
        marginTop: 30,
        paddingHorizontal: 10,
    },
    text_container: {
        flexDirection: "row",
        marginVertical: 3,
    },
    text_bold: {
        fontWeight: "bold",
        fontSize: 18,
        letterSpacing: 0.3,
    },
    text: {
        fontSize: 18,
        letterSpacing: 0.3,
    },
    interests_container: {
        flex: 5,
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: COLORS.green_smooth + 40,
        width: SIZES.width - 40,
        height: "auto",
        marginBottom: 30,
        borderWidth: 3,
        borderColor: COLORS.green,
        borderRadius: 20,
        padding: 10,
    },
    interest_cont: {
        justifyContent: "center",
        alignItems: "center",
        height: 30,
        paddingHorizontal: 15,
        backgroundColor: COLORS.green,
        borderRadius: 15,
        marginHorizontal: 5,
        marginVertical: 5,
    },
    interest: {
        color: "white",
        fontSize: 14,
        letterSpacing: 0.3,
    },
    editButton_container: {
        marginBottom: 10,
    },
});
