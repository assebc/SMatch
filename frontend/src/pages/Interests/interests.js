import { useState } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { COLORS, SIZES } from "../../constants/constants";

import ButtonInput from "../../components/Button/button";

export default function Interests() {
    // const jsonData = require("./data.json");

    const data = [
        "Math",
        "Portuguese",
        "Music",
        "Programing",
        "Talking",
        "Nature",
        "Coffee",
    ];

    const [selectedInterest, setSelectedInterest] = useState(null);

    function toggle(item) {
        setSelectedInterest((prevInterests) => {
            return prevInterests.map(interest) => {
                return item == interest ? {...interest, }
            };
        });
    }

    return (
        <View style={styles.global}>
            <View style={styles.logo_container}>
                <Image
                    source={require("../../assets/logo_SMatch.png")}
                    style={styles.logo}
                />
            </View>
            <View style={styles.title_container}>
                <Text style={styles.title}>Select your interests</Text>
            </View>
            <View style={styles.interests_container}>
                {data.map((interest, index) => (
                    <View key={index} style={styles.interest_cont}>
                        <Pressable onPress={() => toggle(index)}>
                            <Text style={styles.interest}>{interest}</Text>
                        </Pressable>
                    </View>
                ))}
            </View>
            <View style={styles.next_button}>
                <ButtonInput title="NEXT" onPress={undefined} wh={100} />
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
    title_container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 30,
        letterSpacing: 0.5,
        marginTop: -30,
    },
    interests_container: {
        flex: 9,
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
    next_button: {
        flex: 2,
    },
});
