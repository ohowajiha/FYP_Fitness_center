import React from 'react';
import {Image, View, StyleSheet, Keyboard} from 'react-native';
import Colors from '../colors/Colors';

const LoginScreenHeader = props =>{

    // let header=<Image style={styles.headerImage} source={require('../images/loginHeader.png')}/>;
    
    return(
        <View style={styles.loginHeader}>
            <Image style={styles.headerImage} source={require('../images/loginHeader.png')}/>
        </View>
    );
};

const styles = StyleSheet.create({
    loginHeader:{
        width: '100%',
        height: '30%'
    },
    headerImage:{
        width: '100%',
        height: '100%',
        backgroundColor: Colors.primary
    }
});

export default LoginScreenHeader;