import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import colors from "../config/colors";

export default function Card({title, subTitle, image}) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source ={image}/>

            <View style={styles.content}>
                <Text style={styles.title}> {title} </Text> 
                <Text style={styles.subTitle}> {subTitle} </Text>             
             </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 300,
        width: "100%", 
        borderRadius: 20, 
        backgroundColor: colors.white, 
        overflow: "hidden"

    }, 
    content: {
        padding: 10
    },
    image: {
        width: "100%",
        height: 200, 

    }, 
    subTitle: {
        fontWeight: "bold"
    }, 

    title:{
        marginBottom:6
    }
})