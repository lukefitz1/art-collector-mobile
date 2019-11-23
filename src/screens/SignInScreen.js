import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SignInScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontSize: 48 }}>SignInScreen</Text>
      <Button title="Go to Customers" onPress={() => navigation.navigate('CustomerList')}/>
    </View>
  )
};

const styles = StyleSheet.create({});

export default SignInScreen;