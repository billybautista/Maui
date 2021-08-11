import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  onLongPress,
  delayLongPress,
} from 'react-native';
import theme from '../Styles/themeStyles';

function BalanceCard({name, price, type, state, onLongPress, delayLongPress}) {
  return (
    <TouchableOpacity onLongPress={onLongPress} delayLongPress={delayLongPress}>
      <View style={styles.root}>
        <View style={[theme.row]}>
          <View style={theme.row}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 40,
                backgroundColor: 'orange',
                marginRight: 10,
              }}
            />
            <View style={theme.column}>
              <Text style={theme.h2}>{name}</Text>
              <Text style={theme.p}>{type}</Text>
            </View>
          </View>
          <View style={[theme.column, {alignItems: 'flex-end'}]}>
            <Text style={theme.h2}>{price}</Text>
            <Text style={theme.p}>{state}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 60,
  },
});

export default BalanceCard;
