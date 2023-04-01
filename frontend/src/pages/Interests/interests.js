import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/constants';


const Interests = ({ navigation }, props) => {
    return (
        <View style = {styles.global}>
            <Text>Hello</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    global: {
        backgroundColor: COLORS.primary
    }
})

export default Interests;
