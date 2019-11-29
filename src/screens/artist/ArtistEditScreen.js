import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as ArtistContext } from "../../context/ArtistContext";
import ArtistForm from "../../components/artist/ArtistForm";

const ArtistEditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editArtist } = useContext(ArtistContext);

  const artist = state.find(artist => artist.id === id);

  return (
    <ArtistForm
      initialValues={{
        firstName: artist.firstName,
        lastName: artist.lastName,
        biography: artist.biography,
        additionalInfo: artist.additionalInfo,
        artistImage: artist.artistImage
      }}
      onSubmit={(
        firstName,
        lastName,
        biography,
        additionalInfo,
        artistImage
      ) => {
        editArtist(
          id,
          firstName,
          lastName,
          biography,
          additionalInfo,
          artistImage,
          () => navigation.pop()
        );
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default ArtistEditScreen;
