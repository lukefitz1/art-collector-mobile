import axios from "axios";
import { AsyncStorage } from "react-native";

const instance = axios.create({
  // baseURL: "https://spire-art-services.herokuapp.com/api"
  baseURL: "http://localhost:3000/api"
});

instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default instance;
