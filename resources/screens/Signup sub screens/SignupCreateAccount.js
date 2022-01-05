import React, {useState} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';

import Colors from '../../colors/Colors';
import Strings from '../../strings/Strings';
import ActionBarWithBack from '../../components/ActionBarWithBack';
import HeadingAndCaption from '../../components/HeadingAndCaption';
import {Picker} from '@react-native-picker/picker';


const SignupCreateAccount = props =>{
    const [selectedValue, setSelectedValue] = useState("2");
    return(
        <>
            <ActionBarWithBack 
                shiftBackScreen={props.shiftBackScreen} 
                title={Strings.signupLabel}
            />

            <View style={styles.container}>
                {/*image  */}
                <View style={styles.itemsContainer} >
                    <Image source={require('../../images/signupSlogan.png')} style={styles.showImage} />
                </View>
                
                {/* heaging and caption from component */}
                <HeadingAndCaption
                    headingText={Strings.signupQuote}
                    captionText={Strings.flowText}
                />

                <Text style={{fontWeight:'bold', marginTop:10}}>{Strings.chooseUserCaption}</Text>
                {/* picker for user type */}
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 130 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="User" value='2'/>  
                    <Picker.Item label="Coach" value='3'/>
                    {/* value is user type in database   */}
                </Picker>

                {/* next button */}
                <TouchableOpacity style={styles.nextButton} onPress={props.shiftNextScreen}>
                        <Text style={styles.nextButtonText}>
                            {Strings.nextText}
                        </Text>
                </TouchableOpacity>
            </View>

            {/* login insetead */}
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.bottomButton} onPress={props.shiftBackScreen}>
                    <Text style={styles.bottomButtonText}>
                        {Strings.loginText}
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
    itemsContainer:{
        marginTop: 0,
        alignItems: 'center'
    },
    showImage:{
        width:200,
        height: 200
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
    bottomButton: {
        width: 300,
        marginBottom:5,
        backgroundColor: Colors.noBackground,
        padding: 6
    },
    bottomButtonText: {
        color: Colors.primary,
        fontSize: 15,
        justifyContent: "center",
        textAlign: "center",
    },
});

export default SignupCreateAccount;