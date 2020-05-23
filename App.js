import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';


export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  // add the goal the state
  const goalInputHandler = (enteredText)=>{
     setEnteredGoal(enteredText)
  }

  // add the goal to the array of goals
  const addGoalHandler=()=>{
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: enteredGoal}])
  }

  const {mainScreen, bodyContainer, inputContainer, listItems} = styles;
  return (
    <View style={mainScreen}>
      <View style={bodyContainer}>
        <TextInput 
        placeholder="Enter your course goal" 
        style={inputContainer}
        onChangeText={goalInputHandler}
        />
        <Button 
          title="ADD"
          onPress={addGoalHandler}/>
      </View>
      <FlatList 
        data={courseGoals}
        renderItem={itemData=>(
          <View 
            style={listItems}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
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
  },
  listItems:{
    padding: 1,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10
  }
});
