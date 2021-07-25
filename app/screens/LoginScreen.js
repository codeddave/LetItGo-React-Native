import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const LoginScreen = () => {
    return (
        <View>
            <Image style={styles.logo} source={require("../assets/let-it-go.jpg")}/>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 180, 
        height: 180, 
        alignSelf: "center", 
        marginTop: 60, 
        marginBottom: 20
    }
})
export default LoginScreen
