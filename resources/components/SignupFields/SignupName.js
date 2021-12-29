import React from 'react';
import {StyleSheet} from 'react-native';

import SignupScreenHeader from '../SignupComponents/SignupScreenHeader';
import SignupScreenBody from '../SignupComponents/SignupScreenBody';
import Strings from '../../strings/Strings';
import UrduStrings from '../../strings/UrduStrings';


const SignupName = props =>{
    return(
        <>
            <SignupScreenHeader 
                shiftBackScreen={props.shiftBackScreen} 
                setEnglish={props.setEnglish} 
                title={props.setEnglish ? Strings.nameLabelText : UrduStrings.nameLabelText}
                />  
            
            <SignupScreenBody 
                shiftNextSignup={props.shiftDobSignup} 
                shiftBackScreen={props.shiftBackScreen}
                inputType="inputFiels"
                rowOnePlaceHolderOne={props.setEnglish?Strings.firstNameLabel:UrduStrings.firstNameLabel}
                rowOnePlaceHolderTwo={props.setEnglish?Strings.lastNameLabel:UrduStrings.lastNameLabel}
                //rowTwoPlaceHolderOne={pass string}
                setEnglish={props.setEnglish}
                headingText={props.setEnglish ? Strings.nameHeadingText : UrduStrings.nameHeadingText}
                captionText={props.setEnglish ? Strings.nameCaptionText : UrduStrings.nameCaptionText}
                //headingTwoText={pass string}
                //captionTwoText={pass string}
                />
        </>
    );
};

const styles= StyleSheet.create({});

export default SignupName;