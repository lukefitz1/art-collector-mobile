import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as CollectionContext } from "../../context/CollectionContext";

const CollectionDetailScreen = ({ navigation }) => {
  const { state } = useContext(CollectionContext);
  const id = navigation.getParam("id");

  const collection = state.find(coll => coll.id === id);

  return (
    <View>
      <Text>{collection.collectionName}</Text>
      <Text>{collection.identifier}</Text>
      <Text>{collection.year}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CollectionDetailScreen;
