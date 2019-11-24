import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as CustomerContext } from "../../context/CustomerContext";

const CustomerDetailScreen = ({ navigation }) => {
  const { state } = useContext(CustomerContext);
  const id = navigation.getParam("id");

  const customer = state.find(cust => cust.id === id);

  return (
    <View>
      <Text>{`${customer.firstName} ${customer.lastName}`}</Text>
      <Text>{customer.email_address}</Text>
      <Text>{customer.phone_number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CustomerDetailScreen;
