import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainScreen}>
      <View style={styles.bodyContainer}>
        <TextInput placeholder="Enter your course goal" style={styles.inputContainer}/>
        <Button title="ADD"/>
      </View>
      <View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainScreen:{
    padding: 50,
  },
  bodyContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputContainer:{
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    width: '80%'
  }
});
