const variables = {
  development: {
    BASE_URL: "http://localhost:3000/api"
  },
  production: {
    BASE_URL: "https://spire-art-services.herokuapp.com/api"
  }
};

const getEnvVariables = () => {
  if (__DEV__) {
    return variables.development; // return this if in development mode
  }
  return variables.production; // otherwise, return this
};

export default getEnvVariables;
