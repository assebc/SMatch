import React from "react";
import { View, Modal, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SIZES } from "../../constants/constants";

export default function ProfilePicModal(props) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.visible}
        >
            <View style = {styles.global}>
                <View style = {styles.container}>
                    <View style = {styles.buttons_container}>
                        <TouchableOpacity style = {styles.button}>
                            <Text>Open Camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.button}>
                            <Text>Open Gallery</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    global: {
        flex: 1,
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        backgroundColor: COLORS.peach,
        height: 300,
        width: SIZES.width - "40",
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    buttons_container: {
        width: 250,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    button: {

    }


}
)
