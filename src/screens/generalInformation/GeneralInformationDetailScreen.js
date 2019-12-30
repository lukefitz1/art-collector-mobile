import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Context as GeneralInformationContext } from "../../context/GeneralInformationContext";
import { EvilIcons } from "@expo/vector-icons";

const GeneralInformationDetailScreen = ({ navigation }) => {
  const { state } = useContext(GeneralInformationContext);
  const id = navigation.getParam("id");

  const generalInfo = state.find(gi => gi.id === id);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Info Label: </Text>
        <Text>{generalInfo.information_label}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Information: </Text>
        <Text>{generalInfo.information}</Text>
      </View>
    </View>
  );
};

GeneralInformationDetailScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("GeneralInformationEdit", {
            id: navigation.getParam("id")
          })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", flexWrap: "wrap", margin: 10 },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 5
  },
  label: { fontWeight: "bold" }
  // imageColumn: {
  //   width: "40%"
  // },
  // image: { width: 100, height: 100, alignSelf: "center" },
  // contentColumn: { width: "60%" },
  // text: { fontWeight: "bold", marginBottom: 5 },
  // bio: {
  //   marginTop: 10
  // }
});

export default GeneralInformationDetailScreen;
