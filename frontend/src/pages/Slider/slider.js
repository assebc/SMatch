import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../../constants/constants";

export default function Slider() {
    // let data = require("./data.json")
    const getSwipes = async () => {
        try {
            const response = await api.get("getSugestions", {
                token: ACCESS_TOKEN_KEY,
            });

            console.log(response);

            if (response.status == 200) {
                data.data = response.data;
            }
        } catch (err) {
            setErrorMessage("Invalid data. Please try again!");
            console.log(err);
        }
    };

    return (
        <View style={styles.global}>
            <View style={styles.logo_container}>
                <Image
                    source={require("../../assets/logo_SMatch.png")}
                    style={styles.logo}
                />
            </View>
            <View style={styles.butts_pic_container}>
                <TouchableOpacity onPress={undefined}>
                    <Image
                        source={require("../../assets/wrong.png")}
                        style={styles.butt_image}
                    />
                </TouchableOpacity>
                <View style={styles.picture_container}>
                    <Image
                        source={require("../../assets/profile_icon.png")}
                        style={styles.picture}
                    />
                </View>
                <TouchableOpacity onPress={undefined}>
                    <Image
                        source={require("../../assets/right.png")}
                        style={styles.butt_image}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.name_container}>
                <Text style={styles.name}>{"Nelso Pe Grande"}</Text>
            </View>
            {/* <View style={styles.age}>
                <Text>{23} years</Text>
            </View> */}
            {/* <View style={styles.interests_container}>
                {data.interests.map((interest, index) => (
                    <View key={index} style={styles.interest_cont}>
                        <Text style={styles.interest}>{interest}</Text>
                    </View>
                ))}
            </View> */}
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
    butts_pic_container: {
        flexDirection: "row",
        alignItems: "baseline",
    },
    butt_image: {
        width: 120,
        height: 120,
    },
    picture_container: {
        // flex: 2,
        padding: 10,
        borderRadius: 60,
        borderWidth: 3,
        overflow: "hidden",
    },
    picture: {
        width: 100,
        height: 100,
    },
    name_container: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },
    name: {
        fontSize: 30,
        fontWeight: "bold",
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
