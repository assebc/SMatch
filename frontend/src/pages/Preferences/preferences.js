import { useState } from "react";
import { StyleSheet, View, Text, Image, Switch } from "react-native";
import Slider from "@react-native-community/slider";
import { COLORS, SIZES } from "../../constants/constants";

import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../services/api.js";

import DropdownMenu from "../../components/Dropdown/dropdown.js";
import ButtonInput from "../../components/Button/button";

export default function Preferences() {
    const handleNext = async () => {
        try {
            AsyncStorage.getItem("@app:session").then(async (token) => {
                const response = await api.put("updateAccount", {
                    token: token,
                    bph: p4h,
                    studaLocal: studyLocal,
                    music: musicOn,
                    schedule: timeOfDay,
                    talkative: 0,
                });
                if (response.status == 200) {
                    navigation.navigate("TabBar");
                }
            });
        } catch (err) {
            setErrorMessage("Invalid data. Please try again!");
            console.log(err);
        }
    };

    const study_local = [
        { label: "Library", value: "1" },
        { label: "Park", value: "2" },
        { label: "Caffee", value: "3" },
    ];

    const music = [
        { label: "Yes", value: "1" },
        { label: "No", value: "2" },
    ];

    const time = [
        { label: "Morning", value: "1" },
        { label: "Afternoon", value: "2" },
        { label: "Night", value: "3" },
    ];

    const [p4h, setP4h] = useState(0);
    const [studyLocal, setStudyLocal] = useState("");
    const [musicOn, setMusicOn] = useState(true);
    const [timeOfDay, setTimeOfDay] = useState("");

    return (
        <View style={styles.global}>
            <View style={styles.logo_container}>
                <Image
                    source={require("../../assets/logo_SMatch.png")}
                    style={styles.logo}
                />
            </View>
            <View style={styles.title_container}>
                <Text style={styles.title}>Select your preferences</Text>
            </View>
            <View styles={styles.slider_container}>
                <View
                    style={[
                        {
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: 20,
                        },
                    ]}
                >
                    <Text style={styles.subtitle}>Breaks per hour</Text>
                </View>
                <View style={styles.slide_nums}>
                    <Text style={styles.slide_num}>1</Text>
                    <Text style={styles.slide_num}>5</Text>
                    <Text style={styles.slide_num}>10</Text>
                </View>
                <Slider
                    style={{ width: SIZES.width - 20, height: 40 }}
                    minimumValue={0}
                    maximumValue={10}
                    value={1}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#4b543b"
                    onValueChange={(e) => setP4h(e)}
                />
            </View>
            <View style={styles.studyLocal_container}>
                <Text style={styles.subtitle}>Study Place</Text>
                <DropdownMenu
                    placeholder="Study Place"
                    data={study_local}
                    value={studyLocal}
                    onChange={(value) => setStudyLocal(value.label)}
                />
            </View>
            <View style={styles.music_container}>
                <Text style={styles.subtitle}>Music</Text>
                <DropdownMenu
                    placeholder="Music"
                    data={music}
                    value={musicOn}
                    onChange={(value) => setMusicOn(value.label)}
                />
            </View>
            <View style={styles.timeofday_container}>
                <Text style={styles.subtitle}>Time of day</Text>
                <DropdownMenu
                    placeholder="Time of day"
                    data={time}
                    value={timeOfDay}
                    onChange={(value) => setTimeOfDay(value.label)}
                />
            </View>
            <View style={styles.next_button}>
                <ButtonInput title="NEXT" onPress={() => handleNext} wh={100} />
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
        // marginTop: -70,
        fontSize: 30,
        letterSpacing: 0.5,
    },
    subtitle: {
        fontSize: 24,
        fontWeight: "bold",
        letterSpacing: 0.3,
    },
    slider_container: {
        flex: 2,
    },
    slide_nums: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: SIZES.width - 30,
    },
    slide_num: {
        fontSize: 20,
        fontWeight: "bold",
    },
    studyLocal_container: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    music_container: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    timeofday_container: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    next_button: {
        flex: 1,
    },
});
