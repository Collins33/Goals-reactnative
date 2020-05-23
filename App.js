import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  
  // add the goal to the array of goals
  const addGoalHandler=(goalTitle)=>{
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: goalTitle}])
  }

  const {mainScreen, bodyContainer, inputContainer, listItems} = styles;
  return (
    <View style={mainScreen}>
      <GoalInput addGoalHandler={addGoalHandler}/>
      <FlatList 
        data={courseGoals}
        renderItem={itemData=>(
          <GoalItem title={itemData.item.value}/>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainScreen:{
    padding: 50,
  },
});
