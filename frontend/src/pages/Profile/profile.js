import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import ButtonInput from "../../components/Button/button";
import { COLORS } from '../../constants/constants';

const Profile = (props) => {
    return (
        <View style={styles.content}>
            <Image 
                style={styles.image} 
                source={require("../../assets/favicon.png")}    
            />

            <ButtonInput title="UPDATE" onclick={undefined}/>
        </View>
    );
}

const styles = StyleSheet.create({
    global: {
        flex: 1,
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center"
    },
    content: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    image: {
        width: 75,
        height: 75
    }
})

export default Profile;