import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Button
} from "react-native";

const ArtistForm = ({ onSubmit, initialValues }) => {
  const [firstName, setFirstName] = useState(initialValues.firstName);
  const [lastName, setLastName] = useState(initialValues.lastName);
  const [biography, setBiography] = useState(initialValues.biography);
  const [additionalInfo, setAdditionalInfo] = useState(
    initialValues.additionalInfo
  );
  const [artistImage, setArtistImage] = useState(initialValues.artistImage);

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
          title="Save Artist"
          onPress={() =>
            onSubmit(
              firstName,
              lastName,
              biography,
              additionalInfo,
              artistImage
            )
          }
        />
      </ScrollView>
    </View>
  );
};

ArtistForm.defaultProps = {
  initialValues: {
    firstName: "",
    lastName: "",
    biography: "",
    additionalInfo: "",
    artistImage: ""
  }
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

export default ArtistForm;
