import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Button from './Button';

const {width} = Dimensions.get('window');

function BlockButton() {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Button
          text="Nuevo Ingreso"
          style={{backgroundColor: '#33E69B'}}
          onPress={() => alert('Ingreso')}
        />
        <Button
          text="Nuevo Egreso"
          style={{backgroundColor: '#FD6363'}}
          onPress={() => alert('Egreso')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 60,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - 40,
  },
});

export default BlockButton;
