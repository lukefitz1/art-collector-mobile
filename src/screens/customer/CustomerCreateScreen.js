import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as CustomerContext } from "../../context/CustomerContext";
import CustomerForm from "../../components/customer/CustomerForm";

const CustomerCreateScreen = ({ navigation }) => {
  const { addCustomer } = useContext(CustomerContext);

  // state should be a dropdown with each state option
  // project notes should be a text box as opposed to an input field
  return (
    <CustomerForm
      onSubmit={(
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
      ) => {
        addCustomer(
          firstName,
          lastName,
          email,
          phone,
          street,
          city,
          state,
          zip,
          referredBy,
          projectNotes,
          () => navigation.navigate("CustomerList")
        );
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CustomerCreateScreen;
