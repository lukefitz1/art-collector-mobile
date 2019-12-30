import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Button
} from "react-native";

const GeneralInformationForm = ({ onSubmit, initialValues }) => {
  const [infoLabel, setInfoLabel] = useState(initialValues.infoLabel);
  const [info, setInfo] = useState(initialValues.info);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Informaton Label:</Text>
        <TextInput
          style={styles.input}
          value={infoLabel}
          onChangeText={text => setInfoLabel(text)}
        />
        <Text style={styles.label}>Information:</Text>
        <TextInput
          style={styles.input}
          value={info}
          onChangeText={text => setInfo(text)}
        />
        <Button
          style={styles.saveBtn}
          title="Save General Information"
          onPress={() => onSubmit(infoLabel, info)}
        />
      </ScrollView>
    </View>
  );
};

GeneralInformationForm.defaultProps = {
  initialValues: {
    infoLabel: "",
    info: ""
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
  },
  imageBtn: {
    marginBottom: 15
  },
  saveBtn: {
    marginTop: 15
  }
});

export default GeneralInformationForm;
