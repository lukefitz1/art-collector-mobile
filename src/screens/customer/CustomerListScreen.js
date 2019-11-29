import React, { useContext } from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Context as CustomerContext } from "../../context/CustomerContext";
import { Feather } from "@expo/vector-icons";

const CustomerListScreen = ({ navigation }) => {
  const { state, getCustomers } = useContext(CustomerContext);

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
              <ListItem
                chevron={true}
                title={`${item.firstName} ${item.lastName}`}
              />
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

const styles = StyleSheet.create({});

export default CustomerListScreen;
