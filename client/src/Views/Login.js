import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

function Login() {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => alert('Hola')} style={styles.button}>
        <Text>Hola</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3784F9',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'white',
    width: '60%',
    height: 100,
  },
});
