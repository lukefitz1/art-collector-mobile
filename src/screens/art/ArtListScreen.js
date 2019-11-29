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
import { Context as ArtContext } from "../../context/ArtContext";
import { Feather } from "@expo/vector-icons";

const ArtListScreen = ({ navigation }) => {
  const { state, getArt, deleteArt } = useContext(ArtContext);

  const showAlert = id => {
    Alert.alert(
      "Warning",
      "Are you sure you want to delete this piece of art?",
      [
        { text: "Delete", onPress: () => deleteArt(id) },
        {
          text: "Cancel",
          style: "cancel"
        }
      ]
    );
  };

  return (
    <>
      <NavigationEvents onWillFocus={() => getArt()} />
      <FlatList
        data={state}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ArtDetail", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.fontSize}>
                  {item.ojbId} - {item.title}
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

ArtListScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Artwork",
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("ArtCreate")}>
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

export default ArtListScreen;
