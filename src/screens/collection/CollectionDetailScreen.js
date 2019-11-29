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
      <View style={styles.row}>
        <Text style={styles.label}>Collection Name: </Text>
        <Text>{collection.collectionName}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Collection Identifier: </Text>
        <Text>{collection.identifier}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Collection Year: </Text>
        <Text>{collection.year}</Text>
      </View>
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

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 5
  },
  label: { fontWeight: "bold" }
});

export default CollectionDetailScreen;
