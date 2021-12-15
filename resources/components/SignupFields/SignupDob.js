import React from 'react';
import {StyleSheet} from 'react-native';

import SignupScreenHeader from '../SignupComponents/SignupScreenHeader';
import SignupScreenBody from '../SignupComponents/SignupScreenBody';
import Strings from '../../strings/Strings';
import UrduStrings from '../../strings/UrduStrings';


const SignupDob = props =>{
    return(
        <>
            <SignupScreenHeader 
                shiftBackScreen={props.shiftBackScreen} 
                setEnglish={props.setEnglish} 
                title={props.setEnglish ? Strings.dobLabelText : UrduStrings.dobLabelText}
                />  
            
            <SignupScreenBody 
                shiftNextSignup={props.shiftDobSignup} 
                shiftBackScreen={props.shiftBackScreen}
                helloInputFields="2" 
                setEnglish={props.setEnglish}
                headingText={props.setEnglish ? Strings.dobHeadingText : UrduStrings.dobHeadingText}
                captionText={props.setEnglish ? Strings.dobCaptionText : UrduStrings.dobCaptionText}
                />
        </>
    );
};

const styles= StyleSheet.create({});

export default SignupDob;