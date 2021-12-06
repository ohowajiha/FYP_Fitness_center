import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';

import LoginScreenHeader from '../components/LoginScreenHeader';
import Colors from '../colors/Colors';
import Strings from '../strings/Strings';

const Login = props => {
    return (
        <View style={styles.container}>
            <LoginScreenHeader />
            <View style={styles.languageSelector}><Text style={{ fontSize: 14 }}>English,  change</Text></View>

            <View style={styles.fieldsContainer}>
                <TextInput style={styles.inputField} placeholder={Strings.emailPlaceholder} />
                <TextInput style={styles.inputField} placeholder={Strings.passwordPlaceholder} />
                
                <TouchableOpacity style={styles.button1} >
                    <Text style={styles.btnText1}> {Strings.loginText} </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button2} >
                    <Text style={styles.btnText2}> {Strings.forgotPasswordText} </Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.separator}>
            ───────────── {Strings.spliterText} ─────────────
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
                    <Button title={Strings.signupText}/>
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
    inputField: {
        borderBottomColor: Colors.primary,
        borderBottomWidth: 2,
        marginTop: 10,
        fontSize: 16,
        width: 300
    },
    button1: {
        width: 300,
        marginTop: 20,
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