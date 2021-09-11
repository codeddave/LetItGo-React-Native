import React, { useEffect, useState } from "react";
import { View, Text, FlatList, SafeAreaView, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
import Card from "../components/Card";
import colors from "../config/colors";
import { getListings } from "../api/listings";
import AppButton from "../components/AppButton";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/chair.jpg"),
  },
  {
    id: 2,
    title: "Couch in perfect condition",
    price: 1000,
    image: require("../assets/chair.jpg"),
  },
  /* {
     id: 3, 
     title: 'Couch in perfect condition', 
     price: 1000, 
     image: require("../assets/chair.jpg")
     
 }, 
    {
     id: 4, 
     title: 'Couch in perfect condition', 
     price: 1000, 
     image: require("../assets/chair.jpg")
     
 } */
];
function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);

  const loadListings = async () => {
    /*  await getListings().then((response) => {
      if (!response.ok) {
        console.log("something went wrong");
      }

      setListings(response);
      console.log(response);
    }); */
    const response = await getListings();
    if (!response.ok) {
      setError(true);
      return;
    }
    setError(false);
    setListings(response.data);
    console.log(listings);
  };
  useEffect(() => {
    loadListings();
  }, []);
  return (
    <View style={styles.screen}>
      {error ? (
        <>
          <Text>Couldn't load listings, Please try again.</Text>
          <AppButton title="Retry" onPress={getListings} />
        </>
      ) : (
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              image={item.image}
              onPress={() => navigation.navigate("ListingsDetails")}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 15,
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
});

export default ListingsScreen;
