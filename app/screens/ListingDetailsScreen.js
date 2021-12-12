import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { sendPushNotification } from "../api/expoPushNotificationToken";
import ContactForm from "../components/ContactForm";
import ListItem from "../components/ListItem";
function ListingDetailsScreen({ route }) {
  const listing = route.params;
  useEffect(() => {
    sendPushNotification("hey there otu!", listing.creator);
    console.log(listing.creator);
  }, []);
  return (
    <>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
      >
        <Image
          style={styles.image}
          source={{ uri: `data:image/jpeg;base64, ${listing.images[0]}` }}
          resizeMode="cover"
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
        <ContactForm />
      </KeyboardAvoidingView>
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
