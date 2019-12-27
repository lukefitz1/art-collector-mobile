import axios from "axios";
import { AsyncStorage } from "react-native";
import Config from "../../config/config";
import ENV from "../../env";

const url = Config.BASE_URL;
console.log(`URL for local testing: ${url}`);

// const base_url = ENV.BASE_URL;
// console.log(`URL for local testing 2: ${base_url}`);

const instance = axios.create({
  baseURL: "https://spire-art-services.herokuapp.com/api"
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

export default instance;
