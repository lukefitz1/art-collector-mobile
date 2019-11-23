import React, { useContext } from "react";
import { Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Context as ArtistContext } from "../../context/ArtistContext";

const ArtistListScreen = ({ navigation }) => {
  const { state, getArtists } = useContext(ArtistContext);

  return (
    <>
      <NavigationEvents onWillFocus={() => getArtists()} />
      <Text>ArtistListScreen</Text>
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

const styles = StyleSheet.create({});

export default ArtistListScreen;
