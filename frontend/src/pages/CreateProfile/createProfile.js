import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../../constants/constants.js";

import { ACCESS_TOKEN_KEY } from "../../config.js";
import Input from "../../components/Input/input.js";
import Footer from "../../components/Footer/footer.js";
// import ProfilePicModal from "./ProfilePictModal.js"
// import DatePicker from "../../components/DatePicker/datePicker.js";
import DropdownMenu from "../../components/Dropdown/dropdown.js";
import ButtonInput from "../../components/Button/button.js";
import api from "../../services/api.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CreateProfile = ({ navigation }) => {
    const educationData = [
        { label: "Primary", value: "1" },
        { label: "Lower Secondary", value: "2" },
        { label: "Upper Secondary", value: "3" },
        { label: "Bachelor's", value: "4" },
        { label: "Master's", value: "5" },
        { label: "Doctorate", value: "6" },
    ];

    const [showProfilePicModal, setShowProfilePicModal] = useState(false)
    const [name, setName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [number, setNumber] = useState("");
    const [education, setEducation] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const updateProfile = async () => {
        try{
            AsyncStorage.getItem('@app:session').then(async token => {

                const response = await api.put("updateAccount", {
                    token : token,
                    name: name,
                    dob: birthDate,
                    contact: number,
                    academicDegree: education,
                    academicArea: ""
                });
                if (response.status == 200){
                    navigation.navigate("TabBar");
                }
            }) ;
        } catch (err){
            setErrorMessage("Invalid data. Please try again!");
            console.log(err);
        }
    }


    return (
        <View style={styles.global}>
            <View style={styles.profile_picture_container}>
                <Image
                    source={require("../../assets/profile_icon.png")}
                    style={styles.image}
                />
                <TouchableOpacity
                    // onPress={() => setShowProfilePicModal(true)}
                    style={styles.selectImage_button}
                >
                    <Text style={styles.selectImage_text}>Select picture</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.form_container}>
                {/* Name */}
                <Input
                    placeholder="Name"
                    secureTextEntry={false}
                    onChangeText={(value) => setName(value)}
                />

                {/* Birth Date */}
                <Input placeholder="Birth Date" secureTextEntry={false} />

                <Input
                    placeholder="Phone Number"
                    secureTextEntry={false}
                    keyboardType="numeric"
                    onCHangeText={(value) => setNumber(value)}
                />

                {/* Education */}
                <DropdownMenu
                    data={educationData}
                    value={education}
                    onChange={(value) => setEducation(value.label)}
                />
            </View>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <View style={styles.next_button}>
                <ButtonInput title="NEXT" onPress={updateProfile} wh={100} />
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
    profile_picture_container: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
    },
    profile_picture: {},

    image: {
        width: 100,
        height: 100,
    },
    selectImage_button: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    selectImage_text: {
        fontSize: 18,
        fontWeight: 600,
    },
    form_container: {
        flex: 5,
    },
    next_button: {
        flex: 2,
    },
    footer: {
        bottom: 0,
        width: "100%",
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default CreateProfile;
