import React from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import Drapper from '../Components/Drapper';
import TabDay from '../Components/TabDay';
import theme from '../Styles/themeStyles';
import Frame from '../Components/Frame';
import BlockState from '../Components/BlockState';
import Icon from '../Components/Icon';
import Plus from '../Icons/Plus';
import TabProducts from '../Components/TabProducts';

function Inventory() {
  return (
    <View style={theme.tabScreen}>
      <Drapper title="Inventario" />
      <View style={[theme.row, {marginVertical: 20, marginHorizontal: 20}]}>
        <BlockState state="Saldo Actual" value="$1200" />
        <BlockState state="Balance Diario" value="$1200" />
      </View>
      <View>
        <View style={styles.container}>
          <Icon
            onPress={() => alert('Crear categoria')}
            style={{marginRight: 10}}>
            <Plus width={40} height={40} color="#5196FE" />
          </Icon>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.fill}>
              <Text style={styles.text}>Todos</Text>
            </View>
            <View style={styles.fill}>
              <Text style={styles.text}>Muebles</Text>
            </View>
            <View style={styles.fill}>
              <Text style={styles.text}>Todos</Text>
            </View>
            <View style={styles.fill}>
              <Text style={styles.text}>Todos</Text>
            </View>
            <View style={styles.fill}>
              <Text style={styles.text}>Todos</Text>
            </View>
          </ScrollView>
        </View>
      </View>
      <TabProducts />
    </View>
  );
}

const styles = StyleSheet.create({
  fill: {
    backgroundColor: '#5196FE',
    borderRadius: 20,
    justifyContent: 'center',
    marginRight: 20,
  },
  text: {
    marginHorizontal: 20,
    fontSize: 18,
    color: 'white',
  },
  container: {
    marginHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
  },
});

export default Inventory;
