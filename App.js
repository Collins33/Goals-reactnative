import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [isVisible, setVisibility] = useState(false)
  
  // add the goal to the array of goals
  const addGoalHandler=(goalTitle)=>{
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: goalTitle}])
    setVisibility(false);
  }

  // delete a goal from the list
  const deleteGoal = goalId=>{
    console.log(goalId)
    setCourseGoals(currentGoals=>{
      return currentGoals.filter((goal)=>{
        goal.key != goalId
      })
    })
  }

  const {mainScreen} = styles;
  return (
    <View style={mainScreen}>
      <Button title="Add my goal" onPress={()=>{setVisibility(true)}}/>
      <GoalInput isVisible={isVisible} addGoalHandler={addGoalHandler}/>
      <FlatList 
        data={courseGoals}
        renderItem={itemData=>(
          <GoalItem title={itemData.item.value} id={itemData.item.key} onDelete={deleteGoal}/>
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
