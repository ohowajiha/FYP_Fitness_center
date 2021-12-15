import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Colors from '../../colors/Colors';

const SignupScreenHeader = props =>{
    return(
        <View style={[props.setEnglish ? styles.signupHeader: styles.signupHeader2]}>
            <TouchableOpacity onPress={props.shiftBackScreen}>
                    <Image source={props.setEnglish ? require('../../images/leftIcon.png'): require('../../images/rightIcon.png')} style={styles.btnBack}/>
            </TouchableOpacity>
            <Text style={styles.label}>{ props.title }</Text>
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
        borderBottomColor: Colors.primary,
        borderBottomWidth:1
    },
    signupHeader2:{
        flexDirection:'row-reverse',
        height: 60,
        width: '100%',
        padding: 10,
        justifyContent:'flex-start',
        alignItems: 'center',
        borderBottomColor: Colors.primary,
        borderBottomWidth:1
    },
    btnBack: {
        width:35,
        height:25
    },
    label:{
        fontSize:18,
        marginHorizontal:10
    }
});

export default SignupScreenHeader;