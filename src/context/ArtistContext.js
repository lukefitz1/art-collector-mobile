import createDataContext from "./createDataContext";
import spireApi from "../api/spire";

const artistReducer = (state, action) => {
  switch (action.type) {
    case "get_artists":
      return action.payload;
    default:
      return state;
  }
};

const getArtists = dispatch => {
  return async () => {
    try {
      const response = await spireApi.get("/artist");

      dispatch({ type: "get_artists", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const { Provider, Context } = createDataContext(
  artistReducer,
  {
    getArtists
  },
  []
);
