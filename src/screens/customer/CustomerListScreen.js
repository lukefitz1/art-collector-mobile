import React, { useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert
} from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as CustomerContext } from "../../context/CustomerContext";
import { Feather } from "@expo/vector-icons";

const CustomerListScreen = ({ navigation }) => {
  const { state, getCustomers, deleteCustomer } = useContext(CustomerContext);

  const showAlert = id => {
    Alert.alert("Warning", "Are you sure you want to delete this customer?", [
      { text: "Delete", onPress: () => deleteCustomer(id) },
      {
        text: "Cancel",
        style: "cancel"
      }
    ]);
  };

  return (
    <>
      <NavigationEvents onWillFocus={() => getCustomers()} />
      <FlatList
        data={state}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("CustomerDetail", { id: item.id })
              }
            >
              <View style={styles.row}>
                <Text style={styles.fontSize}>
                  {item.firstName} - {item.lastName}
                </Text>
                <TouchableOpacity onPress={() => showAlert(item.id)}>
                  <Feather name="trash" style={styles.icon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

CustomerListScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Customers",
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("CustomerCreate")}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "gray"
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

export default CustomerListScreen;
