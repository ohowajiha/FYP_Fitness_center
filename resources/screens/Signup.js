import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import SignupCreateAccount from '../components/SignupFields/SignupCreateAccount';
import SignupDob from '../components/SignupFields/SignupDob';
import SignupName from '../components/SignupFields/SignupName';

const Signup = props =>{
    const [isNameSignup, setIsNameSignup]=useState(false);
    const [isDobSignup, setIsDobSignup]=useState(false);
    let signup;

    const setNameSignup=()=>{
        setIsNameSignup(true);
        setIsDobSignup(false);
    }
    const setDobSignup=()=>{
        setIsDobSignup(true);
        setIsNameSignup(false);
    }

    const backFromDob=()=>{
        setIsDobSignup(false);
        setIsNameSignup(true);
    }
    const backFromName=()=>{
        setIsDobSignup(false);
        setIsNameSignup(false);
    }

    if(isDobSignup){
        signup=<SignupDob 
            shiftDobSignup={()=>{}} 
            setEnglish={props.setEnglish} 
            shiftBackScreen={backFromDob}
            />;
    }
    else if(isNameSignup)
        signup=<SignupName 
            shiftDobSignup={setDobSignup} 
            setEnglish={props.setEnglish} 
            shiftBackScreen={backFromName}
            />;
    else
        signup=<SignupCreateAccount 
            shiftNameSignup={setNameSignup} 
            setEnglish={props.setEnglish} 
            shiftBackScreen={props.shiftLoginScreen}/>;
    return(
        <>
        {signup}
        </>
    );
};

const styles= StyleSheet.create({});

export default Signup;