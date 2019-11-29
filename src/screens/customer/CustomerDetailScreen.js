import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context as CustomerContext } from "../../context/CustomerContext";
import { Feather, EvilIcons } from "@expo/vector-icons";

const CustomerDetailScreen = ({ navigation }) => {
  const { state, deleteCustomer } = useContext(CustomerContext);
  const id = navigation.getParam("id");

  const customer = state.find(cust => cust.id === id);

  return (
    <View>
      {/* <TouchableOpacity
        onPress={() => {
          deleteCustomer(id, () => {
            navigation.navigate("CustomerList");
          });
        }}
      >
        <Feather name="trash" style={styles.icon} size={25} />
      </TouchableOpacity> */}
      <Text>{`${customer.firstName} ${customer.lastName}`}</Text>
      <Text>{customer.email_address}</Text>
      <Text>{customer.phone_number}</Text>
    </View>
  );
};

CustomerDetailScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("CustomerEdit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({});

export default CustomerDetailScreen;
