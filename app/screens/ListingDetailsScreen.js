import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ListItem from "../components/ListItem";
function ListingDetailsScreen({ route }) {
  const listing = route.params;
  console.log(listing.image);
  return (
    <>
      <View>
        <Image
          style={styles.image}
          source={{ uri: listing.image }}
          resizeMode="contain"
        />

        <View style={styles.container}>
          <Text>{listing.title}</Text>
          <Text>${listing.price}</Text>
        </View>
        <View style={styles.listItemContainer}>
          <ListItem
            title="David Adeleye"
            subTitle="My Listing"
            image={require("../assets/chair.jpg")}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    width: "100%",
    height: 300,
  },
  listItemContainer: {
    marginTop: 20,
  },
});
export default ListingDetailsScreen;
