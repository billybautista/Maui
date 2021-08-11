import {BackgroundColor} from 'chalk';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Search from '../Icons/Search';
import List from '../Icons/List';
import More from '../Icons/More';

function Header({name, children}) {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.containerIcons}>{children}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    height: 60,
    justifyContent: 'center',
  },
  container: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerIcons: {
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: 'gray',
  },
  icons: {
    width: 40,
    height: 40,
    // backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
});

export default Header;
