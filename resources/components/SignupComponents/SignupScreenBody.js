/* 
    This component have input fields and buttons requested by different signup pages    
*/
import React, {useState} from 'react';
import {View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Platform} from 'react-native';

// colors and strings imprt
import Colors from '../../colors/Colors';
import Strings from '../../strings/Strings';
import UrduStrings from '../../strings/UrduStrings';

//main
const SignupScreenBody = props =>{
///////////////////////////////////////////////////////////////////////////////////////
    //  1. Top Image container
//////////////////////////////////////////////////////////////////////////////////////
    let topImageContainer=<></>;
        topImageContainer = props.topImageLocation && (
        <View style={styles.itemsContainer} >
            <Image source={require('../../images/signupSlogan.png')} style={styles.showImage} />
        </View>);

///////////////////////////////////////////////////////////////////////////////////////
    //  2. Input fiels for activity
//////////////////////////////////////////////////////////////////////////////////////
    let InputFieldsRowOne=<></>;
    let InputFieldsRowTwo=<></>;

    if(props.inputType=="inputFiels"){    //////  a. text inputs.
        InputFieldsRowOne =
        <View style={{ marginTop: 20, flexDirection:props.setEnglish ? 'row': 'row-reverse', alignItems: 'center', justifyContent:'space-between' }}>
            <TextInput placeholder={props.rowOnePlaceHolderOne} style={styles.inputField}/>
            { props.rowOnePlaceHolderTwo && (<TextInput placeholder={props.rowOnePlaceHolderTwo} style={styles.inputField}/>)}
        </View>;

        InputFieldsRowTwo=
        (props.rowTwoPlaceHolderOne || props.rowTwoPlaceHolderTwo)&&
        <View style={{ marginTop: 20, flexDirection:props.setEnglish ? 'row': 'row-reverse', alignItems: 'center', justifyContent:'space-between' }}>
            <TextInput placeholder={props.rowTwoPlaceHolderOne} style={styles.inputField}/>
            { props.rowTwoPlaceHolderTwo && (<TextInput placeholder={props.rowTwoPlaceHolderTwo} style={styles.inputField}/>)}
        </View>;
    }

    else if(props.inputType=="dateInput"){     ///////////    b. date input calendar type
        InputFieldsRowOne =
        <View style={{ marginTop: 20 }}>
            {/*display calendar icon*/}
            <TouchableOpacity style={{width:60, height:60, alignSelf:'center'}}   onPress={props.changeShow}>
                <Image style={{width:60, height:60}} source={require('../../images/calendarIcon.png')}/>
            </TouchableOpacity>

            {/*display date entered throught calendar*/}
            <Text style={[styles.inputField, {width:null, maxWidth:null,marginTop:20, paddingBottom: 5,textAlign:'center'}]}>
                    {props.rowOnePlaceHolderOne}
            </Text>
        </View>;

        /* calculating age with the help of current date and entered date*/
        InputFieldsRowTwo =
        <Text style={[{marginTop:5, fontWeight:'bold', textAlign:'center'}]}>
            {props.rowTwoPlaceHolderOne}
        </Text>;
            
    }

///////////////////////////////////////////////////////////////////////////////////////
    //  3.
    //  second button at bottom in some activities
//////////////////////////////////////////////////////////////////////////////////////
    let SecondButton=<></>;
        SecondButton = props.bottomButtonText && 
        (<View style={{ alignItems: 'center' }}>
            <TouchableOpacity style={styles.button2} onPress={props.shiftBackScreen}>
                <Text style={styles.btnText2}>{props.bottomButtonText}</Text>
            </TouchableOpacity>
        </View>)
    
////////////////////////////////////////////////////////////////////////////////////////////////////
    return(
        <>
        <View style={styles.container}>
            {topImageContainer}

            {/* /////////////////////////////////////////////
                    Heading for activity  */}
            <View style={styles.itemsContainer} >
                <Text style={styles.headingText}>{props.headingText}</Text>
            </View>
            
            {/* /////////////////////////////////////////////
                    caption for Heading for activity  */}
            <Text style={{ marginTop: 10, textAlign: 'center' }}>
                {props.captionText}
            </Text>
            
            {/* Have to add InputFields  */}
            {InputFieldsRowOne}
            
            {/* /////////////////////////////////////////////
                    Second Heading for activity  */}
            { props.HeadingTwo && (<View style={styles.itemsContainer} >
                <Text style={styles.headingText}>{props.headingTwoText}</Text>
            </View> )}
            
            {/* /////////////////////////////////////////////
                    caption for Second Heading for activity  */}
            { props.CaptionTwo && (<Text style={{ marginTop: 10, textAlign: 'center' }}>
                {props.captionTwoText}
            </Text> )}
            
            {/* Have to add InputFields  */}
            {InputFieldsRowTwo}

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