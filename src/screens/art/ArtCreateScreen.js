import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as ArtContext } from "../../context/ArtContext";
import ArtForm from "../../components/art/ArtForm";

const ArtCreateScreen = ({ navigation }) => {
  const { addArtwork } = useContext(ArtContext);

  return (
    <ArtForm
      onSubmit={(
        objectId,
        artType,
        title,
        date,
        medium,
        image,
        description,
        dimensions,
        frameDimensions,
        condition,
        currentLocation,
        source,
        dateAcquired,
        amountPaid,
        currentValue,
        notes,
        notesImage,
        additionalInfoLabel,
        additionalInfoText,
        additionalInfoImage,
        additionalPdf,
        reviewedBy,
        reviewedDate,
        provenance,
        artist,
        collection,
        customer,
        dateAcquiredLabel,
        notesImageTwo,
        additionalInfoImageTwo,
        generalInformation,
        showGeneralInfo,
        customTitle
      ) => {
        addArtwork(
          objectId,
          artType,
          title,
          date,
          medium,
          image,
          description,
          dimensions,
          frameDimensions,
          condition,
          currentLocation,
          source,
          dateAcquired,
          amountPaid,
          currentValue,
          notes,
          notesImage,
          additionalInfoLabel,
          additionalInfoText,
          additionalInfoImage,
          additionalPdf,
          reviewedBy,
          reviewedDate,
          provenance,
          artist,
          collection,
          customer,
          dateAcquiredLabel,
          notesImageTwo,
          additionalInfoImageTwo,
          generalInformation,
          showGeneralInfo,
          customTitle,
          () => navigation.navigate("ArtList")
        );
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default ArtCreateScreen;
