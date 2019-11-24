import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  ScrollView
} from "react-native";
import { Context as CustomerContext } from "../../context/CustomerContext";

const CustomerCreateScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [referredBy, setReferredBy] = useState("");
  const [projectNotes, setProjectNotes] = useState("");
  const { addCustomer } = useContext(CustomerContext);

  // state should be a dropdown with each state option
  // project notes should be a text box as opposed to an input field
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
        <Text style={styles.label}>Email Address:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Text style={styles.label}>Phone Number:</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={text => setPhone(text)}
        />
        <Text style={styles.label}>Street:</Text>
        <TextInput
          style={styles.input}
          value={street}
          onChangeText={text => setStreet(text)}
        />
        <Text style={styles.label}>City:</Text>
        <TextInput
          style={styles.input}
          value={city}
          onChangeText={text => setCity(text)}
        />
        <Text style={styles.label}>State:</Text>
        <TextInput
          style={styles.input}
          value={state}
          onChangeText={text => setState(text)}
        />
        <Text style={styles.label}>Zip Code:</Text>
        <TextInput
          style={styles.input}
          value={zip}
          onChangeText={text => setZip(text)}
        />
        <Text style={styles.label}>Referred By:</Text>
        <TextInput
          style={styles.input}
          value={referredBy}
          onChangeText={text => setReferredBy(text)}
        />
        <Text style={styles.label}>Project Notes:</Text>
        <TextInput
          style={styles.input}
          value={projectNotes}
          onChangeText={text => setProjectNotes(text)}
        />
        <Button
          title="Add New Customer"
          onPress={() =>
            addCustomer(
              firstName,
              lastName,
              email,
              phone,
              street,
              city,
              state,
              zip,
              referredBy,
              projectNotes,
              () => {
                navigation.navigate("CustomerList");
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

export default CustomerCreateScreen;
