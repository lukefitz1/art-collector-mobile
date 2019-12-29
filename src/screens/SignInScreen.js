import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Button,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import { Text, Input, Image } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SignInScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <ScrollView>
        <View style={styles.mainImageContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/spire-logo.png")}
          />
        </View>
        <View style={styles.formContainer}>
          <Spacer>
            <Text h3>Log In</Text>
          </Spacer>
          <Input
            label="Username"
            value={username}
            onChangeText={username => {
              setUsername(username);
            }}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Spacer />
          <Input
            label="Password"
            value={password}
            onChangeText={password => {
              setPassword(password);
            }}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
          />
          {state.errorMessage ? (
            <Text style={styles.errorMessage}>{state.errorMessage}</Text>
          ) : null}
          <Spacer>
            <Button
              style={styles.button}
              title="Log In"
              onPress={() => signin({ username, password })}
            />
          </Spacer>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

SignInScreen.navigationOptions = () => {
  return {
    header: null
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1
    // justifyContent: "center",
    // alignItems: "center",
    // marginBottom: 25
    // borderColor: "red",
    // borderWidth: 5
  },
  mainImageContainer: {
    alignItems: "center",
    // marginTop: 25,
    // borderColor: "blue",
    // borderWidth: 5,
    marginTop: 50
  },
  logo: {
    height: 150,
    width: 100
  },
  formContainer: {
    // borderColor: "green",
    // borderWidth: 5
  },
  button: {
    // alignItems: "stretch"
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginTop: 10
  }
});

export default SignInScreen;
