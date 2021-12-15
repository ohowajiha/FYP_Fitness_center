import React from 'react';
import {StyleSheet} from 'react-native';

import SignupScreenHeader from '../SignupComponents/SignupScreenHeader';
import SignupScreenBody from '../SignupComponents/SignupScreenBody';
import Strings from '../../strings/Strings';
import UrduStrings from '../../strings/UrduStrings';


const SignupCreateAccount = props =>{
    return(
        <>
            <SignupScreenHeader 
                shiftBackScreen={props.shiftBackScreen} 
                setEnglish={props.setEnglish} 
                title={props.setEnglish ? Strings.signupLabel : UrduStrings.signupLabel}
                />  
            
            <SignupScreenBody 
                shiftNextSignup={props.shiftNameSignup} 
                shiftBackScreen={props.shiftBackScreen}
                helloImage="1"
                helloSecondButton="1"
                setEnglish={props.setEnglish}
                headingText={props.setEnglish ? Strings.signupQuote : UrduStrings.signupQuote}
                captionText={props.setEnglish ? Strings.flowText : UrduStrings.flowText}
                />
        </>
    );
};

const styles= StyleSheet.create({});

export default SignupCreateAccount;