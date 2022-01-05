import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, TextInput} from 'react-native';

import Colors from '../../colors/Colors';
import Strings from '../../strings/Strings';
import ActionBarWithBack from '../../components/ActionBarWithBack';
import HeadingAndCaption from '../../components/HeadingAndCaption';


const SignupName = props =>{
    return(
        <>
            <ActionBarWithBack 
                shiftBackScreen={props.shiftBackScreen} 
                title={Strings.passLabelText}
            />

            <View style={styles.container}>
                {/* heaging and caption from component */}
                <HeadingAndCaption
                    headingText={Strings.passHeadingText}
                    captionText={Strings.passCaptionText}
                />

                {/* first name and last name input */}
                <View style={styles.inputFieldsContainer}>
                    <TextInput 
                        placeholder={Strings.passLabelText} 
                        style={styles.inputField}
                    />
                    <TextInput 
                        placeholder={Strings.cPassLabelText}
                        style={styles.inputField}
                    />
                </View>
                
                {/* next button */}
                <TouchableOpacity style={styles.nextButton} onPress={props.shiftNextScreen}>
                        <Text style={styles.nextButtonText}>
                            {Strings.nextText}
                        </Text>
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
    inputFieldsContainer:{ 
        marginTop: 20, 
        alignItems: 'center', 
        justifyContent:'space-between' 
    },
    inputField: {
        borderBottomColor: Colors.primary,
        borderBottomWidth: 2,
        fontSize: 18,
        width: '80%',
        maxWidth: '80%',
        marginHorizontal:5
    },
    nextButton: {
        width: 300,
        height: 38,
        marginTop: 40,
        backgroundColor: Colors.primary,
        padding: 6,
        borderRadius: 5,
    },
    nextButtonText: {
        color: "white",
        fontSize: 16,
        justifyContent: "center",
        textAlign: "center",
    },
});

export default SignupName;