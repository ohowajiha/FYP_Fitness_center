import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import Login from './resources/screens/Login';
import Signup from './resources/screens/Signup';

const App = () => {
  //using this state to shift to signup page
  const [isSignup, setIsSignup]=useState(false);   
  
  //variable to display
  let content;

  //this function is changing state values.
  const signupPressed=()=>{
    setIsSignup(true);
  }

  if(isSignup)
    content=<Signup shiftLoginScreen={()=>setIsSignup(false)} />;
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