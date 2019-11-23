import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import SignInScreen from "./src/screens/SignInScreen";
import CustomerListScreen from "./src/screens/customer/CustomerListScreen";
import CollectionListScreen from "./src/screens/collection/CollectionListScreen";
import ArtistListScreen from "./src/screens/artist/ArtistListScreen";
import ArtListScreen from "./src/screens/art/ArtListScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  SignIn: SignInScreen,
  mainFlow: createBottomTabNavigator({
    CustomerList: CustomerListScreen,
    CollectionsList: CollectionListScreen,
    ArtList: ArtListScreen,
    ArtistList: ArtistListScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App
        ref={navigator => {
          setNavigator(navigator);
        }}
      />
    </AuthProvider>
  );
};
