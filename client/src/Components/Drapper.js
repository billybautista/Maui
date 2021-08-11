import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import StateBadge from './StateBadge';
import theme from '../Styles/themeStyles';
import Header from './Header';
import Icon from './Icon';
import Search from '../Icons/Search';
import More from '../Icons/More';
import Grid from '../Icons/Grid';

function Drapper({title}) {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Header name={title}>
          <Icon onPress={() => alert('Search')}>
            <Search width={20} height={20} />
          </Icon>
          <Icon onPress={() => alert('Search')}>
            <Grid width={20} height={20} />
          </Icon>
          <Icon onPress={() => alert('Search')}>
            <More width={20} height={20} />
          </Icon>
        </Header>
        <View style={styles.row}>
          <StateBadge
            state="Productos"
            value="40"
            style={{borderColor: '#5196FE', color: '#5196FE'}}
          />
          <StateBadge
            state="Entradas"
            value="50"
            style={{borderColor: '#5196FE', color: theme.text.positive}}
          />
          <StateBadge
            state="Salidas"
            value="20"
            style={{borderColor: '#5196FE', color: theme.text.negative}}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 130,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
});

export default Drapper;
