import React, {useState} from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import AppTextInput from "../components/AppTextInput"
import AppButton from "../components/AppButton"
import colors from "../config/colors";


const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require("../assets/let-it-go.jpg")}/>
            <Text style={styles.text}>Let It Go!</Text>
            <AppTextInput onChangeText={text => setEmail(text)} autoCapitalize="none" autoCorrect={false} icon="email" placeholder="Email" keyboardType="email-address" textContentType="emailAddress" />
            <AppTextInput onChangeText={text => setPassword(text)}  autoCapitalize="none" autoCorrect={false} icon="lock" placeholder="Password" secureTextEntry textContentType="password" />
            <AppButton title="Log In" onPress={()=> console.log(email, password)} color="black"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }, 
    logo: {
        width: 180, 
        height: 180, 
        alignSelf: "center", 
        marginTop: 60, 
       
    }, 
    text: {
        fontSize: 17,
         marginBottom: 30, 
        alignSelf: "center",
        fontStyle: "italic" 

    }
})
export default LoginScreen
