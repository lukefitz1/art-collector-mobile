import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as CollectionContext } from "../../context/CollectionContext";
import CollectionForm from "../../components/collection/CollectionForm";

const CollectionEditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editCollection } = useContext(CollectionContext);

  const collection = state.find(customer => customer.id === id);

  return (
    <CollectionForm
      initialValues={{
        collectionName: collection.collectionName,
        identifier: collection.identifier,
        year: collection.year
      }}
      onSubmit={(collectionName, identifier, year) => {
        editCollection(id, collectionName, identifier, year, () =>
          navigation.pop()
        );
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CollectionEditScreen;
