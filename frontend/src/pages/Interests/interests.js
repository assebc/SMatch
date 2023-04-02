import { useState } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { COLORS, SIZES } from "../../constants/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../services/api.js";


// import ButtonInput from "../../components/Button/button";

export default function Interests() {
    const data = [
        "Mathematics",
        "Portuguese",
        "English",
        "German",
        "Physics",
        "Chemistry",
        "Economics",
        "Biology",
        "Geology",
        "History",
        "Computing",
        "Engineering",
        "Medicine",
        "Nursing",
        "Pharmacy",
        "Education",
        "Law",
        "Psychology",
        "Politics",
        "Sports",
    ];

    const handleNext = async () => {
        try {
            AsyncStorage.getItem("@app:session").then(async (token) => {
                const response = await api.put("updateAccount", {
                    token: token,
                    interests: clickedButtonNames,
                });
                if (response.status == 200) {
                    navigation.navigate("Preferences");
                }
            });
        } catch (err) {
            setErrorMessage("Invalid data. Please try again!");
            console.log(err);
        }
    };

    // const [selectedInterest, setSelectedInterest] = useState(null);

    // function toggle(item) {
    //     setSelectedInterest((prevInterests) => {
    //         return prevInterests.map(interest) => {
    //             return item == interest ? {...interest, }
    //         };
    //     });
    // }

    const [clickedButtonNames, setClickedButtonNames] = useState([]);

    const handleButtonClick = (name) => {
        setClickedButtonNames([...clickedButtonNames, name]);
    };

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
                        <Pressable onPress={() => handleButtonClick(interest)}>
                            <Text style={styles.interest}>{interest}</Text>
                        </Pressable>
                    </View>
                ))}
            </View>
            <View style={styles.next_button}>
                <ButtonInput title="NEXT" onPress={() => handleNext} wh={100} />
            </View>
        </View>
    );
}