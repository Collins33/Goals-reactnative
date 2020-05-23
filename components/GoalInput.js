import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = ({addGoalHandler, isVisible})=>
{
  const [enteredGoal, setEnteredGoal] = useState('');
  const {bodyContainer, inputContainer} = styles;

  // add the goal the state
  const goalInputHandler = (enteredText)=>{
    setEnteredGoal(enteredText)
 }
  return (
    <Modal visible={isVisible}>
    <View style={bodyContainer}>
        <TextInput 
        placeholder="Enter your course goal" 
        style={inputContainer}
        onChangeText={goalInputHandler}
        />
        <Button 
          title="ADD"
          onPress={()=>addGoalHandler(enteredGoal)}/>
      </View>
    </Modal>
  )

}

const styles = StyleSheet.create({
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
})

export default GoalInput;