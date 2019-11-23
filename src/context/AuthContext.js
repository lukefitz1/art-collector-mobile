import CreateDataContext from "../context/createDataContext";
import spireApi from "../api/spire";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signin = dispatch => {
  return async ({ username, password }) => {
    try {
      const response = await spireApi.post("/sign-in", { username, password });
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
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
  { signin, signout },
  { isSignedIn: false }
);
