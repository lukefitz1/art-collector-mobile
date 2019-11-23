import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import SignInScreen from "./src/screens/SignInScreen";
import CustomerListScreen from "./src/screens/customer/CustomerListScreen";
import CustomerDetailScreen from "./src/screens/customer/CustomerDetailScreen";
import CollectionListScreen from "./src/screens/collection/CollectionListScreen";
import CollectionDetailScreen from "./src/screens/collection/CollectionDetailScreen";
import ArtistListScreen from "./src/screens/artist/ArtistListScreen";
import ArtistDetailScreen from "./src/screens/artist/ArtistDetailScreen";
import ArtListScreen from "./src/screens/art/ArtListScreen";
import ArtDetailScreen from "./src/screens/art/ArtDetailScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import { Provider as CustomerProvider } from "./src/context/CustomerContext";

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  SignIn: SignInScreen,
  mainFlow: createBottomTabNavigator({
    customerFlow: createStackNavigator({
      CustomerList: CustomerListScreen,
      CustomerDetail: CustomerDetailScreen
    }),
    collectionFlow: createStackNavigator({
      CollectionList: CollectionListScreen,
      CollectionDetail: CollectionDetailScreen
    }),
    artFlow: createStackNavigator({
      ArtListScreen,
      ArtDetailScreen
    }),
    artistFlow: createStackNavigator({
      ArtistListScreen,
      ArtistDetailScreen
    })
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <CustomerProvider>
      <AuthProvider>
        <App
          ref={navigator => {
            setNavigator(navigator);
          }}
        />
      </AuthProvider>
    </CustomerProvider>
  );
};
