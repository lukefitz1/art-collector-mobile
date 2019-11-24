import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as ArtContext } from "../../context/ArtContext";

const ArtDetailScreen = ({ navigation }) => {
  const { state } = useContext(ArtContext);
  const id = navigation.getParam("id");

  const art = state.find(art => art.id === id);

  return (
    <View>
      <Text>{art.title}</Text>
      <Text>{art.ojbId}</Text>
      <Text>{art.artType}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ArtDetailScreen;
