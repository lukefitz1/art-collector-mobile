import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Button
} from "react-native";

const CollectionForm = ({ onSubmit, initialValues }) => {
  const [collectionName, setCollectionName] = useState(
    initialValues.collectionName
  );
  const [identifier, setIdentifier] = useState(initialValues.identifier);
  const [year, setYear] = useState(initialValues.year);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Collection Name:</Text>
        <TextInput
          style={styles.input}
          value={collectionName}
          onChangeText={text => setCollectionName(text)}
        />
        <Text style={styles.label}>Collection Identifier:</Text>
        <TextInput
          style={styles.input}
          value={identifier}
          onChangeText={text => setIdentifier(text)}
        />
        <Text style={styles.label}>Year:</Text>
        <TextInput
          style={styles.input}
          value={year}
          onChangeText={text => setYear(text)}
        />
        <Button
          title="Save Collection"
          onPress={() => onSubmit(collectionName, identifier, year)}
        />
      </ScrollView>
    </View>
  );
};

CollectionForm.defaultProps = {
  initialValues: {
    collectionName: "",
    identifier: "",
    year: ""
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

export default CollectionForm;
