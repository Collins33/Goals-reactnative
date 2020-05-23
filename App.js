import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{
      padding: 60
    }}>
      <View>
        <TextInput placeholder="Enter your course goal" style={{
          borderColor: 'black',
          borderWidth: 1,
          marginBottom: 10,
          padding: 5
        }}/>
        <Button title="ADD"/>
      </View>
      <View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
