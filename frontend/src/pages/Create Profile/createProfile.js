import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Input from "../../components/Input/input.js";
import Footer from "../../components/Footer/footer.js";
import AgeSelector from '../../components/DatePicker/datePicker.js';

const CreateProfile = ({ navigation }) => {
    return (
        <View>
            <Input placeholder="Nome" secureTextEntry={false}/>
            <Input placeholder="Aplido" secureTextEntry={false}/>
            <AgeSelector/>
        </View>
    )
}

export default CreateProfile;
