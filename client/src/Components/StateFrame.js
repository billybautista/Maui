import React from 'react';
import {Text, ScrollView, StyleSheet, View, Dimensions} from 'react-native';
import StateCard from './StateCard';
import StateBlock from './StateBlock';
import theme from '../Styles/themeStyles';
import Top from '../Icons/Top';
import Down from '../Icons/Down';
import Number from '../Icons/Number';

const {width} = Dimensions.get('window');

function StateFrame({
  incomes,
  outcomes,
  toCollect,
  toPay,
  amountToPay,
  amountToCollect,
  value,
  costs,
}) {
  return (
    // <View style={{backgroundColor: 'blue'}}>
    <View>
      <ScrollView
        horizontal
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        snapToInterval={width - 66}
        decelerationRate={0.5}>
        <StateCard
          title="Balance"
          positive="Ingresos"
          negative="Egresos"
          pricePositive={incomes}
          priceNegative={outcomes}
          children={<Top color={theme.text.positive} />}
          children2={<Down color={theme.text.negative} />}
        />
        <StateCard
          title="Deudas"
          positive="Por cobrar"
          negative="Por pagar"
          pricePositive={toCollect}
          priceNegative={toPay}
          children={
            <View style={[theme.center, styles.positive]}>
              <Text style={styles.p}>{amountToCollect}</Text>
            </View>
          }
          children2={
            <View style={[theme.center, styles.negative]}>
              <Text style={styles.p}>{amountToPay}</Text>
            </View>
          }
        />
        <StateCard
          title="Inventario"
          positive="Valor"
          negative="Costos"
          pricePositive={value}
          priceNegative={costs}
          children={<Top color={theme.text.positive} />}
          children2={<Down color={theme.text.negative} />}
        />
      </ScrollView>
    </View>
  );
}

// positive,
//   negative,
//   pricePositive,
//   priceNegative,
//   children,

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  positive: {
    backgroundColor: theme.text.positive,
    height: 40,
    width: 40,
    borderRadius: 40,
  },
  negative: {
    backgroundColor: theme.text.negative,
    height: 40,
    width: 40,
    borderRadius: 40,
  },
  p: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default StateFrame;
