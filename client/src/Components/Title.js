import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Title({title}) {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {},
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    marginHorizontal: 26,
  },
});

export default Title;
