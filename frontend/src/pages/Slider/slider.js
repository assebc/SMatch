import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    useState,
} from "react-native";
import { COLORS, SIZES } from "../../constants/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../services/api";
import { useEffect } from "react";

export default function Slider() {
    var data = { name: "", interests: [] };
    const getSwipes = async () => {
        try {
            AsyncStorage.getItem("@app:session").then(async (token) => {
                console.log(token);
                const response = await api.get("getSugestions", {
                    token: token,
                });
                console.log(response);
                if (response.status == 200) {
                    console.log(response);
                    data = response.data();
                }
            });
        } catch (err) {
            console.log(err);
        }
    };

    const handleSwipe = async (props) => {
        const { target, left, right } = props;
        try {
            AsyncStorage.getItem("@app:session").then(async (token) => {
                await api.post("", {
                    token: token,
                    targetid: target,
                    swipeL: left,
                    swipeR: right,
                });
            });
        } catch (err) {
            setErrorMessage("Impossible to do that swipe right now!");
            console.log(err);
        }
    };

    useEffect(() => {
        getSwipes();
    }, [1]);
    return (
        <View style={styles.global}>
            <View style={styles.logo_container}>
                <Image
                    source={require("../../assets/logo_SMatch.png")}
                    style={styles.logo}
                />
            </View>
            <View style={styles.butts_pic_container}>
                <TouchableOpacity onPress={console.log("h")}>
                    <Image
                        source={require("../../assets/wrong.png")}
                        style={styles.butt_image}
                    />
                </TouchableOpacity>
                <View style={styles.picture_container}>
                    <Image
                        source={require("../../assets/profile_icon.png")}
                        style={styles.picture}
                        onPress={() =>
                            handleSwipe({ target: "", left: 1, right: 0 })
                        }
                    />
                </View>
                <TouchableOpacity onPress={console.log("h")}>
                    <Image
                        source={require("../../assets/right.png")}
                        style={styles.butt_image}
                        onPress={() =>
                            handleSwipe({ target: "", left: 0, right: 1 })
                        }
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.name_container}>
                <Text style={styles.name}>{data.name}</Text>
            </View>
            <View style={styles.age}>
                <Text>{23} years</Text>
            </View>
            <View style={styles.interests_container}>
                {data.interests.map((interest, index) => (
                    <View key={index} style={styles.interest_cont}>
                        <Text style={styles.interest}>{interest}</Text>
                    </View>
                ))}
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
});
