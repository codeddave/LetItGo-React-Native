import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { sendPushNotification } from "../api/expoPushNotificationToken";
import ListItem from "../components/ListItem";
function ListingDetailsScreen({ route }) {
  const listing = route.params;
  useEffect(() => {
    sendPushNotification("hey there otu!", listing.creator);
    console.log(listing.creator);
  }, []);
  return (
    <>
      <View>
        <Image
          style={styles.image}
          source={{ uri: listing.images[0] }}
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
