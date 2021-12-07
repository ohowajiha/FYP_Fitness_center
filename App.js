import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import Login from './resources/screens/Login';
import Signup from './resources/screens/Signup';

const App = () => {
  const [isEnglish, setIsEnglish]=useState(true);
  const [isSignup, setIsSignup]=useState(false);
  let content;

  const signupPressed=(setEnglish)=>{
    setIsSignup(true);
    setIsEnglish(setEnglish);
  }

  if(isSignup)
    content=<Signup setEnglish={isEnglish} shiftLoginScreen={()=>setIsSignup(false)} />;
  else
    content=<Login shiftSignupScreen={signupPressed}/>;

  return(
    <View style={styles.container}>
      {content}
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    height: '100%',
    width: '100%',
    flex: 1
  }
});

export default App;