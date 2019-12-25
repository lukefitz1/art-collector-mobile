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

const CustomerDetailScreen = ({ navigation }) => {
  const { state } = useContext(CustomerContext);
  const id = navigation.getParam("id");

  const customer = state.find(cust => cust.id === id);

  return (
    <View>
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
      <Button
        title="Create Collection"
        onPress={() => navigation.navigate("CollectionCreate")}
      />
      <FlatList
        data={customer.collections}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <View>
              <Collapse>
                <CollapseHeader>
                  <View>
                    <Text>{item.collectionName}</Text>
                  </View>
                </CollapseHeader>
                <CollapseBody>
                  <Text>Collection ID: {item.id}</Text>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("CollectionEdit", {
                        id: item.id
                      })
                    }
                  >
                    <Text>Edit Collection</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("ArtCreate", {
                        id: item.id
                      })
                    }
                  >
                    <Text>Add Artwork</Text>
                  </TouchableOpacity>
                  <FlatList
                    data={item.artworks}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                      return <Text>{item.ojbId}</Text>;
                    }}
                  />
                </CollapseBody>
              </Collapse>
            </View>
          );
        }}
      />
    </View>
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
  label: { fontWeight: "bold" }
});

export default CustomerDetailScreen;
