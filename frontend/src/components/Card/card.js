import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import { BORDER_RADIUS, COLORS} from '../../constants/constants.js'

const Card = (props) => {
    return (
      <View>
        <TouchableOpacity
          borderRadius={BORDER_RADIUS.square}
          underlayColor="white">
          <View style={styles.card}>
            <Text style={styles.cardText}>{props.title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
  card: {
    height: 120,
    width: 120,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 12,
    backgroundColor: COLORS.marron

  },
  cardText: {
    color: 'white'
  },
});

export default Card;
