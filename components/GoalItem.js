import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = (props)=>
{
  const {listItems} = styles;
  return(
    <TouchableOpacity onPress={()=>{props.onDelete(props.id)}}>
    <View 
      style={listItems}>
      <Text>{props.title}</Text>
    </View>
    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  listItems:{
    padding: 1,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10
  }
})


export default GoalItem;