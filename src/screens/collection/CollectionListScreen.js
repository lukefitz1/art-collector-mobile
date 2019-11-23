import React, { useContext } from "react";
import { Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Context as CollectionContext } from "../../context/CollectionContext";

const CollectionListScreen = ({ navigation }) => {
  const { state, getCollections } = useContext(CollectionContext);

  return (
    <>
      <NavigationEvents onWillFocus={() => getCollections()} />
      <Text>CollectionListScreen</Text>
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

const styles = StyleSheet.create({});

export default CollectionListScreen;
