import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';

import LoginScreenHeader from '../components/LoginComponents/LoginScreenHeader';
import Colors from '../colors/Colors';
import Strings from '../strings/Strings';
import UrduStrings from '../strings/UrduStrings';

const Login = props => {
    const [isEnglish, setIsEnglish]=useState(true);
    return (
        <View style={styles.container}>
            <LoginScreenHeader />
            <View style={styles.languageSelector}>
            <TouchableOpacity style={styles.languageButton} onPress={()=>setIsEnglish(true)} >
                    <Text style={styles.btnLnText}> {isEnglish ? Strings.englishLanguage : UrduStrings.englishLanguage} </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.languageButton} onPress={()=>setIsEnglish(false)} >
                <Text style={styles.btnLnText}> {isEnglish ? Strings.urduLanguage : UrduStrings.urduLanguage} </Text>
            </TouchableOpacity>
            </View>

            <View style={styles.fieldsContainer}>
                <TextInput style={styles.inputField} placeholder={isEnglish ? Strings.emailPlaceholder : UrduStrings.emailPlaceholder} />
                <TextInput style={styles.inputField} placeholder={isEnglish ? Strings.passwordPlaceholder : UrduStrings.passwordPlaceholder} />
                
                <TouchableOpacity style={styles.button1} >
                    <Text style={styles.btnText1}> {isEnglish ? Strings.loginButtonText : UrduStrings.loginButtonText} </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button2} >
                    <Text style={styles.btnText2}> {isEnglish ? Strings.forgotPasswordText : UrduStrings.forgotPasswordText} </Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.separator}>
            ───────────── {isEnglish ? Strings.spliterText : UrduStrings.spliterText} ─────────────
            </Text>

            {/* Also we can use that code for a separator or bar
            <View style={{ paddingHorizontal: '10%', marginVertical: 10, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                <View>
                    <Text style={{ width: 50, textAlign: 'center' }}>OR</Text>
                </View>
                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
            </View> */}

            <View style={styles.signupButtons}>
                <View style={{width:250}}>
                    <Button onPress={()=>props.shiftSignupScreen(isEnglish)} title={isEnglish ? Strings.signupText : UrduStrings.signupText}/>
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
    languageSelector: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:5
    },
    fieldsContainer: {
        paddingHorizontal: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    languageButton:{
        marginHorizontal:3,
    },
    btnLnText:{
        fontSize:14
    },
    inputField: {
        borderBottomColor: Colors.primary,
        borderBottomWidth: 2,
        marginTop: 10,
        fontSize: 16,
        width: 300
    },
    button1: {
        width: 300,
        height: 38,
        marginTop: 30,
        backgroundColor: Colors.primary,
        padding: 6,
        borderRadius: 5,
    },
    btnText1: {
        color: "white",
        fontSize: 16,
        justifyContent: "center",
        textAlign: "center",
    },
    button2: {
        width: 300,
        marginTop: 5,
        backgroundColor: Colors.noBackground,
        padding: 6
    },
    btnText2: {
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