import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as ArtistContext } from "../../context/ArtistContext";

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

const styles = StyleSheet.create({});

export default ArtistDetailScreen;
