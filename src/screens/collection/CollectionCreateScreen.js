import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  ScrollView
} from "react-native";
import { Context as CollectionContext } from "../../context/CollectionContext";

const CollectionCreateScreen = ({ navigation }) => {
  const [collectionName, setCollectionName] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [year, setYear] = useState("");
  const { addCollection } = useContext(CollectionContext);

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
          title="Add New Collection"
          onPress={() =>
            addCollection(collectionName, identifier, year, () => {
              navigation.navigate("CollectionList");
            })
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

export default CollectionCreateScreen;
