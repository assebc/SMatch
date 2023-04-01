import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Footer = (props) => {
    return (
        <Text
            style = {styles.input}
        >
            SmartMatch 2023 @ BugsBytes • Hackathon by Los Passaritos
        </Text>
    );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 10
  },
});

export default Footer;
