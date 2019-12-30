import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as GeneralInformationContext } from "../../context/GeneralInformationContext";
import GeneralInformationForm from "../../components/generalInformation/GeneralInformationForm";

const GeneralInformationEditScreen = ({ navigation }) => {
  const { state, editGeneralInformation } = useContext(
    GeneralInformationContext
  );
  const id = navigation.getParam("id");

  const generalInfo = state.find(gi => gi.id === id);

  return (
    <GeneralInformationForm
      initialValues={{
        infoLabel: generalInfo.information_label,
        info: generalInfo.information
      }}
      onSubmit={(infoLabel, info) => {
        editGeneralInformation(id, infoLabel, info, () => navigation.pop());
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default GeneralInformationEditScreen;
