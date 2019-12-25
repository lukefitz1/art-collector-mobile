import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as CollectionContext } from "../../context/CollectionContext";
import CollectionForm from "../../components/collection/CollectionForm";

const CollectionCreateScreen = ({ navigation }) => {
  const { addCollection } = useContext(CollectionContext);

  return (
    <>
      <CollectionForm
        onSubmit={(collectionName, identifier, year, customerId) => {
          addCollection(collectionName, identifier, year, customerId, () =>
            navigation.navigate("CollectionList")
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default CollectionCreateScreen;
