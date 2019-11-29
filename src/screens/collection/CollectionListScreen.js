import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert
} from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as CollectionContext } from "../../context/CollectionContext";
import { Feather } from "@expo/vector-icons";

const CollectionListScreen = ({ navigation }) => {
  const { state, getCollections, deleteCollection } = useContext(
    CollectionContext
  );

  const showAlert = id => {
    Alert.alert("Warning", "Are you sure you want to delete this collection?", [
      { text: "Delete", onPress: () => deleteCollection(id) },
      {
        text: "Cancel",
        style: "cancel"
      }
    ]);
  };

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
              <View style={styles.row}>
                <Text style={styles.fontSize}>{item.collectionName}</Text>
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

export default CollectionListScreen;
