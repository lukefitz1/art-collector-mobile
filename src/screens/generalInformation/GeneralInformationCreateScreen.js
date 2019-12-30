import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Context as GeneralInformationContext } from "../../context/GeneralInformationContext";
import GeneralInformationForm from "../../components/generalInformation/GeneralInformationForm";

const GeneralInformationCreateScreen = ({ navigation }) => {
  const { addGeneralInformation } = useContext(GeneralInformationContext);

  return (
    <GeneralInformationForm
      onSubmit={(infoLabel, info) => {
        addGeneralInformation(infoLabel, info, () =>
          navigation.navigate("GeneralInformationList")
        );
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default GeneralInformationCreateScreen;
