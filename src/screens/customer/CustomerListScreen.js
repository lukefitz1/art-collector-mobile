import React, { useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { ListItem } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Context as CustomerContext } from "../../context/CustomerContext";
import { Feather } from "@expo/vector-icons";

const CustomerListScreen = ({ navigation }) => {
  const { state, getCustomers, deleteCustomer } = useContext(CustomerContext);

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
                <TouchableOpacity onPress={() => deleteCustomer(item.id)}>
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
