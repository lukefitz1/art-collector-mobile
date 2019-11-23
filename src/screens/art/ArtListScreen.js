import React, { useContext } from "react";
import { Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Context as ArtContext } from "../../context/ArtContext";

const ArtListScreen = ({ navigation }) => {
  const { state, getArt } = useContext(ArtContext);

  return (
    <>
      <NavigationEvents onWillFocus={() => getArt()} />
      <Text>ArtListScreen</Text>
      <FlatList
        data={state}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ArtDetail", { id: item.id })}
            >
              <ListItem chevron={true} title={item.title} />
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default ArtListScreen;
