import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as ArtistContext } from "../../context/ArtistContext";
import ArtistForm from "../../components/artist/ArtistForm";

const ArtistCreateScreen = ({ navigation }) => {
  const { addArtist } = useContext(ArtistContext);

  return (
    <ArtistForm
      onSubmit={(
        firstName,
        lastName,
        biography,
        additionalInfo,
        artistImage
      ) => {
        addArtist(
          firstName,
          lastName,
          biography,
          additionalInfo,
          artistImage,
          () => navigation.navigate("ArtistList")
        );
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default ArtistCreateScreen;
