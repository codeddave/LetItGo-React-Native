import React from 'react'
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import colors from "../config/colors";


function ListItem({image, IconComponent, title, subTitle, onPress, renderRightActions}) {
    return (

   <Swipeable renderRightActions={renderRightActions}>     
        <TouchableHighlight
            underlayColor= {colors.lightGrey}
            onPress ={onPress}>
            <View style={styles.listItemContainer}>
                {IconComponent}
                {image ? <Image style={styles.image} source={image}/> : null} 
                <View> 
                    <Text>{title}</Text>
                    <Text>{subTitle}</Text>     
                </View>
            </View>
        </TouchableHighlight>
    </Swipeable>
    )
}
const styles = StyleSheet.create({
    image:{ 
        height: 70,
        width: 70,
        borderRadius: 50
    }, 

    listItemContainer: {
        flexDirection: "row",
        padding: 15,
        alignItems: "center"
    }
})
export default ListItem