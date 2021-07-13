import React from 'react';
import {StyleSheet, Image, View} from "react-native"
function ViewImageScreen(props) {
    return (
        <View style={styles.imageContainer}> 
        <View style={styles.closeIcon}> 
        
        </View>
        <View style={styles.deleteIcon}> 
        
        </View>
         <Image resizeMode="contain" style={styles.image} source={require("../assets/chair.jpg")}>
    
        </Image>
        </View>

            
    );
}
const styles = StyleSheet.create({
    image: {
        width: "100%", 
        height: "100%"
    }, 
    imageContainer: {
        flex: 1, 
        backgroundColor: "black"
    }, 
    closeIcon: {
        backgroundColor: "red", 
        width: 50, 
        height: 50,
        position: "absolute", 
        top: 40, 
        left: 20
    },
     deleteIcon: {
        backgroundColor: "blue", 
        width: 50, 
        height: 50,
        position: "absolute", 
        top: 40, 
        right: 20
    }
})

export default ViewImageScreen;