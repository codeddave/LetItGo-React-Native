import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import AppTextInput from "../components/AppTextInput"
import AppButton from "../components/AppButton"
import AppText from "../components/AppText";
import ErrorMessage from "../components/ErrorMessage";


import colors from "../config/colors";
import {Formik} from 'formik'
import * as Yup from 'yup'


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
                <AppTextInput onBlur={() =>setFieldTouched("email")} onChangeText={handleChange("email")} autoCapitalize="none" autoCorrect={false} icon="email" placeholder="Email" keyboardType="email-address" textContentType="emailAddress" />
                {touched.email ?<ErrorMessage error={errors.email}/>: null}
                <AppTextInput onBlur={()=> setFieldTouched("password")} onChangeText={handleChange("password")}  autoCapitalize="none" autoCorrect={false} icon="lock" placeholder="Password" secureTextEntry textContentType="password" />
                {touched.password ? <ErrorMessage error={errors.password}/> : null}

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
