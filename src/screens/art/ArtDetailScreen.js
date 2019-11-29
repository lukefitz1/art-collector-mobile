import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context as ArtContext } from "../../context/ArtContext";
import { Feather, EvilIcons } from "@expo/vector-icons";

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

ArtDetailScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ArtEdit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({});

export default ArtDetailScreen;
