import React from 'react';
import {View} from 'react-native';
import BlockButton from '../Components/BlockButton';
import Tabs from '../Components/Tabs';
import Header from '../Components/Header';
import Search from '../Icons/Search';
import More from '../Icons/More';
import Filter from '../Icons/Filter';
import theme from '../Styles/themeStyles';
import Icon from '../Components/Icon';

function Balance() {
  return (
    <View style={(theme.tabScreen, {backgroundColor: '#f6f6f6'})}>
      <Header name="Balance">
        <Icon onPress={() => alert('Search')}>
          <Search width={20} height={20} />
        </Icon>
        <Icon onPress={() => alert('Search')}>
          <Filter width={20} height={20} />
        </Icon>
        <Icon onPress={() => alert('Search')}>
          <More width={20} height={20} />
        </Icon>
      </Header>
      <Tabs />
      <BlockButton />
    </View>
  );
}

export default Balance;
