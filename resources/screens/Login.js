import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';

import Colors from '../colors/Colors';
import Strings from '../strings/Strings';

const Login = props => {
    return (
        <View style={styles.container}>
            
            {/* banner image */}
            <View style={styles.bannerImageContainer}>
                <Image style={styles.bannerImage} source={require('../images/loginHeader.png')}/>
            </View>

            {/* language selector */}
            <View style={styles.languageSelector}>
                {/* english */}
                <TouchableOpacity style={styles.languageButton} >
                    <Text style={styles.btnLnText}> 
                        {Strings.englishLanguage} 
                    </Text>
                </TouchableOpacity>

                {/* urdu */}
                <TouchableOpacity style={styles.languageButton} >
                    <Text style={styles.btnLnText}> 
                        {Strings.urduLanguage} 
                    </Text>
                </TouchableOpacity>
            </View>

            {/* input fields container */}
            <View style={styles.fieldsContainer}>
                {/* email input */}
                <TextInput 
                    style={styles.inputField} 
                    placeholder={Strings.emailPlaceholder} 
                />

                {/* password input */}
                <TextInput 
                    style={styles.inputField} 
                    placeholder={Strings.passwordPlaceholder} 
                />
                
                {/* login button */}
                <TouchableOpacity style={styles.loginButton} >
                    <Text style={styles.loginButtonText}> 
                        {Strings.loginButtonText} 
                    </Text>
                </TouchableOpacity>

                {/* forgot password */}
                <TouchableOpacity style={styles.forgotPwdButton} >
                    <Text style={styles.forgotPwdButtonText}> 
                        {Strings.forgotPasswordText} 
                    </Text>
                </TouchableOpacity>
            </View>

            {/* separator bar */}
            <Text style={styles.separator}>
                ───────────── {Strings.spliterText} ─────────────
            </Text>

            {/* signup button */}
            <View style={styles.signupButtons}>
                <View style={{width:250}}>
                    <Button 
                        onPress={props.shiftSignupScreen} 
                        title={Strings.signupText}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flex: 1
    },
    bannerImageContainer:{
        width: '100%',
        height: '30%'
    },
    bannerImage:{
        width: '100%',
        height: '100%',
        backgroundColor: Colors.primary
    },
    languageSelector: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:5
    },
    languageButton:{
        marginHorizontal:3,
    },
    btnLnText:{
        fontSize:14
    },
    fieldsContainer: {
        paddingHorizontal: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    inputField: {
        borderBottomColor: Colors.primary,
        borderBottomWidth: 2,
        marginTop: 10,
        fontSize: 16,
        width: 300
    },
    loginButton: {
        width: 300,
        height: 38,
        marginTop: 30,
        backgroundColor: Colors.primary,
        padding: 6,
        borderRadius: 5,
    },
    loginButtonText: {
        color: "white",
        fontSize: 16,
        justifyContent: "center",
        textAlign: "center",
    },
    forgotPwdButton: {
        width: 300,
        marginTop: 5,
        backgroundColor: Colors.noBackground,
        padding: 6
    },
    forgotPwdButtonText: {
        color: Colors.primary,
        fontSize: 16,
        justifyContent: "center",
        textAlign: "center",
    },
    separator:{ 
        marginVertical: 30,  
        textAlign: 'center' 
    },
    signupButtons:{
        alignItems:'center'
    }
});

export default Login;