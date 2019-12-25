import React, { useState } from "react";
import { View, Button, Image, Text, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

const ImageSelector = props => {
  const [image, setImage] = useState();

  // function to get permission to use camera
  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL
    );
    if (result.status !== "granted") {
      Alert.alert(
        "Insufficient permissions!",
        "You need to grant camera permissions to use this app."[
          { text: "Okay" }
        ]
      );
      return false;
    }
    return true;
  };

  // function to open camera
  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }

    const image = await ImagePicker.launchCameraAsync({
      base64: true,
      quality: 0.5
    });

    setImage(image.uri);
    console.log(image.uri);
    props.onImageTaken(image.base64);
  };

  return (
    <View>
      <View>
        {!image ? (
          <Text>No image</Text>
        ) : (
          <Image style={styles.image} source={{ uri: image }}></Image>
        )}
        <Button title="Take Image" onPress={takeImageHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50
  }
});

export default ImageSelector;
