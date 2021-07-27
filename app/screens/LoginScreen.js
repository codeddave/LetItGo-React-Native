import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import AppTextInput from "../components/AppTextInput"
import AppFormField from "../components/AppFormField"

import AppButton from "../components/AppButton"
import AppText from "../components/AppText";
import ErrorMessage from "../components/ErrorMessage";
import {Formik} from 'formik'
import * as Yup from 'yup'
import colors from "../config/colors";



const loginValidationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().label("Password")
})
const LoginScreen = () => {

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require("../assets/let-it-go.jpg")}/>
            <Text style={styles.text}>Let It Go!</Text>
            <Formik
               initialValues = {{email: "", password: ""}}
               onSubmit={(values, /* {resetForm} */) => {
                   /* resetForm() */
                   console.log(values)
                   
                   }}
               validationSchema={loginValidationSchema}
            > 
                {({handleChange, handleSubmit, errors, setFieldTouched, touched})=> (
            
            <>
                <AppFormField name="email" autoCapitalize="none" autoCorrect={false} icon="email" placeholder="Email" keyboardType="email-address" textContentType="emailAddress" />
                <AppFormField name="password"  autoCapitalize="none" autoCorrect={false} icon="lock" placeholder="Password" secureTextEntry textContentType="password" />
                <AppButton title="Log In" onPress={handleSubmit} color="black"/>
            </>
                )}
            </Formik>
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
