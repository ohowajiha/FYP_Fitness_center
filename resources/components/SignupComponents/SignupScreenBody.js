import React, {useState} from 'react';
import {View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import Colors from '../../colors/Colors';
import Strings from '../../strings/Strings';
import UrduStrings from '../../strings/UrduStrings';

const SignupScreenBody = props =>{
    // for date time picker
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [firstClicked, setFirstClicked] = useState(false);
    let age=0;
    const onChange = (event, selectedDate) => {
        const currentDate= selectedDate || date;
        setDate(currentDate);
        if(Platform.OS==='android'){
            setShow(false);
        }
        if(!firstClicked){
            setFirstClicked(true);
        }
       };
    
       const changeAge=()=>{
            const today= new Date();
            age= today.getFullYear() - date.getFullYear();
            let monthChecker= today.getMonth() - date.getMonth();
            if(monthChecker<0 || (monthChecker == 0 && today.getDate() < date.getDate())){
                age--;
            }
            return age;
       };

    const monthNames = ["January", "February", "March", "April", "May", "June",
       "July", "August", "September", "October", "November", "December"
     ];
        
    const showDate=()=>{
        return date.getDate() + " / " + monthNames[date.getMonth()] + " / "+ date.getFullYear();
    }
//
    let ImageContainer=<></>;
    if(props.helloImage == 1){
        ImageContainer =
        <View style={styles.itemsContainer} >
            <Image source={require('../../images/signupSlogan.png')} style={styles.showImage} />
        </View>;
    }

    let SecondButton=<></>;
    if(props.helloSecondButton==1){
        SecondButton =
        <View style={{ alignItems: 'center' }}>
            <TouchableOpacity style={styles.button2} onPress={props.shiftBackScreen}>
                <Text style={styles.btnText2}>{props.setEnglish ? Strings.loginText : UrduStrings.loginText}</Text>
            </TouchableOpacity>
        </View>;
    }
    
    let InputFields=<></>;
    if(props.helloInputFields==1){
        InputFields =
        <View style={{ marginTop: 20, flexDirection:props.setEnglish ? 'row': 'row-reverse', alignItems: 'center', justifyContent:'space-between' }}>
            <TextInput placeholder={props.setEnglish?Strings.firstNameLabel:UrduStrings.firstNameLabel} style={styles.inputField}/>
            <TextInput placeholder={props.setEnglish?Strings.lastNameLabel:UrduStrings.lastNameLabel} style={styles.inputField}/>
        </View>;
    }
    else if(props.helloInputFields==2){
        InputFields =
        <View style={{ marginTop: 20 }}>
            <TouchableOpacity style={{width:60, height:60, alignSelf:'center'}}   onPress={()=>setShow(true)}>
                <Image style={{width:60, height:60}} source={require('../../images/calendarIcon.png')}/>
            </TouchableOpacity>

            <Text style={[styles.inputField, {width:null, maxWidth:null,marginTop:20, paddingBottom: 5,textAlign:'center'}]}>
                    {firstClicked?showDate():props.setEnglish?Strings.dobLabelText:UrduStrings.dobLabelText}
            </Text>

            <Text style={[{marginTop:5, fontWeight:'bold', textAlign:'center'}]}>
                    {firstClicked?changeAge()+" Years old":""}
            </Text>

            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>;
    }

    return(
        <>
        <View style={styles.container}>
            {ImageContainer}

            {/* {TextHeading} */}
            <View style={styles.itemsContainer} >
                <Text style={styles.headingText}>{props.headingText}</Text>
            </View>
            
            {/* {TextCaption}    */}
            <Text style={{ marginTop: 10, textAlign: 'center' }}>
                {props.captionText}
            </Text>
            
            {/* Have to add InputFields  */}
            {InputFields}
            
            <TouchableOpacity style={styles.button1} onPress={props.shiftNextSignup}>
                    <Text style={styles.btnText1}>{props.setEnglish ? Strings.nextText : UrduStrings.nextText}</Text>
            </TouchableOpacity>
        </View>
        {SecondButton}
        </>
    );
};

const styles= StyleSheet.create({
    container:{
        flex:1,
        padding: '10%',
        alignItems:'center'
    },
    itemsContainer:{
        marginTop: 0,
        alignItems: 'center'
    },
    showImage:{
        width:200,
        height: 200
    },
    headingText:{
        fontSize:18,
        fontWeight:'bold',
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
    },
    inputField: {
        borderBottomColor: Colors.primary,
        borderBottomWidth: 2,
        fontSize: 18,
        width: '50%',
        maxWidth: '50%',
        marginHorizontal:5
    },
});

export default SignupScreenBody;