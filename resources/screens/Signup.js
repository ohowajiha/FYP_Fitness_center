import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import SignupScreenHeader from '../components/SignupScreenHeader';
import Colors from '../colors/Colors';
import Strings from '../strings/Strings';
import UrduStrings from '../strings/UrduStrings';

const Signup = props =>{
    return(
        <>
        <SignupScreenHeader shiftLoginScreen={props.shiftLoginScreen} setEnglish={props.setEnglish} title={props.setEnglish ? Strings.signupLabel : UrduStrings.signupLabel}/>  
        <View style={styles.container}>
            
            <View style={styles.sloganContainer} >
                <Image source={require('../images/signupSlogan.png')} style={styles.sloganImage} />
                <Text style={styles.slogan}>{props.setEnglish ? Strings.signupQuote : UrduStrings.signupQuote}</Text>
            </View>

            <Text style={{marginTop:10, textAlign:'center'}}>{props.setEnglish ? Strings.flowText : UrduStrings.flowText}</Text>

            <TouchableOpacity style={styles.button1} >
                    <Text style={styles.btnText1}>{props.setEnglish ? Strings.nextText : UrduStrings.nextText}</Text>
            </TouchableOpacity>
        </View>
        <View style={{alignItems:'center'}}>
            <TouchableOpacity style={styles.button2} onPress={props.shiftLoginScreen}>
                <Text style={styles.btnText2}>{props.setEnglish ? Strings.loginText : UrduStrings.loginText}</Text>
            </TouchableOpacity>
        </View>
        </>
    );
};

const styles= StyleSheet.create({
    container:{
        flex:1,
        padding: '10%',
        alignItems:'center'
    },
    sloganContainer:{
        marginTop: 0,
        alignItems: 'center'
    },
    sloganImage:{
        width:200,
        height: 200
    },
    slogan:{
        fontSize:18,
        marginTop: 50
    },
    button1: {
        width: 300,
        height: 38,
        marginTop: 40,
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
        marginBottom:5,
        backgroundColor: Colors.noBackground,
        padding: 6
    },
    btnText2: {
        color: Colors.primary,
        fontSize: 15,
        justifyContent: "center",
        textAlign: "center",
    }
});

export default Signup;