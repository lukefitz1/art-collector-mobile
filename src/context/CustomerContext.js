import createDataContext from "./createDataContext";
import spireApi from "../api/spire";

const customerReducer = (state, action) => {
  switch (action.type) {
    case "get_customers":
      return action.payload;
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

// const getCustomer = dispatch => () => {};
// const addCustomer = dispatch => () => {};
// const editCustomer = dispatch => () => {};
// const deleteCustomer = dispatch => () => {};

export const { Provider, Context } = createDataContext(
  customerReducer,
  {
    getCustomers /*, getCustomer, addCustomer, editCustomer, deleteCustomer*/
  },
  []
);
