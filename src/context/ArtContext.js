import createDataContext from "./createDataContext";
import spireApi from "../api/spire";

const artReducer = (state, action) => {
  switch (action.type) {
    case "get_art":
      return action.payload;
    default:
      return state;
  }
};

const getArt = dispatch => {
  return async () => {
    try {
      const response = await spireApi.get("/artwork");

      dispatch({ type: "get_art", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const { Provider, Context } = createDataContext(
  artReducer,
  {
    getArt
  },
  []
);
