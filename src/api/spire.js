import axios from "axios";

export default axios.create({
  // baseURL: "https://spire-art-services.herokuapp.com/api"
  baseURL: "http://localhost:3000/api"
});
