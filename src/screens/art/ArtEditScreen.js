import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as ArtContext } from "../../context/ArtContext";
import ArtForm from "../../components/art/ArtForm";

const ArtEditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editArtwork } = useContext(ArtContext);

  const art = state.find(art => art.id === id);

  return (
    <ArtForm
      initialValues={{
        objectId: art.ojbId,
        artType: art.artType,
        title: art.title,
        date: art.date,
        medium: art.medium,
        image: art.image,
        description: art.description,
        dimensions: art.dimensions,
        frameDimensions: art.frame_dimensions,
        condition: art.condition,
        currentLocation: art.currentLocation,
        source: art.source,
        dateAcquired: art.dateAcquired,
        amountPaid: art.amountPaid,
        currentValue: art.currentValue,
        notes: art.notes,
        notesImage: art.notesImage,
        additionalInfoLabel: art.additionalInfoLabel,
        additionalInfoText: art.additionalInfoText,
        additionalInfoImage: art.additionalInfoImage,
        additionalPdf: art.additionalPdf,
        reviewedBy: art.reviewedBy,
        reviewedDate: art.reviewedDate,
        provenance: art.provenance,
        artist: art.artist_id,
        collection: art.collection_id,
        customer: art.customer_id,
        dateAcquiredLabel: art.dateAcquiredLabel,
        notesImageTwo: art.notesImageTwo,
        additionalInfoImageTwo: art.additionalInfoImageTwo,
        generalInformation: art.general_information_id,
        showGeneralInfo: art.show_general_info,
        customTitle: art.custom_title
      }}
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
        editArtwork(
          id,
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
          () => navigation.pop()
        );
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default ArtEditScreen;
