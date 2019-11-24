import React, { useContext } from "react";
import { Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Context as CollectionContext } from "../../context/CollectionContext";
import { Feather } from "@expo/vector-icons";

const CollectionListScreen = ({ navigation }) => {
  const { state, getCollections } = useContext(CollectionContext);

  return (
    <>
      <NavigationEvents onWillFocus={() => getCollections()} />
      <FlatList
        data={state}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("CollectionDetail", { id: item.id })
              }
            >
              <ListItem chevron={true} title={item.collectionName} />
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

CollectionListScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Collections",
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("CollectionCreate")}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({});

export default CollectionListScreen;
