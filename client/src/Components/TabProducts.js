import React from 'react';
import {ScrollView, Text} from 'react-native';

import ScrollableTabView, {
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';

export default () => {
  return (
    <ScrollableTabView
      style={{marginTop: 20, backgroundColor: 'red', marginHorizontal: 20}}
      initialPage={1}
      locked={true}
      renderTabBar={() => <DefaultTabBar />}>
      <Text tabLabel="Tab #1">My</Text>
      <Text tabLabel="Tab #4">favorite</Text>
      <Text tabLabel="Tab #3">favorite</Text>
      <Text tabLabel="Tab #5">favorite</Text>
      <Text tabLabel="Tab #6">project</Text>
    </ScrollableTabView>
  );
};
