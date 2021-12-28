import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import Login from './resources/screens/Login';
import Signup from './resources/screens/Signup';

const App = () => {

  /* 
  //////////////////////////////////////////////////////////////////////////////////////////////////
      using this states to chang language of app, later we will implement proper multilingual
      just for practice of states.
  //////////////////////////////////////////////////////////////////////////////////////////////////
  */

  const [isEnglish, setIsEnglish]=useState(true);
  
  const [isSignup, setIsSignup]=useState(false);   //using this state to shift to signup page
  
  /* 
  //////////////////////////////////////////////////////////////////////////////////////////////////
      variable content will decide whats to show is it signup of login
      currently not studied navigation, later we will shift to proper navigation.
  //////////////////////////////////////////////////////////////////////////////////////////////////
  */
  let content;

  //this function is changing state values.
  const signupPressed=(setEnglish)=>{
    setIsSignup(true);
    setIsEnglish(setEnglish);
  }

  if(isSignup)
    content=<Signup setEnglish={isEnglish} shiftLoginScreen={()=>setIsSignup(false)} />;
  else
    content=<Login setEnglish={isEnglish} shiftSignupScreen={signupPressed}/>;

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