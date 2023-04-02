import React from "react";
import { StyleSheet, View, Text, Image, FlatList } from "react-native";

import ButtonInput from "../../components/Button/button";
import { COLORS, SIZES } from "../../constants/constants";

export default function Profile() {
    const interests = ["Math", "Music", "1 break p/ hour", "Football", "Tea"];

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
                <Text style={styles.name}>{"Nuno Costa"}</Text>
            </View>
            <View style={styles.info_container}>
                <Text style={styles.text}>
                    {"Hello, I am a computer scientist and this is my profile!"}
                </Text>
                <View style={styles.text_container}>
                    <Text style={styles.text_bold}>Email: </Text>
                    <Text style={styles.text}>{"nunorocosta@gmail.com"}</Text>
                </View>
                <View style={styles.text_container}>
                    <Text style={styles.text_bold}>Phone Number: </Text>
                    <Text style={styles.text}>{"961 123 123"}</Text>
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
                {/* <FlatList
                    data={interests}
                    renderItem={({ item }) => (
                        <View style={styles.interest_cont}>
                            <Text style={styles.interest}>item</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.toString()}
                /> */}
            </View>
            <View>
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
        flex: 4,
        marginTop: 30,
        paddingHorizontal: 20,
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
        flex: 6,
        backgroundColor: COLORS.green_smooth + 40,
        marginTop: -10,
        width: SIZES.width - 40,
        height: 90,
        borderWidth: 3,
        borderColor: COLORS.green,
        borderRadius: 20,
    },
    interest_cont: {
        height: 5,
    },
    interest: {
        fontSize: 14,
        letterSpacing: 0.3,
    },
});
