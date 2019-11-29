import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context as ArtistContext } from "../../context/ArtistContext";
import { Feather, EvilIcons } from "@expo/vector-icons";

const ArtistDetailScreen = ({ navigation }) => {
  const { state } = useContext(ArtistContext);
  const id = navigation.getParam("id");

  const artist = state.find(artist => artist.id === id);

  return (
    <View>
      <Text>{`${artist.firstName} ${artist.lastName}`}</Text>
      <Text>{artist.additionalInfo}</Text>
    </View>
  );
};

ArtistDetailScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ArtistEdit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({});

export default ArtistDetailScreen;
