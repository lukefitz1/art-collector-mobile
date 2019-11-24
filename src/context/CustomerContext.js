import createDataContext from "./createDataContext";
import spireApi from "../api/spire";

const customerReducer = (state, action) => {
  switch (action.type) {
    case "get_customers":
      return action.payload;
    case "delete_customer":
      return state.filter(customer => customer.id !== action.payload);
    default:
      return state;
  }
};

const getCustomers = dispatch => {
  return async () => {
    try {
      const response = await spireApi.get("/customer");

      dispatch({ type: "get_customers", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
};

const addCustomer = () => {
  return async (
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
    callback
  ) => {
    try {
      await spireApi.post("/customer", {
        firstName,
        lastName,
        email_address: email,
        phone_number: phone,
        street_address: street,
        city,
        state,
        zip,
        referred_by: referredBy,
        project_notes: projectNotes
      });

      // TODO: Instead of following dispatch, we may need to re-fetch all customers
      // so that we can navigate to the detail page of the new customer after creation
      // dispatch({ type: "add_customer", payload: response.data });

      // So, for example (from the get customers function above):
      // const response = await spireApi.get("/customer");
      // dispatch({ type: "get_customers", payload: response.data });

      if (callback) {
        callback();
      }
    } catch (err) {
      console.log(err);
    }
  };
};

const editCustomer = dispatch => () => {};

const deleteCustomer = dispatch => {
  return async (id, callback) => {
    try {
      await spireApi.delete(`/customer/${id}`);

      dispatch({ type: "delete_customer", payload: id });

      if (callback) {
        callback();
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const { Provider, Context } = createDataContext(
  customerReducer,
  {
    getCustomers,
    addCustomer,
    editCustomer,
    deleteCustomer
  },
  []
);
