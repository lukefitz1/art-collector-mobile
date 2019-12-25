import createDataContext from "./createDataContext";
import spireApi from "../api/spire";

const collectionReducer = (state, action) => {
  switch (action.type) {
    case "get_collections":
      return action.payload;
    case "edit_collection":
      return state.map(collection => {
        return collection.id === action.payload.id
          ? action.payload
          : collection;
      });
    case "delete_collection":
      return state.filter(collection => collection.id !== action.payload);
    default:
      return state;
  }
};

const getCollections = dispatch => {
  return async () => {
    try {
      const response = await spireApi.get("/collections");

      dispatch({ type: "get_collections", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
};

const addCollection = () => {
  return async (collectionName, identifier, year, customerId, callback) => {
    try {
      console.log(`Customer ID: ${customerId}`);
      await spireApi.post("/collections", {
        collectionName,
        identifier,
        year,
        customer_id: customerId
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

const editCollection = dispatch => {
  return async (id, collectionName, identifier, year, callback) => {
    try {
      await spireApi.put(`/collections/${id}`, {
        collectionName,
        identifier,
        year
      });

      dispatch({
        type: "edit_collection",
        payload: {
          id: id,
          collectionName,
          identifier,
          year
        }
      });

      if (callback) {
        callback();
      }
    } catch (err) {
      console.log(err);
    }
  };
};

const deleteCollection = dispatch => {
  return async (id, callback) => {
    try {
      await spireApi.delete(`/collections/${id}`);

      dispatch({ type: "delete_collection", payload: id });

      if (callback) {
        callback();
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const { Provider, Context } = createDataContext(
  collectionReducer,
  {
    getCollections,
    addCollection,
    editCollection,
    deleteCollection
  },
  []
);
