import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function Badge({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.categories}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  categories: {
    width: 80,
    height: 25,
    borderRadius: 20,
    borderColor: '#5196FE',
    borderWidth: 1,
    paddingVertical: 2,
    alignItems: 'center',
  },
});

export default Badge;
