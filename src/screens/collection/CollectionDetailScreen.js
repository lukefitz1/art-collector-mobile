import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context as CollectionContext } from "../../context/CollectionContext";
import { Feather, EvilIcons } from "@expo/vector-icons";

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

CollectionDetailScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("CollectionEdit", {
            id: navigation.getParam("id")
          })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({});

export default CollectionDetailScreen;
