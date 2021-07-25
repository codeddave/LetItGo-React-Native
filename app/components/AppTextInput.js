import React from 'react';
import { View, Text, TextInput, StyleSheet, Platform, SafeAreaView } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import colors from "../config/colors";
import defaultStyles from "../config/styles"

 function AppTextInput({icon, ...otherProps }) {
  return (
    <SafeAreaView>
    <View style={styles.container}>
    {icon ? <MaterialCommunityIcons name={icon} size={20} color={colors.mediumGrey} style={styles.icon}/>: null }
     
      <TextInput style={styles.textInput} {...otherProps}/>
     </View>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGrey, 
        borderRadius: 25, 
        flexDirection: "row",
        width: "100%",
        padding: 15, 
        marginVertical: 10
    }, 
    icon: {
      marginRight: 10,
    },
    textInput: {
        ...defaultStyles.text,
        width: "100%"

    }
})

export default AppTextInput