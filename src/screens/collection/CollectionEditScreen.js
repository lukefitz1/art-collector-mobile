import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as CollectionContext } from "../../context/CollectionContext";
import CollectionForm from "../../components/collection/CollectionForm";

const CollectionEditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editCollection } = useContext(CollectionContext);

  const collection = state.find(collection => collection.id === id);

  return (
    <CollectionForm
      initialValues={{
        collectionName: collection.collectionName,
        identifier: collection.identifier,
        year: collection.year,
        customerId: collection.customer_id
      }}
      onSubmit={(collectionName, identifier, year, customerId) => {
        editCollection(id, collectionName, identifier, year, customerId, () =>
          navigation.navigate("CustomerDetail", { id: customerId })
        );
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CollectionEditScreen;
