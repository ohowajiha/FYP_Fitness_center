import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import Login from './resources/screens/Login';

const App = () => {
  return(
    <View style={styles.container}>
      <Login />
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