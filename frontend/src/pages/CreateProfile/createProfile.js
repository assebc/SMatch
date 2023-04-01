import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/constants.js';

import Input from "../../components/Input/input.js";
import Footer from "../../components/Footer/footer.js";
import ProfilePicModal from "./ProfilePictModal.js"

const CreateProfile = ({ navigation }) => {
    const [showProfilePicModal, setShowProfilePicModal] = useState(false)

    return (
        <View style = {styles.global}>
            <View style = {styles.profile_picture_container}>
                <Image
                    source={require("../../assets/profile_icon.png")}
                    style={styles.image}
                />
                <TouchableOpacity
                    onPress={() => setShowProfilePicModal(true)}
                >
                    <Text >Select picture</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.form_container}>
                <Input placeholder="Name" secureTextEntry={false}/>
                {/* Data de nascimento */}
                {/* DropDown com escolaridade */}
            </View>
            <View style = {styles.footer}>
                <Footer />
            </View>
            <ProfilePicModal
                visible = {showProfilePicModal}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    global: {
        flex: 1,
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center"
    },
    profile_picture_container: {
        flex: 3,
        justifyContent: "center"

    },
    profile_picture: {

    },
    image: {
        width: 100,
        height: 100,
    },
    form_container: {
        flex:5
    },
    footer: {
        bottom: 0,
        width: '100%',
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default CreateProfile;
