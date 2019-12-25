import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as CollectionContext } from "../../context/CollectionContext";
import CollectionForm from "../../components/collection/CollectionForm";
import { Context as CustomerContext } from "../../context/CustomerContext";
// import { NavigationEvents } from "react-navigation";

const CollectionCreateScreen = ({ navigation }) => {
  const { addCollection } = useContext(CollectionContext);
  // const { state, getCustomers } = useContext(CustomerContext);

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
