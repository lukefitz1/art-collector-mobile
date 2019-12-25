import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Button
} from "react-native";
import RNPickerSelect from "react-native-picker-select";

const CustomerForm = ({ onSubmit, initialValues }) => {
  const stateCodes = [
    "AL",
    "AK",
    "AS",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "DC",
    "FM",
    "FL",
    "GA",
    "GU",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MH",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "MP",
    "OH",
    "OK",
    "OR",
    "PW",
    "PA",
    "PR",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VI",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY"
  ];

  const [firstName, setFirstName] = useState(initialValues.firstName);
  const [lastName, setLastName] = useState(initialValues.lastName);
  const [email, setEmail] = useState(initialValues.email);
  const [phone, setPhone] = useState(initialValues.phone);
  const [street, setStreet] = useState(initialValues.street);
  const [city, setCity] = useState(initialValues.city);
  const [state, setState] = useState(initialValues.customerState);
  const [zip, setZip] = useState(initialValues.zip);
  const [referredBy, setReferredBy] = useState(initialValues.referredBy);
  const [projectNotes, setProjectNotes] = useState(initialValues.projectNotes);

  const statesList = stateCodes.map(x => ({
    label: x,
    value: x,
    key: x
  }));
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
        {/* <TextInput
          style={styles.input}
          value={state}
          onChangeText={text => setState(text)}
        /> */}
        <RNPickerSelect
          items={statesList}
          value={state}
          onValueChange={value => setState(value)}
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
          multiline={true}
          numberOfLines={4}
          style={styles.input}
          value={projectNotes}
          onChangeText={text => setProjectNotes(text)}
        />
        <Button
          title="Save Customer"
          onPress={() =>
            onSubmit(
              firstName,
              lastName,
              email,
              phone,
              street,
              city,
              state,
              zip,
              referredBy,
              projectNotes
            )
          }
        />
      </ScrollView>
    </View>
  );
};

CustomerForm.defaultProps = {
  initialValues: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    referredBy: "",
    projectNotes: ""
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

export default CustomerForm;
