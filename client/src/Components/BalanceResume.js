import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import theme from '../Styles/themeStyles';
const logo = require('../Assets/logo.png');

function BalanceResume({name, value, date}) {
  return (
    <View>
      <View style={styles.container}>
        <View style={[styles.bgCircle, styles.rightBgCircle]} />
        <View style={[styles.bgCircle, styles.bottomBgCircle]} />
        <View style={styles.contents}>
          <View style={styles.row}>
            <Image source={logo} style={styles.logo} />
          </View>

          <Text style={styles.h1}>{value}</Text>
          <View style={styles.row}>
            <Text style={styles.p}>Saldo general</Text>
            <Text style={styles.p}>{date}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const circleSize = 120;

const styles = StyleSheet.create({
  container: {
    height: 196,
    marginHorizontal: 26,

    borderRadius: 20,
    backgroundColor: '#C7DCFF',
  },
  contents: {
    marginHorizontal: 20,
    marginVertical: 30,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  h1: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#131313',
    marginVertical: 14,
  },
  logo: {
    width: 40,
    height: 40,
  },
  foto: {
    width: 55,
    height: 55,
    borderRadius: 55,
  },
  p: {fontSize: 16, color: '#131313'},
  bgCircle: {
    position: 'absolute',
    backgroundColor: 'white',
    opacity: 0.08,
    height: circleSize,
    width: circleSize,
    borderRadius: circleSize,
  },
  rightBgCircle: {
    top: (-0.5 * circleSize) / 3,
    right: (-1 * circleSize) / 5,
  },
  bottomBgCircle: {
    bottom: (-0.5 * circleSize) / 1,
    left: (1 * (-1 * circleSize)) / 5,
  },
});

export default BalanceResume;
