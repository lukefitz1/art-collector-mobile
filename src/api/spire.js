import axios from "axios";
import { AsyncStorage } from "react-native";
import Config from "../../config/config";
import ENV from "../../env";
import { navigate } from "../navigationRef";

const url = Config.BASE_URL;
// console.log(`URL for local testing: ${url}`);

// const base_url = ENV.BASE_URL;
// console.log(`URL for local testing 2: ${base_url}`);

const instance = axios.create({
  baseURL: "https://spire-art-services.herokuapp.com/api/"
  // baseURL: "http://localhost:3000/api/"
});

instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // console.log(config.data);
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (error.response.status === 401) {
      await AsyncStorage.removeItem("token");
      navigate("SignIn");
    }
    return error;
  }
);

export default instance;
