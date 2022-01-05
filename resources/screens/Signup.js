import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import SignupCreateAccount from './Signup sub screens/SignupCreateAccount';
import SignupDob from './Signup sub screens/SignupDob';
import SignupPassword from './Signup sub screens/SignupPassword';
import SignupEmail from './Signup sub screens/SignupEmail';
import SignupName from './Signup sub screens/SignupName';
import Home from './User/home';

const Signup = props =>{
    // changing activities through states
    const [isNameSignup, setIsNameSignup]=useState(false);
    const [isEmailSignup, setIsEmailSignup]=useState(false);
    const [isPassSignup, setIsPassSignup]=useState(false);
    const [isDobSignup, setIsDobSignup]=useState(false);
    
    const [isHomeScreen, setIsHomeScreen] = useState(false);
    // variable to choose what to display
    let signup;

    const setNameSignup=()=>{
        setIsNameSignup(true);
        setIsEmailSignup(false);
        setIsPassSignup(false);
        setIsDobSignup(false);
    }

    const setEmailSignup=()=>{
        setIsNameSignup(false);
        setIsEmailSignup(true);
        setIsPassSignup(false);
        setIsDobSignup(false);
    }

    const setPassSignup=()=>{
        setIsNameSignup(false);
        setIsEmailSignup(false);
        setIsPassSignup(true);
        setIsDobSignup(false);
    }

    const setDobSignup=()=>{
        setIsNameSignup(false);
        setIsEmailSignup(false);
        setIsPassSignup(false);
        setIsDobSignup(true);
    }

    const setHomeScreen=()=>{
        setIsHomeScreen(true);
    }

    const backFromDob=()=>{
        setIsNameSignup(false);
        setIsEmailSignup(false);
        setIsPassSignup(true);
        setIsDobSignup(false);
    }

    const backFromPass=()=>{
        setIsNameSignup(false);
        setIsEmailSignup(true);
        setIsPassSignup(false);
        setIsDobSignup(false);
    }

    const backFromEmail=()=>{
        setIsNameSignup(true);
        setIsEmailSignup(false);
        setIsPassSignup(false);
        setIsDobSignup(false);
    }

    const backFromName=()=>{
        setIsNameSignup(false);
        setIsEmailSignup(false);
        setIsPassSignup(false);
        setIsDobSignup(false);
    }

    // create -> name -> email -> password -> dob

    if(isHomeScreen){
        signup=<Home />
    }
    else if(isDobSignup){
        signup= <SignupDob 
                    shiftNextScreen={setHomeScreen} 
                    shiftBackScreen={backFromDob}
                />;
    }

    else if(isPassSignup)
        signup= <SignupPassword 
                    shiftNextScreen={setDobSignup} 
                    shiftBackScreen={backFromPass}
                />;
    
    else if(isEmailSignup)
        signup= <SignupEmail 
                    shiftNextScreen={setPassSignup} 
                    shiftBackScreen={backFromEmail}
                />;

    else if(isNameSignup)
        signup= <SignupName 
                    shiftNextScreen={setEmailSignup} 
                    shiftBackScreen={backFromName}
                />;
    else
        signup= <SignupCreateAccount 
                    shiftNextScreen={setNameSignup} 
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