import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import AppText from "./AppText"

const PickerItem = ({label, onPress}) => {
    return (
      <TouchableOpacity onPress={onPress}> 
            <AppText style ={styles.text}>{label}</AppText>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  text: {
    padding: 15
  }
})

export default PickerItem
 