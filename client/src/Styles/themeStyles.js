import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

export default {
  root: {
    backgroundColor: 'white',
  },
  tabScreen: {
    height: height - 60,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  text: {
    positive: '#26E595',
    negative: '#FD6363',
  },
  pBold: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  h2: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  p: {
    fontSize: 15,
    color: '#A6A0A0',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
};
