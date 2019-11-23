import React from "react";
import { View, StyleSheet } from "react-native";
import { SplashScreen } from "expo";

const Spacer = ({ children }) => {
  return <View style={styles.spacer}>{children}</View>;
};

const styles = StyleSheet.create({
  spacer: {
    margin: 15
  }
});

export default Spacer;
