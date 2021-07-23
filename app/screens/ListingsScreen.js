import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ListItem from "../components/ListItem"
import Card from "../components/Card"





const listings = [
    {
        id: 1, 
        title: 'Red jacket for sale', 
        price: 100, 
        image: require("../assets/chair.jpg")
        
    }, 
        {
        id: 2, 
        title: 'Couch in perfect condition', 
        price: 1000, 
        image: require("../assets/chair.jpg")
        
    }
]
 function ListingsScreen() {
  return (
    <View>
      <FlatList 
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({item})=>  <Card title={item.title} subTitle={"$" + item.price} image={item.image}/> }

      />
     </View>
  );
}

export default ListingsScreen