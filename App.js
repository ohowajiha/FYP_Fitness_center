import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import Login from './resources/screens/Login';
import Signup from './resources/screens/Signup';

const App = () => {
  const [isSignup, setIsSignup]=useState(false);
  let content;

  if(isSignup)
    content=<Signup shiftLoginScreen={()=>setIsSignup(false)} />;
  else
    content=<Login shiftSignupScreen={()=>setIsSignup(true)}/>;

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