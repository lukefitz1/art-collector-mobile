import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button, Image } from 'react-native-elements';
import Spacer from '../components/Spacer'

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/spire-logo.png')} />
      <Spacer><Text h3>Log In</Text></Spacer>
      <Input label="Username" />
      <Spacer />
      <Input label="Password" />
      <Spacer><Button style={styles.button} title="Log In" onPress={() => navigation.navigate('CustomerList')}/></Spacer>
    </View>
  )
};

SignInScreen.navigationOptions = () => {
  return {
    header: null
  };
};
const styles = StyleSheet.create({
  container: {
    borderColor: 'red',
    borderWidth: 10,
    flex: 1,
    justifyContent: 'center',
    // marginBottom: 150
    alignItems: 'center'
  },
  logo: {
    height: 150,
    width: 100
  },
  button: {
    alignItems: 'stretch'
  }
});

export default SignInScreen;