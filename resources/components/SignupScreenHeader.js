import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Colors from '../colors/Colors';

const SignupScreenHeader = props =>{
    return(
        <View style={styles.signupHeader}>
            <TouchableOpacity onPress={props.shiftLoginScreen}>
                    <Image source={require('../images/leftIcon.png')} style={styles.btnBack}/>
            </TouchableOpacity>
            <Text style={styles.label}>Create Account</Text>
        </View>
    )
};

const styles= StyleSheet.create({
    signupHeader:{
        flexDirection:'row',
        height: 60,
        width: '100%',
        padding: 10,
        justifyContent:'flex-start',
        alignItems: 'center',
        borderBottomColor: Colors.secondLogoColor,
        borderBottomWidth:1
    },
    btnBack: {
        width:35,
        height:25,
        paddingHorizontal: 5
    },
    label:{
        fontSize:18,
        marginHorizontal:10
    }
});

export default SignupScreenHeader;