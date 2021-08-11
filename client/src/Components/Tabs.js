import React from 'react';
import {Dimensions, View} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustomTabBar from 'react-native-scrollable-tab-view/CustomTabBar'; // Archivo Creado a partir de defaultTabBar
import TabDay from '../Components/TabDay';
import TabWeek from '../Components/TabWeek';
import TabMonth from '../Components/TabMonth';
import TabTrimester from '../Components/TabTrimester';

const {height} = Dimensions.get('window');

function Tabs() {
  return (
    <View style={{height: height - 180}}>
      <ScrollableTabView
        initialPage={0}
        tabBarActiveTextColor="white"
        tabBarInactiveTextColor="#5196FE"
        // tabBarBackgroundColor="#C7DCFF"
        tabBarBackgroundColor="white"
        tabBarTextStyle={{
          fontFamily: 'Roboto',
          fontSize: 12,
          fontWeight: 'bold',
        }}
        renderTabBar={() => <CustomTabBar />}>
        <View tabLabel="Dia">
          <TabDay />
        </View>
        <View tabLabel="Semana">
          <TabWeek />
        </View>
        <View tabLabel="Mes">
          <TabMonth />
        </View>
        <View tabLabel="Trimestre">
          <TabTrimester />
        </View>
      </ScrollableTabView>
    </View>
  );
}

export default Tabs;
