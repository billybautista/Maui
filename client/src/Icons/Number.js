import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Number({amount, style}) {
  return (
    <View style={[styles.root, style]}>
      <Text style={styles.text}>{amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Number;
