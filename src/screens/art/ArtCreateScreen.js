import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  ScrollView
} from "react-native";
import { Context as ArtContext } from "../../context/ArtContext";

const ArtCreateScreen = ({ navigation }) => {
  const [objectId, setObjectId] = useState("");
  const [artType, setArtType] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [medium, setMedium] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [frameDimensions, setFrameDimensions] = useState("");
  const [condition, setCondition] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [source, setSource] = useState("");
  const [dateAcquired, setDateAcquired] = useState("");
  const [amountPaid, setAmountPaid] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const [notes, setNotes] = useState("");
  const [notesImage, setNotesImage] = useState("");
  const [additionalInfoLabel, setAdditionalInfoLabel] = useState("");
  const [additionalInfoText, setAdditionalInfoText] = useState("");
  const [additionalInfoImage, setAdditionalInfoImage] = useState("");
  const [additionalPdf, setAdditionalPdf] = useState("");
  const [reviewedBy, setReviewedBy] = useState("");
  const [reviewedDate, setReviewedDate] = useState("");
  const [provenance, setProvenance] = useState("");
  const [artist, setArtist] = useState("");
  const [customer, setCustomer] = useState("");
  const [collection, setCollection] = useState("");
  const [dateAcquiredLabel, setDateAcquiredLabel] = useState("");
  const [notesImageTwo, setNotesImageTwo] = useState("");
  const [additionalInfoImageTwo, setAdditionalInfoImageTwo] = useState("");
  const [generalInformation, setGeneralInformation] = useState("");
  const [showGeneralInfo, setShowGeneralInfo] = useState("");
  const [customTitle, setCustomTitle] = useState("");
  const { addArtwork } = useContext(ArtContext);

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
        <TextInput
          style={styles.input}
          value={image}
          onChangeText={text => setImage(text)}
        />
        <Text style={styles.label}>Description:</Text>
        <TextInput
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
          style={styles.input}
          value={notes}
          onChangeText={text => setNotes(text)}
        />
        <Text style={styles.label}>Notes Image:</Text>
        <TextInput
          style={styles.input}
          value={notesImage}
          onChangeText={text => setNotesImage(text)}
        />
        <Text style={styles.label}>Additional Info Label:</Text>
        <TextInput
          style={styles.input}
          value={additionalInfoLabel}
          onChangeText={text => setAdditionalInfoLabel(text)}
        />
        <Text style={styles.label}>Additional Info Text:</Text>
        <TextInput
          style={styles.input}
          value={additionalInfoText}
          onChangeText={text => setAdditionalInfoText(text)}
        />
        <Text style={styles.label}>Additional Info Image:</Text>
        <TextInput
          style={styles.input}
          value={additionalInfoImage}
          onChangeText={text => setAdditionalInfoImage(text)}
        />
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
        <TextInput
          style={styles.input}
          value={notesImageTwo}
          onChangeText={text => setNotesImageTwo(text)}
        />
        <Text style={styles.label}>Additional Info Image Two:</Text>
        <TextInput
          style={styles.input}
          value={additionalInfoImageTwo}
          onChangeText={text => setAdditionalInfoImageTwo(text)}
        />
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
          title="Add New Piece of Art"
          onPress={() =>
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
              () => {
                navigation.navigate("ArtList");
              }
            )
          }
        />
      </ScrollView>
    </View>
  );
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

export default ArtCreateScreen;
