import React ,{useState}from 'react';
import {View , TextInput,Button,StyleSheet} from 'react-native';

const InputArea = props => {
    const [addedGoal,setGoal]=useState('');

    const onTypingGoalHandler= (item)=>{
      setGoal(item);
    }
  
    return (
    <View style={styles.container2}>
        <TextInput style={styles.input} onChangeText={onTypingGoalHandler} value={addedGoal} />
        <Button style={styles.btn} onPress={props.onAddGoal.bind(this,addedGoal)} title="ADD" disabled={addedGoal==''} />
    </View>)
}

const styles = StyleSheet.create({
    container2: {
      backgroundColor:'#a1a1a1',
      flexDirection:"row",
      padding:10
    },
    input:{
      borderColor:"#2a2a2a",
      marginRight:20,
      backgroundColor:"white",
      borderWidth:1,
      borderRadius:20,
      flex:3,
      padding:1,
    },
    btn:{
      flex:1,
      borderColor:"steelblue",
      marginLeft:10
    }
  });

  export default InputArea;