import createDataContext from "./createDataContext";
import spireApi from "../api/spire";

const collectionReducer = (state, action) => {
  switch (action.type) {
    case "get_collections":
      return action.payload;
    default:
      return state;
  }
};

const getCollections = dispatch => {
  return async () => {
    try {
      const response = await spireApi.get("/collections");
      console.log(response.data);
      dispatch({ type: "get_collections", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const { Provider, Context } = createDataContext(
  collectionReducer,
  {
    getCollections
  },
  []
);
