import React from 'react';
import {View, ScrollView, Text, Dimensions} from 'react-native';
import Frame from './Frame';
import BalanceCard from './BalanceCard';
import BlockState from './BlockState';
import Title from './Title';
import theme from '../Styles/themeStyles';

const {width} = Dimensions.get('window');

function TabTrimester() {
  return (
    <ScrollView vertical>
      <View style={{marginVertical: 20}}>
        <Frame>
          <View style={[theme.row, {marginHorizontal: 26, width: width - 52}]}>
            <BlockState state="Saldo Actual" value="$1200" />
            <BlockState state="Balance Diario" value="$1200" />
          </View>
          <View style={[theme.row, {marginHorizontal: 26, width: width - 52}]}>
            <BlockState state="Ingresos" value="$1200" />
            <BlockState state="Egresos" value="$1200" />
          </View>
        </Frame>
        <Title title="Hoy" />
        <View style={{marginHorizontal: 26}}>
          <BalanceCard
            name="Jorge"
            price="$1230"
            type="Venta"
            date="14/6"
            onLongPress={() => alert('Hola')}
            delayLongPress={100}
          />
          <BalanceCard
            name="Jorge"
            price="$1230"
            type="Venta"
            date="14/6"
            onLongPress={() => alert('Hola')}
            delayLongPress={100}
          />

          <BalanceCard
            name="Jorge"
            price="$1230"
            type="Venta"
            date="14/6"
            onLongPress={() => alert('Hola')}
            delayLongPress={100}
          />
          <BalanceCard
            name="Jorge"
            price="$1230"
            type="Venta"
            date="14/6"
            onLongPress={() => alert('Hola')}
            delayLongPress={100}
          />
          <BalanceCard
            name="Jorge"
            price="$1230"
            type="Venta"
            date="14/6"
            onLongPress={() => alert('Hola')}
            delayLongPress={100}
          />
          <BalanceCard
            name="Jorge"
            price="$1230"
            type="Venta"
            date="14/6"
            onLongPress={() => alert('Hola')}
            delayLongPress={100}
          />
          <BalanceCard
            name="Jorge"
            price="$1230"
            type="Venta"
            date="14/6"
            onLongPress={() => alert('Hola')}
            delayLongPress={100}
          />
          <BalanceCard
            name="Jorge"
            price="$1230"
            type="Venta"
            date="14/6"
            onLongPress={() => alert('Hola')}
            delayLongPress={100}
          />
        </View>
      </View>
    </ScrollView>
  );
}
export default TabTrimester;
