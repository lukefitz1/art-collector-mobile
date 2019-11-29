import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as CustomerContext } from "../../context/CustomerContext";
import CustomerForm from "../../components/customer/CustomerForm";

const CustomerEditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editCustomer } = useContext(CustomerContext);

  const customer = state.find(customer => customer.id === id);

  return (
    <CustomerForm
      initialValues={{
        firstName: customer.firstName,
        lastName: customer.lastName,
        email: customer.email_address,
        phone: customer.phone_number,
        street: customer.street_address,
        city: customer.city,
        customerState: customer.state,
        zip: customer.zip,
        referredBy: customer.referred_by,
        projectNotes: customer.project_notes
      }}
      onSubmit={(
        firstName,
        lastName,
        email,
        phone,
        street,
        city,
        customerState,
        zip,
        referredBy,
        projectNotes
      ) => {
        editCustomer(
          id,
          firstName,
          lastName,
          email,
          phone,
          street,
          city,
          customerState,
          zip,
          referredBy,
          projectNotes,
          () => navigation.pop()
        );
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CustomerEditScreen;
