import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import SignupCreateAccount from './Signup sub screens/SignupCreateAccount';
import SignupDob from './Signup sub screens/SignupDob';
import SignupName from './Signup sub screens/SignupName';

const Signup = props =>{
    // changing activities through states
    const [isNameSignup, setIsNameSignup]=useState(false);
    const [isDobSignup, setIsDobSignup]=useState(false);
    
    // variable to choose what to display
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
        signup= <SignupDob 
                    shiftDobSignup={()=>{}} 
                    shiftBackScreen={backFromDob}
                />;
    }
    else if(isNameSignup)
        signup= <SignupName 
                    shiftDobSignup={setDobSignup} 
                    shiftBackScreen={backFromName}
                />;
    else
        signup= <SignupCreateAccount 
                    shiftNameSignup={setNameSignup} 
                    shiftBackScreen={props.shiftLoginScreen}
                />;

    return(
        <>
            {signup}
        </>
    );
};

const styles= StyleSheet.create({});

export default Signup;