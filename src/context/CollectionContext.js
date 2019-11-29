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
  return async (collectionName, identifier, year, callback) => {
    try {
      await spireApi.post("/collections", {
        collectionName,
        identifier,
        year
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

export const { Provider, Context } = createDataContext(
  collectionReducer,
  {
    getCollections,
    addCollection,
    editCollection
  },
  []
);
