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
import { Context as ArtistContext } from "../../context/ArtistContext";
import { Feather } from "@expo/vector-icons";

const ArtistListScreen = ({ navigation }) => {
  const { state, getArtists, deleteArtist } = useContext(ArtistContext);

  const showAlert = id => {
    Alert.alert("Warning", "Are you sure you want to delete this artist?", [
      { text: "Delete", onPress: () => deleteArtist(id) },
      {
        text: "Cancel",
        style: "cancel"
      }
    ]);
  };

  return (
    <>
      <NavigationEvents onWillFocus={() => getArtists()} />
      <FlatList
        data={state}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ArtistDetail", { id: item.id })
              }
            >
              <View style={styles.row}>
                <Text style={styles.fontSize}>
                  {item.firstName} - {item.lastName}
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

ArtistListScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Artists",
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("ArtistCreate")}>
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

export default ArtistListScreen;
