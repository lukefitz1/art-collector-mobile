import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import SignInScreen from "./src/screens/SignInScreen";
import CustomerListScreen from "./src/screens/customer/CustomerListScreen";
import CustomerDetailScreen from "./src/screens/customer/CustomerDetailScreen";
import CustomerCreateScreen from "./src/screens/customer/CustomerCreateScreen";
import CustomerEditScreen from "./src/screens/customer/CustomerEditScreen";
import CollectionListScreen from "./src/screens/collection/CollectionListScreen";
import CollectionDetailScreen from "./src/screens/collection/CollectionDetailScreen";
import CollectionCreateScreen from "./src/screens/collection/CollectionCreateScreen";
import CollectionEditScreen from "./src/screens/collection/CollectionEditScreen";

import ArtistListScreen from "./src/screens/artist/ArtistListScreen";
import ArtistDetailScreen from "./src/screens/artist/ArtistDetailScreen";
import ArtistCreateScreen from "./src/screens/artist/ArtistCreateScreen";
import ArtistEditScreen from "./src/screens/artist/ArtistEditScreen";

import ArtListScreen from "./src/screens/art/ArtListScreen";
import ArtDetailScreen from "./src/screens/art/ArtDetailScreen";
import ArtCreateScreen from "./src/screens/art/ArtCreateScreen";
import ArtEditScreen from "./src/screens/art/ArtEditScreen";

import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import { Provider as CustomerProvider } from "./src/context/CustomerContext";
import { Provider as CollectionProvider } from "./src/context/CollectionContext";
import { Provider as ArtProvider } from "./src/context/ArtContext";
import { Provider as ArtistProvider } from "./src/context/ArtistContext";

const customerFlow = createStackNavigator({
  CustomerList: CustomerListScreen,
  CustomerDetail: CustomerDetailScreen,
  CustomerCreate: CustomerCreateScreen,
  CustomerEdit: CustomerEditScreen
});

customerFlow.navigationOptions = {
  title: "Customers"
};

const collectionFlow = createStackNavigator({
  CollectionList: CollectionListScreen,
  CollectionDetail: CollectionDetailScreen,
  CollectionCreate: CollectionCreateScreen,
  CollectionEdit: CollectionEditScreen
});

collectionFlow.navigationOptions = {
  title: "Collections"
};

const artFlow = createStackNavigator({
  ArtList: ArtListScreen,
  ArtDetail: ArtDetailScreen,
  ArtCreate: ArtCreateScreen,
  ArtEdit: ArtEditScreen
});

artFlow.navigationOptions = {
  title: "Artwork"
};

const artistFlow = createStackNavigator({
  ArtistList: ArtistListScreen,
  ArtistDetail: ArtistDetailScreen,
  ArtistCreate: ArtistCreateScreen,
  ArtistEdit: ArtistEditScreen
});

artistFlow.navigationOptions = {
  title: "Artists"
};

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  SignIn: SignInScreen,
  mainFlow: createBottomTabNavigator({
    customerFlow: customerFlow,
    collectionFlow: collectionFlow,
    artFlow: artFlow,
    artistFlow: artistFlow
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <CustomerProvider>
      <CollectionProvider>
        <ArtProvider>
          <ArtistProvider>
            <AuthProvider>
              <App
                ref={navigator => {
                  setNavigator(navigator);
                }}
              />
            </AuthProvider>
          </ArtistProvider>
        </ArtProvider>
      </CollectionProvider>
    </CustomerProvider>
  );
};
