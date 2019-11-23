import { AsyncStorage } from "react-native";
import CreateDataContext from "../context/createDataContext";
import spireApi from "../api/spire";
import { navigate } from "../navigationRef";

const qs = require("qs");

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "sign_in":
      return { errorMessage: "", token: action.payload };
    default:
      return state;
  }
};

const tryLocalSignin = dispatch => {
  return async () => {
    const token = await AsyncStorage.getItem("token");

    if (token) {
      console.log(`Token found! ${token}`);
      dispatch({ type: "sign_in", payload: token });
      navigate("CustomerList");
    } else {
      console.log("No token found!");
      navigate("SignIn");
    }
  };
};

const signin = dispatch => {
  return async ({ username, password }) => {
    try {
      const data = {
        "user_login[email]": username,
        "user_login[password]": password
      };

      const response = await spireApi.post("/sign-in", qs.stringify(data));
      await AsyncStorage.setItem("token", response.data.auth_token);
      dispatch({ type: "sign_in", payload: response.data.auth_token });

      navigate("CustomerList");
    } catch (err) {
      dispatch({ type: "add_error", payload: "Incorrect email or password" });
    }
  };
};

const signout = dispatch => {
  return () => {
    // somehow sign out
  };
};

export const { Provider, Context } = CreateDataContext(
  authReducer,
  { signin, signout, tryLocalSignin },
  { token: null, errorMessage: "" }
);
