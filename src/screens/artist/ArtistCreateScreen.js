import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  ScrollView
} from "react-native";
import { Context as ArtistContext } from "../../context/ArtistContext";

const ArtistCreateScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [biography, setBiography] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [artistImage, setArtistImage] = useState("");
  const { addArtist } = useContext(ArtistContext);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>First Name:</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={text => setFirstName(text)}
        />
        <Text style={styles.label}>Last Name:</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={text => setLastName(text)}
        />
        <Text style={styles.label}>Biography:</Text>
        <TextInput
          style={styles.input}
          value={biography}
          onChangeText={text => setBiography(text)}
        />
        <Text style={styles.label}>Additional Information:</Text>
        <TextInput
          style={styles.input}
          value={additionalInfo}
          onChangeText={text => setAdditionalInfo(text)}
        />
        <Text style={styles.label}>Artist Image:</Text>
        <TextInput
          style={styles.input}
          value={artistImage}
          onChangeText={text => setArtistImage(text)}
        />
        <Button
          title="Add New Artist"
          onPress={() =>
            addArtist(
              firstName,
              lastName,
              biography,
              additionalInfo,
              artistImage,
              () => {
                navigation.navigate("ArtistList");
              }
            )
          }
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }
});

export default ArtistCreateScreen;
