import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';

const AgeSelector = () => {
  const [birthdate, setBirthdate] = useState(new Date());

  const calculateAge = (birthdate) => {
    const diffMs = Date.now() - birthdate.getTime();
    const ageDt = new Date(diffMs);
    return Math.abs(ageDt.getUTCFullYear() - 1970);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Birthdate:</Text>
      <DatePicker
        style={styles.datePicker}
        date={birthdate}
        mode="date"
        maxDate={new Date()}
        onDateChange={(date) => setBirthdate(date)}
      />
      <Text style={styles.age}>{calculateAge(new Date(birthdate))} years old</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 40,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  datePicker: {
    width: '100%',
    marginBottom: 20,
  },
  age: {
    marginTop: 10,
  },
});

export default AgeSelector;
