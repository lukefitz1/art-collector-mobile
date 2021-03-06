import createDataContext from "./createDataContext";
import spireApi from "../api/spire";

const generalInformationReducer = (state, action) => {
  switch (action.type) {
    case "get_general_information":
      return action.payload;
    case "delete_general_information":
      return state.filter(gi => gi.id !== action.payload);
    case "edit_general_information":
      return state.map(gi => {
        return gi.id === action.payload.id ? action.payload : gi;
      });
    default:
      return state;
  }
};

const getGeneralInformation = dispatch => {
  return async () => {
    try {
      const response = await spireApi.get("/general_informations");

      dispatch({ type: "get_general_information", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
};

const addGeneralInformation = () => {
  return async (infoLabel, info, callback) => {
    try {
      await spireApi.post("/general_informations", {
        information_label: infoLabel,
        information: info
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

const editGeneralInformation = dispatch => {
  return async (id, infoLabel, info, callback) => {
    try {
      await spireApi.put(`/general_informations/${id}`, {
        information_label: infoLabel,
        information: info
      });

      dispatch({
        type: "edit_general_information",
        payload: {
          id: id,
          information_label: infoLabel,
          information: info
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

const deleteGeneralInformation = dispatch => {
  return async (id, callback) => {
    try {
      await spireApi.delete(`/general_informations/${id}`);

      dispatch({ type: "delete_general_information", payload: id });

      if (callback) {
        callback();
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const { Provider, Context } = createDataContext(
  generalInformationReducer,
  {
    getGeneralInformation,
    addGeneralInformation,
    editGeneralInformation,
    deleteGeneralInformation
  },
  []
);
