import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
// for date inputs in react native
import DateTimePicker from '@react-native-community/datetimepicker';

import SignupScreenHeader from '../SignupComponents/SignupScreenHeader';
import SignupScreenBody from '../SignupComponents/SignupScreenBody';
import Strings from '../../strings/Strings';
import UrduStrings from '../../strings/UrduStrings';


const SignupDob = props =>{
    ///////////////////////////////////////////
    // states and functions for date and age //

    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [firstClicked, setFirstClicked] = useState(false); // to display nothing in date and age textView firstTime
    
    const onChangeDateSelection = (event, selectedDate) => {
        const newSelectedDate= selectedDate || date;
        setDate(newSelectedDate);
        if(Platform.OS==='android'){
            setShow(false); //hide the calendar view
        }
        if(!firstClicked){
            setFirstClicked(true);
        }
    };
    
    const changeAge=()=>{
        let age=0;
        const today= new Date();
        age= today.getFullYear() - date.getFullYear();
        let monthChecker= today.getMonth() - date.getMonth();
        if(monthChecker<0 || (monthChecker == 0 && today.getDate() < date.getDate())){
            age--;
        }
        return age;
    };

    const changeShow=()=>{
        setShow(true);
    }   

    const monthNames = ["January", "February", "March", "April", "May", "June",
       "July", "August", "September", "October", "November", "December"];
        
    const showDate=()=>{
        return date.getDate() + " / " + monthNames[date.getMonth()] + " / "+ date.getFullYear();
    }

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
                inputType="dateInput" 
                setEnglish={props.setEnglish}
                headingText={props.setEnglish ? Strings.dobHeadingText : UrduStrings.dobHeadingText}
                captionText={props.setEnglish ? Strings.dobCaptionText : UrduStrings.dobCaptionText}

                //passing states and functions of age and date
                rowOnePlaceHolderOne={firstClicked?showDate():props.setEnglish?Strings.dobLabelText:UrduStrings.dobLabelText}
                rowTwoPlaceHolderOne={firstClicked?changeAge()+" Years old":""}
                firstClicked={firstClicked}
                changeShow={changeShow}
                />

                {/* show and hide calendar input */}
                {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    display="default"
                    onChange={onChangeDateSelection}
                />
            )}
        </>
    );
};

const styles= StyleSheet.create({});

export default SignupDob;