import React from 'react';
import {View, ScrollView} from 'react-native';
import BalanceCard from '../Components/BalanceCard';
import BalanceResume from '../Components/BalanceResume';
import LastTransactions from '../Components/LastTransactions';
import StateFrame from '../Components/StateFrame';
import theme from '../Styles/themeStyles';
import Title from '../Components/Title';
import AvatarName from '../Components/AvatarName';

const foto = require('../Assets/foto.jpg');

function Home() {
  return (
    <View style={theme.tabScreen}>
      <ScrollView vertical>
        <View style={theme.root}>
          <AvatarName name="Billy" photo={foto} />
          <Title title="Tu saldo" />
          <BalanceResume
            name="Billy"
            value="$13000"
            date="6/8"
            photo={foto}
            OnpressPhoto={() => alert('Hola')}
          />
          <Title title="Tu resumen" />
          <StateFrame
            incomes="$1200"
            outcomes="$200"
            toCollect="$300"
            toPay="$10009"
            amountToPay={6}
            amountToCollect={10}
            value="$600"
            costs="$400"
          />
          <Title title="Tu actividad" />
          <LastTransactions />
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;
