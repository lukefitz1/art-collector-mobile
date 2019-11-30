import axios from "axios";
import { AsyncStorage } from "react-native";
import Config from "../../config/config";

const instance = axios.create({
  baseURL: Config.BASE_URL
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
