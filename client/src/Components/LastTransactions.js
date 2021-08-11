import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import theme from '../Styles/themeStyles';
import BalanceCard from './BalanceCard';

function LastTransactions() {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: 'white',
            paddingBottom: 10,
          }}>
          <BalanceCard
            name="Jorge"
            price="$1230"
            type="Venta"
            state="recibido"
            onLongPress={() => alert('Hola')}
            delayLongPress={100}
          />
          <BalanceCard
            name="Jorge"
            price="$1230"
            type="Venta"
            state="recibido"
            onLongPress={() => alert('Hola')}
            delayLongPress={100}
          />
          <BalanceCard
            name="Jorge"
            price="$1230"
            type="Venta"
            state="no pagado"
            onLongPress={() => alert('Hola')}
            delayLongPress={100}
          />
          <BalanceCard
            name="Jorge"
            price="$1230"
            type="Compra"
            state="pagado"
            onLongPress={() => alert('Hola')}
            delayLongPress={100}
          />
          <BalanceCard
            name="Jorge"
            price="$1230"
            type="Venta"
            state="recibido"
            onLongPress={() => alert('Hola')}
            delayLongPress={100}
          />
          <BalanceCard
            name="Jorge"
            price="$1230"
            type="Venta"
            state="no recibido"
            onLongPress={() => alert('Hola')}
            delayLongPress={100}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {},
  container: {
    marginHorizontal: 26,
  },
});
export default LastTransactions;
