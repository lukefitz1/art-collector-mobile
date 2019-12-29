import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  FlatList
} from "react-native";
import { Context as CustomerContext } from "../../context/CustomerContext";
import { EvilIcons } from "@expo/vector-icons";
import {
  Collapse,
  CollapseHeader,
  CollapseBody
} from "accordion-collapse-react-native";
import { NavigationEvents } from "react-navigation";

const CustomerDetailScreen = ({ navigation }) => {
  const { state, getCustomers } = useContext(CustomerContext);
  const id = navigation.getParam("id");

  const customer = state.find(cust => cust.id === id);

  return (
    <>
      <NavigationEvents onWillFocus={() => getCustomers()} />
      <View style={styles.row}>
        <Text style={styles.label}>Name: </Text>
        <Text>{`${customer.firstName} ${customer.lastName}`}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Email Address: </Text>
        <Text>{customer.email_address}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Phone Number: </Text>
        <Text>{customer.phone_number}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Address: </Text>
        <Text>{customer.street_address}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>City: </Text>
        <Text>{customer.city}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>State: </Text>
        <Text>{customer.state}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Zip Code: </Text>
        <Text>{customer.zip}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Referred By: </Text>
        <Text>{customer.referred_by}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Project Notes: </Text>
        <Text>{customer.projectNotes}</Text>
      </View>
      {/* <Button
        title="Create Collection"
        onPress={() => navigation.navigate("CollectionCreate")}
      /> */}
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("CollectionCreate")}
        >
          <View style={styles.addCollectionTextContainer}>
            <Text style={styles.addCollectionText}>Create Collection</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.collectionsContainer}>
        <FlatList
          data={customer.collections}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.collectionNameContainer}>
                <Collapse>
                  <CollapseHeader>
                    <View style={styles.collectionHeading}>
                      <View>
                        <Text style={styles.collectionNameText}>
                          {item.collectionName}
                        </Text>
                      </View>
                      {/* <View style={styles.editIcon}>
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate("CustomerEdit", {
                              id: navigation.getParam("id")
                            })
                          }
                        >
                          <EvilIcons name="pencil" size={20} />
                        </TouchableOpacity>
                      </View> */}
                    </View>
                  </CollapseHeader>
                  <CollapseBody>
                    {/* <Text>Collection ID: {item.id}</Text> */}
                    {/* <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("CollectionEdit", {
                          id: item.id
                        })
                      }
                    >
                      <Text>Edit Collection</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("ArtCreate", {
                          collection: item.id,
                          customer: customer.id
                        })
                      }
                    >
                      <View style={styles.addArtTextContainer}>
                        <Text style={styles.addArtText}>Add Artwork</Text>
                      </View>
                    </TouchableOpacity>
                    <FlatList
                      data={item.artworks}
                      keyExtractor={item => item.id}
                      renderItem={({ item }) => {
                        return (
                          <View style={styles.artworkNameContainer}>
                            <Text>
                              {item.ojbId} - {item.title}
                            </Text>
                          </View>
                        );
                      }}
                    />
                  </CollapseBody>
                </Collapse>
              </View>
            );
          }}
        />
      </View>
    </>
  );
};

CustomerDetailScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("CustomerEdit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 5
  },
  label: { fontWeight: "bold" },
  addCollectionTextContainer: {
    borderColor: "#006E8A",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10
  },
  addCollectionText: {
    fontSize: 20,
    color: "#006E8A",
    alignSelf: "center",
    padding: 5
  },
  collectionsContainer: {
    marginTop: 10
  },
  collectionNameContainer: {
    borderBottomColor: "#006E8A",
    borderBottomWidth: 1,
    minHeight: 50,
    flex: 1,
    justifyContent: "center",
    padding: 3,
    marginLeft: 2,
    marginRight: 2
  },
  collectionHeading: {
    flex: 1,
    flexDirection: "row"
  },
  collectionNameText: {
    fontSize: 18
  },
  editIcon: {},
  artworkNameContainer: {
    marginLeft: 8,
    marginRight: 8,
    borderTopColor: "#006E8A",
    borderTopWidth: 1,
    minHeight: 45,
    paddingTop: 5,
    flex: 1,
    justifyContent: "center"
  },
  addArtTextContainer: {
    flex: 1,
    borderColor: "#006E8A",
    borderWidth: 1,
    borderRadius: 5,
    margin: 20
  },
  addArtText: {
    fontSize: 20,
    color: "#006E8A",
    alignSelf: "center",
    padding: 5
  }
});

export default CustomerDetailScreen;
