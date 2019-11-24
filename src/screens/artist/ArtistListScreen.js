import React, { useContext } from "react";
import { Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Context as ArtistContext } from "../../context/ArtistContext";
import { Feather } from "@expo/vector-icons";

const ArtistListScreen = ({ navigation }) => {
  const { state, getArtists } = useContext(ArtistContext);

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

const styles = StyleSheet.create({});

export default ArtistListScreen;
