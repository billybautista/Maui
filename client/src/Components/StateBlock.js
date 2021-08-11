import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Top from '../Icons/Top';

function StateBlock({style, state, value, icon}) {
  return (
    <View>
      <View style={styles.root}>
        <View style={styles.container}>
          <View style={styles.logo}>{icon}</View>
          <View>
            <Text style={styles.p}>{state}</Text>
            <Text style={[styles.h2, style]}>{value}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    width: 170,
    height: 120,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  container: {
    marginHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 10,
  },

  h2: {
    marginBottom: 5,
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  p: {
    fontSize: 18,
    marginBottom: 5,
    marginTop: 5,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default StateBlock;
