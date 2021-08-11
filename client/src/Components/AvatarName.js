import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

function AvatarName({name, photo, OnpressPhoto}) {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <TouchableOpacity onPress={OnpressPhoto}>
          <Image source={photo} style={styles.foto} />
        </TouchableOpacity>
        <Text style={styles.title}>Hola, {name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {},
  container: {
    marginHorizontal: 26,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  foto: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginRight: 20,
  },
});

export default AvatarName;
