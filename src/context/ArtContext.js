import createDataContext from "./createDataContext";
import spireApi from "../api/spire";

const artReducer = (state, action) => {
  switch (action.type) {
    case "get_art":
      return action.payload;
    case "edit_art":
      return state.map(art => {
        return art.id === action.payload.id ? action.payload : art;
      });
    case "delete_artwork":
      return state.filter(art => art.id !== action.payload);
    default:
      return state;
  }
};

const getArt = dispatch => {
  return async () => {
    try {
      const response = await spireApi.get("/artwork");

      dispatch({ type: "get_art", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
};

const addArtwork = () => {
  return async (
    objectId,
    artType,
    title,
    date,
    medium,
    imageBase64,
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
    callback
  ) => {
    try {
      let mainImage;
      let nImageOne;
      let nImageTwo;
      let aImageOne;
      let aImageTwo;

      if (imageBase64 && imageBase64 != "") {
        console.log("There is a Main image");
        mainImage = `data:image/jpeg;base64,${imageBase64}`;
      } else {
        mainImage = "";
      }

      if (notesImage && notesImage != "") {
        console.log("There is a Notes 1 image");
        nImageOne = `data:image/jpeg;base64,${notesImage}`;
      } else {
        nImageOne = "";
      }

      if (notesImageTwo && notesImageTwo != "") {
        console.log("There is a Notes 2 image");
        nImageTwo = `data:image/jpeg;base64,${notesImageTwo}`;
      } else {
        nImageTwo = "";
      }

      if (additionalInfoImage && additionalInfoImage != "") {
        console.log("There is a Additional Info 1 image");
        aImageOne = `data:image/jpeg;base64,${additionalInfoImage}`;
      } else {
        aImageOne = "";
      }

      if (additionalInfoImageTwo && additionalInfoImageTwo != "") {
        console.log("There is a Additional Info 2 image");
        aImageTwo = `data:image/jpeg;base64,${additionalInfoImageTwo}`;
      } else {
        aImageTwo = "";
      }

      await spireApi.post("/artwork", {
        ojbId: objectId,
        artType,
        title,
        date,
        medium,
        image: mainImage,
        description,
        dimensions,
        frame_dimensions: frameDimensions,
        condition,
        currentLocation,
        source,
        dateAcquired,
        amountPaid,
        currentValue,
        notes,
        notesImage: nImageOne,
        additionalInfoLabel,
        additionalInfoText,
        additionalInfoImage: aImageOne,
        additionalPdf,
        reviewedBy,
        reviewedDate,
        provenance,
        artist_id: artist,
        collection_id: collection,
        customer_id: customer,
        dateAcquiredLabel,
        notesImageTwo: nImageTwo,
        additionalInfoImageTwo: aImageTwo,
        general_information_id: generalInformation,
        show_general_info: showGeneralInfo,
        custom_title: customTitle
      });

      // TODO: Instead of following dispatch, we may need to re-fetch all customers
      // so that we can navigate to the detail page of the new customer after creation
      // dispatch({ type: "add_customer", payload: response.data });

      // So, for example (from the get customers function above):
      // const response = await spireApi.get("/customer");
      // dispatch({ type: "get_customers", payload: response.data });

      if (callback) {
        callback();
      }
    } catch (err) {
      console.log(err);
    }
  };
};

const editArtwork = dispatch => {
  return async (
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
    callback
  ) => {
    try {
      await spireApi.put(`/artwork/${id}`, {
        ojbId: objectId,
        artType,
        title,
        date,
        medium,
        image,
        description,
        dimensions,
        frame_dimensions: frameDimensions,
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
        artist_id: artist,
        collection_id: collection,
        customer_id: customer,
        dateAcquiredLabel,
        notesImageTwo,
        additionalInfoImageTwo,
        general_information_id: generalInformation,
        show_general_info: showGeneralInfo,
        custom_title: customTitle
      });

      dispatch({
        type: "edit_art",
        payload: {
          id: id,
          ojbId: objectId,
          artType,
          title,
          date,
          medium,
          image,
          description,
          dimensions,
          frame_dimensions: frameDimensions,
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
          artist_id: artist,
          collection_id: collection,
          customer_id: customer,
          dateAcquiredLabel,
          notesImageTwo,
          additionalInfoImageTwo,
          general_information_id: generalInformation,
          show_general_info: showGeneralInfo,
          custom_title: customTitle
        }
      });

      if (callback) {
        callback();
      }
    } catch (err) {
      console.log(err);
    }
  };
};

const deleteArt = dispatch => {
  return async (id, callback) => {
    try {
      await spireApi.delete(`/artwork/${id}`);

      dispatch({ type: "delete_artwork", payload: id });

      if (callback) {
        callback();
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const { Provider, Context } = createDataContext(
  artReducer,
  {
    getArt,
    addArtwork,
    editArtwork,
    deleteArt
  },
  []
);
