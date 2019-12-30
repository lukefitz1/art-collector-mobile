import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert
} from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as GeneralInformationContext } from "../../context/GeneralInformationContext";
import { Feather } from "@expo/vector-icons";

const GeneralInformationListScreen = ({ navigation }) => {
  const { state, getGeneralInformation, deleteGeneralInformation } = useContext(
    GeneralInformationContext
  );

  const showAlert = id => {
    Alert.alert(
      "Warning",
      "Are you sure you want to delete this piece of General Infomration?",
      [
        { text: "Delete", onPress: () => deleteGeneralInformation(id) },
        {
          text: "Cancel",
          style: "cancel"
        }
      ]
    );
  };

  return (
    <View>
      <NavigationEvents onWillFocus={() => getGeneralInformation()} />
      <FlatList
        data={state}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("GeneralInformationDetail", { id: item.id })
              }
            >
              <View style={styles.row}>
                <Text style={styles.fontSize}>{item.information_label}</Text>
                <TouchableOpacity onPress={() => showAlert(item.id)}>
                  <Feather name="trash" style={styles.icon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

GeneralInformationListScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "General Informations",
    headerRight: (
      <TouchableOpacity
        onPress={() => navigation.navigate("GeneralInformationCreate")}
      >
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "gray"
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

export default GeneralInformationListScreen;
