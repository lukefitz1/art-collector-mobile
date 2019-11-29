import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Context as ArtistContext } from "../../context/ArtistContext";
import { EvilIcons } from "@expo/vector-icons";

const ArtistDetailScreen = ({ navigation }) => {
  const { state } = useContext(ArtistContext);
  const id = navigation.getParam("id");

  const artist = state.find(artist => artist.id === id);

  return (
    <View style={styles.container}>
      <View style={styles.imageColumn}>
        {artist.artist_image.url ? (
          <Image
            style={styles.image}
            source={{ uri: artist.artist_image.url }}
          />
        ) : null}
      </View>
      <View style={styles.contentColumn}>
        <Text
          style={styles.text}
        >{`${artist.firstName} ${artist.lastName}`}</Text>
        <Text style={styles.text}>{artist.additionalInfo}</Text>
      </View>
      <View>
        <Text style={styles.bio}>{artist.biography}</Text>
      </View>
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

const styles = StyleSheet.create({
  container: { flexDirection: "row", flexWrap: "wrap", margin: 10 },
  imageColumn: {
    width: "40%"
  },
  image: { width: 100, height: 100, alignSelf: "center" },
  contentColumn: { width: "60%" },
  text: { fontWeight: "bold", marginBottom: 5 },
  bio: {
    marginTop: 10
  }
});

export default ArtistDetailScreen;
