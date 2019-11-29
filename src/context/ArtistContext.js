import createDataContext from "./createDataContext";
import spireApi from "../api/spire";

const artistReducer = (state, action) => {
  switch (action.type) {
    case "get_artists":
      return action.payload;
    case "edit_artist":
      return state.map(artist => {
        return artist.id === action.payload.id ? action.payload : artist;
      });
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

const addArtist = () => {
  return async (
    firstName,
    lastName,
    biography,
    additionalInfo,
    artistImage,
    callback
  ) => {
    try {
      await spireApi.post("/artist", {
        firstName,
        lastName,
        biography,
        additionalInfo,
        artist_image: artistImage
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

const editArtist = dispatch => {
  return async (
    id,
    firstName,
    lastName,
    biography,
    additionalInfo,
    artistImage,
    callback
  ) => {
    try {
      await spireApi.put(`/artist/${id}`, {
        firstName,
        lastName,
        biography,
        additionalInfo,
        artist_image: artistImage
      });

      dispatch({
        type: "edit_artist",
        payload: {
          id: id,
          firstName,
          lastName,
          biography,
          additionalInfo,
          artist_image: artistImage
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
  artistReducer,
  {
    getArtists,
    addArtist,
    editArtist
  },
  []
);
