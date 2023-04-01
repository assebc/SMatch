import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../../constants/constants.js";

import Input from "../../components/Input/input.js";
import Footer from "../../components/Footer/footer.js";
// import ProfilePicModal from "./ProfilePictModal.js"
// import DatePicker from "../../components/DatePicker/datePicker.js";
import DropdownMenu from "../../components/Dropdown/dropdown.js";
import ButtonInput from "../../components/Button/button.js";

const CreateProfile = ({ navigation }) => {
    const educationData = [
        { label: "Primary", value: "1" },
        { label: "Lower Secondary", value: "2" },
        { label: "Upper Secondary", value: "3" },
        { label: "Bachelor's", value: "4" },
        { label: "Master's", value: "5" },
        { label: "Doctorate", value: "6" },
    ];

    // const [showProfilePicModal, setShowProfilePicModal] = useState(false)
    const [name, setName] = useState("");
    // const [birthDate, setBirthDate] = useState();
    const [education, setEducation] = useState("");

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

                {/* Education */}
                <DropdownMenu
                    data={educationData}
                    value={education}
                    onChange={(value) => setEducation(value.label)}
                />
            </View>
            <View style={styles.next_button}>
                <ButtonInput title="NEXT" onPress={undefined} wh={100} />
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
