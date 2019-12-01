import React,{useState} from 'react';
import { StyleSheet, Text, View,FlatList} from 'react-native';
import ListItem from './components/ListItem';
import InputArea from './components/InputArea';

let goalsCount=0;

export default function App() {
  const [toDoList,setToDoList]=useState([]);

  const btnAddClickHandler=addedGoal=>{
    goalsCount++;  
    setToDoList(toDoList =>[...toDoList, {id:goalsCount.toString(),value:addedGoal}]);
  }
  const btnDeleteHandler = goalId=>{

    return setToDoList(toDoList=>toDoList.filter(a=>a.id!==goalId ))
  }
  
  return (
    <View style={styles.mainPage}>
      <View style={styles.container1}>
        <Text> To Do List</Text>
      </View>
      
      <InputArea onAddGoal={btnAddClickHandler}/>
      <FlatList style={styles.container3} 
        keyExtractor={item=>item.id} 
        data={toDoList}
        renderItem={(a)=><ListItem title={"  "+a.item.id+"- "+a.item.value} id={a.item.id} onDelete={btnDeleteHandler}/> }/>
    </View>
  );
}

const styles = StyleSheet.create({
  mainPage:{
    paddingTop:32,
    flex:1,
  },
  container1: {
    backgroundColor:'powderblue',
    height:100,
    width:"100%",
    justifyContent:'center',
    alignItems:"center",
  },
  container3:{
    padding:20
  }
});
