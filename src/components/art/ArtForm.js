import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Button
} from "react-native";
import ImageSelector from "../ImageSelector";

const ArtForm = ({ onSubmit, initialValues }) => {
  const [objectId, setObjectId] = useState(initialValues.objectId);
  const [artType, setArtType] = useState(initialValues.artType);
  const [title, setTitle] = useState(initialValues.title);
  const [date, setDate] = useState(initialValues.date);
  const [medium, setMedium] = useState(initialValues.medium);
  const [imageBase64, setImageBase64] = useState("");

  const [description, setDescription] = useState(initialValues.description);
  const [dimensions, setDimensions] = useState(initialValues.dimensions);
  const [frameDimensions, setFrameDimensions] = useState(
    initialValues.frameDimensions
  );
  const [condition, setCondition] = useState(initialValues.condition);
  const [currentLocation, setCurrentLocation] = useState(
    initialValues.currentLocation
  );
  const [source, setSource] = useState(initialValues.source);
  const [dateAcquired, setDateAcquired] = useState(initialValues.dateAcquired);
  const [amountPaid, setAmountPaid] = useState(initialValues.amountPaid);
  const [currentValue, setCurrentValue] = useState(initialValues.currentValue);
  const [notes, setNotes] = useState(initialValues.notes);
  const [additionalInfoLabel, setAdditionalInfoLabel] = useState(
    initialValues.additionalInfoLabel
  );
  const [additionalInfoText, setAdditionalInfoText] = useState(
    initialValues.additionalInfoText
  );
  const [additionalPdf, setAdditionalPdf] = useState("");
  const [reviewedBy, setReviewedBy] = useState(initialValues.reviewedBy);
  const [reviewedDate, setReviewedDate] = useState(initialValues.reviewedDate);
  const [provenance, setProvenance] = useState(initialValues.provenance);
  const [artist, setArtist] = useState(initialValues.artist);
  const [customer, setCustomer] = useState(initialValues.customer);
  const [collection, setCollection] = useState(initialValues.collection);
  const [dateAcquiredLabel, setDateAcquiredLabel] = useState(
    initialValues.dateAcquiredLabel
  );
  const [generalInformation, setGeneralInformation] = useState(
    initialValues.general_information_id
  );
  const [showGeneralInfo, setShowGeneralInfo] = useState(
    initialValues.show_general_info
  );
  const [customTitle, setCustomTitle] = useState(initialValues.custom_title);

  const [notesImage, setNotesImage] = useState("");
  const [additionalInfoImage, setAdditionalInfoImage] = useState("");
  const [notesImageTwo, setNotesImageTwo] = useState("");
  const [additionalInfoImageTwo, setAdditionalInfoImageTwo] = useState("");

  const imageTakenHandler = imageBase64 => {
    setImageBase64(imageBase64);
  };

  const notesImageOneTakenHandler = imageBase64 => {
    setNotesImage(imageBase64);
  };

  const notesImageTwoTakenHandler = imageBase64 => {
    setNotesImageTwo(imageBase64);
  };

  const additionalInfoImageOneTakenHandler = imageBase64 => {
    setAdditionalInfoImage(imageBase64);
  };

  const additionalInfoImageTwoTakenHandler = imageBase64 => {
    setAdditionalInfoImageTwo(imageBase64);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Object ID:</Text>
        <TextInput
          style={styles.input}
          value={objectId}
          onChangeText={text => setObjectId(text)}
        />
        <Text style={styles.label}>Art Type:</Text>
        <TextInput
          style={styles.input}
          value={artType}
          onChangeText={text => setArtType(text)}
        />
        <Text style={styles.label}>Title:</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <Text style={styles.label}>Date:</Text>
        <TextInput
          style={styles.input}
          value={date}
          onChangeText={text => setDate(text)}
        />
        <Text style={styles.label}>Medium:</Text>
        <TextInput
          style={styles.input}
          value={medium}
          onChangeText={text => setMedium(text)}
        />
        <Text style={styles.label}>Image:</Text>
        {/* <TextInput
          style={styles.input}
          value={image}
          onChangeText={text => setImage(text)}
        /> */}
        <ImageSelector onImageTaken={imageTakenHandler} />
        <Text style={styles.label}>Description:</Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          style={styles.input}
          value={description}
          onChangeText={text => setDescription(text)}
        />
        <Text style={styles.label}>Dimensions:</Text>
        <TextInput
          style={styles.input}
          value={dimensions}
          onChangeText={text => setDimensions(text)}
        />
        <Text style={styles.label}>Frame Dimensions:</Text>
        <TextInput
          style={styles.input}
          value={frameDimensions}
          onChangeText={text => setFrameDimensions(text)}
        />
        <Text style={styles.label}>Condition:</Text>
        <TextInput
          style={styles.input}
          value={condition}
          onChangeText={text => setCondition(text)}
        />
        <Text style={styles.label}>Current Location:</Text>
        <TextInput
          style={styles.input}
          value={currentLocation}
          onChangeText={text => setCurrentLocation(text)}
        />
        <Text style={styles.label}>Source:</Text>
        <TextInput
          style={styles.input}
          value={source}
          onChangeText={text => setSource(text)}
        />
        <Text style={styles.label}>Date Acquired:</Text>
        <TextInput
          style={styles.input}
          value={dateAcquired}
          onChangeText={text => setDateAcquired(text)}
        />
        <Text style={styles.label}>Amount Paid:</Text>
        <TextInput
          style={styles.input}
          value={amountPaid}
          onChangeText={text => setAmountPaid(text)}
        />
        <Text style={styles.label}>Current Value:</Text>
        <TextInput
          style={styles.input}
          value={currentValue}
          onChangeText={text => setCurrentValue(text)}
        />
        <Text style={styles.label}>Notes:</Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          style={styles.input}
          value={notes}
          onChangeText={text => setNotes(text)}
        />
        <Text style={styles.label}>Notes Image:</Text>
        {/* <TextInput
          style={styles.input}
          value={notesImage}
          onChangeText={text => setNotesImage(text)}
        /> */}
        <ImageSelector onImageTaken={notesImageOneTakenHandler} />
        <Text style={styles.label}>Additional Info Label:</Text>
        <TextInput
          style={styles.input}
          value={additionalInfoLabel}
          onChangeText={text => setAdditionalInfoLabel(text)}
        />
        <Text style={styles.label}>Additional Info Text:</Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          style={styles.input}
          value={additionalInfoText}
          onChangeText={text => setAdditionalInfoText(text)}
        />
        <Text style={styles.label}>Additional Info Image:</Text>
        {/* <TextInput
          style={styles.input}
          value={additionalInfoImage}
          onChangeText={text => setAdditionalInfoImage(text)}
        /> */}
        <ImageSelector onImageTaken={additionalInfoImageOneTakenHandler} />
        <Text style={styles.label}>Additional PDF:</Text>
        <TextInput
          style={styles.input}
          value={additionalPdf}
          onChangeText={text => setAdditionalPdf(text)}
        />
        <Text style={styles.label}>Reviewed By:</Text>
        <TextInput
          style={styles.input}
          value={reviewedBy}
          onChangeText={text => setReviewedBy(text)}
        />
        <Text style={styles.label}>Reviewed Date:</Text>
        <TextInput
          style={styles.input}
          value={reviewedDate}
          onChangeText={text => setReviewedDate(text)}
        />
        <Text style={styles.label}>Provenance:</Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          style={styles.input}
          value={provenance}
          onChangeText={text => setProvenance(text)}
        />
        <Text style={styles.label}>Artist:</Text>
        <TextInput
          style={styles.input}
          value={artist}
          onChangeText={text => setArtist(text)}
        />
        <Text style={styles.label}>Collection:</Text>
        <TextInput
          style={styles.input}
          value={collection}
          onChangeText={text => setCollection(text)}
        />
        <Text style={styles.label}>Customer:</Text>
        <TextInput
          style={styles.input}
          value={customer}
          onChangeText={text => setCustomer(text)}
        />
        <Text style={styles.label}>Date Acquired Label:</Text>
        <TextInput
          style={styles.input}
          value={dateAcquiredLabel}
          onChangeText={text => setDateAcquiredLabel(text)}
        />
        <Text style={styles.label}>Notes Image Two:</Text>
        {/* <TextInput
          style={styles.input}
          value={notesImageTwo}
          onChangeText={text => setNotesImageTwo(text)}
        /> */}
        <ImageSelector onImageTaken={notesImageTwoTakenHandler} />
        <Text style={styles.label}>Additional Info Image Two:</Text>
        {/* <TextInput
          style={styles.input}
          value={additionalInfoImageTwo}
          onChangeText={text => setAdditionalInfoImageTwo(text)}
        /> */}
        <ImageSelector onImageTaken={additionalInfoImageTwoTakenHandler} />
        <Text style={styles.label}>General Information:</Text>
        <TextInput
          style={styles.input}
          value={generalInformation}
          onChangeText={text => setGeneralInformation(text)}
        />
        <Text style={styles.label}>Show General Info:</Text>
        <TextInput
          style={styles.input}
          value={showGeneralInfo}
          onChangeText={text => setShowGeneralInfo(text)}
        />
        <Text style={styles.label}>Custom Title:</Text>
        <TextInput
          style={styles.input}
          value={customTitle}
          onChangeText={text => setCustomTitle(text)}
        />
        <Button
          title="Save Artwork"
          onPress={() =>
            onSubmit(
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
              customTitle
            )
          }
        />
      </ScrollView>
    </View>
  );
};

ArtForm.defaultProps = {
  initialValues: {
    objectId: "",
    artType: "",
    title: "",
    date: "",
    medium: "",
    image: "",
    description: "",
    dimensions: "",
    frameDimensions: "",
    condition: "",
    currentLocation: "",
    source: "",
    dateAcquired: "",
    amountPaid: "",
    currentValue: "",
    notes: "",
    notesImage: "",
    additionalInfoLabel: "",
    additionalInfoText: "",
    additionalInfoImage: "",
    additionalPdf: "",
    reviewedBy: "",
    reviewedDate: "",
    provenance: "",
    artist: "",
    customer: "",
    collection: "",
    dateAcquiredLabel: "",
    notesImageTwo: "",
    additionalInfoImageTwo: "",
    generalInformation: "",
    showGeneralInfo: "",
    customTitle: ""
  }
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }
});

export default ArtForm;
