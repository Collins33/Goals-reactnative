import React, {useState} from 'react';
import { Text, View, StyleSheet} from 'react-native';

const GoalItem = (props)=>
{
  const {listItems} = styles;
  return(
    <View 
            style={listItems}>
            <Text>{props.title}</Text>
    </View>
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