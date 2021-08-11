import React from 'react';
import {StyleSheet, View, Dimensions, Text} from 'react-native';
import theme from '../Styles/themeStyles';
const {width} = Dimensions.get('window');

function StateCard({
  title,
  positive,
  negative,
  pricePositive,
  priceNegative,
  children,
  children2,
}) {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.block}>
          <Text style={styles.p}>{title}</Text>
          <View style={[theme.row, styles.row]}>
            <View style={[theme.row, styles.row]}>
              <View style={styles.icon}>{children}</View>
              <Text style={styles.p}>{positive}</Text>
            </View>
            <Text style={[styles.price, {color: theme.text.positive}]}>
              {pricePositive}
            </Text>
          </View>
          <View style={[theme.row, styles.row]}>
            <View style={[theme.row, styles.row]}>
              <View style={styles.icon}>{children2}</View>
              <Text style={styles.p}>{negative}</Text>
            </View>
            <Text style={[styles.price, {color: theme.text.negative}]}>
              {priceNegative}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default StateCard;

const styles = StyleSheet.create({
  root: {marginHorizontal: 26},

  container: {
    width: width - 120,
    backgroundColor: '#F8F8F8',
    borderRadius: 20,
    borderColor: '#F6F6F6',
    borderWidth: 1.5,
  },

  block: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  icon: {
    height: 40,
    width: 40,
    borderRadius: 40,
    marginVertical: 10,
    marginRight: 10,
  },
  row: {
    alignItems: 'center',
  },
  p: {
    color: '#131313',
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
