import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import { BORDER_RADIUS, COLORS} from '../../constants/constants.js'

const ButtonInput = (props) => {
    return (
      <View>
        <TouchableOpacity
          borderRadius={BORDER_RADIUS.square}
          underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>{props.title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 12,
    backgroundColor: COLORS.ebony

  },
  buttonText: {
    textAlign: 'center',
    color: 'white'
  },
});

export default ButtonInput;