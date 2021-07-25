import React from 'react'
import { View, Text, StyleSheet, Image, } from 'react-native'
import ListItem from "../components/ListItem"
 function ListingDetailsScreen() {
    return (
        <>
        <View>
        <Image style={styles.image} source = {require("../assets/chair.jpg")} />

        <View style = {styles.container}> 
            <Text>Beautiful White Shirt</Text>
            <Text>$100</Text>
        </View>
        <View style={styles.listItemContainer}> 
            <ListItem title="David Adeleye" subTitle="My Listing" image={require("../assets/chair.jpg")}/>
        </View>
        </View>
        </>
    )
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
        marginTop: 20
    }

})
export default ListingDetailsScreen