import React, { useContext } from "react";
import { Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Context as CustomerContext } from "../../context/CustomerContext";

const CustomerListScreen = ({ navigation }) => {
  const { state, getCustomers } = useContext(CustomerContext);
  console.log(state);
  return (
    <>
      <NavigationEvents onWillFocus={() => getCustomers()} />
      <Text>CustomerListScreen</Text>
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

const styles = StyleSheet.create({});

export default CustomerListScreen;
