import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AppText from "./AppText"


const ErrorMessage = ({error}) => {
    if(!error) return null
    return (
            <AppText style={styles.error}>{error}</AppText>
    )
}

const styles = StyleSheet.create({
    error: {
        color: "red", 
        padding: 5,
    }
})
export default ErrorMessage
