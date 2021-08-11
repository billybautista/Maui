import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function StateBadge({state, value, style}) {
  return (
    <View style={[styles.root, style]}>
      <Text style={styles.p}>{state}</Text>
      <Text style={[styles.value, style]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    borderWidth: 1.5,
    width: 110,
    borderRadius: 10,
    alignItems: 'center',
    height: 50,
  },
  p: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default StateBadge;
