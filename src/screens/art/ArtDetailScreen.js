import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Context as ArtContext } from "../../context/ArtContext";
import { EvilIcons } from "@expo/vector-icons";

const ArtDetailScreen = ({ navigation }) => {
  const { state } = useContext(ArtContext);
  const id = navigation.getParam("id");

  const art = state.find(art => art.id === id);

  return (
    <View>
      <View style={styles.imageContainer}>
        {art.image.url ? (
          <Image style={styles.mainImage} source={{ uri: art.image.url }} />
        ) : null}
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>Title: </Text>
          <Text style={styles.content}>{art.title}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>ID: </Text>
          <Text style={styles.content}>{art.ojbId}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Type: </Text>
          <Text style={styles.content}>{art.artType}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Medium: </Text>
          <Text style={styles.content}>{art.medium}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Description: </Text>
          <Text style={styles.content}>{art.description}</Text>
        </View>
      </View>
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

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    marginTop: 10
  },
  mainImage: { width: 250, height: 250 },
  contentContainer: {
    margin: 10
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  lineItem: {
    /*borderColor: "green", borderWidth: 2*/
  },
  label: { fontWeight: "bold" /*, borderColor: "green", borderWidth: 2*/ },
  content: { flexWrap: "wrap" }
});

export default ArtDetailScreen;
