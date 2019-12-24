import React ,{useState}from 'react';
import {View , TextInput,Button,StyleSheet,Modal} from 'react-native';

const InputArea = props => {
    const [addedGoal,setGoal]=useState('');

    const onTypingGoalHandler= (item)=>{
      setGoal(item);
    }
    const addGoalHandler=()=>{
      props.onAddGoal(addedGoal);
      setGoal('')
    }


  
    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.container2}>
        <TextInput style={styles.input} onChangeText={onTypingGoalHandler} value={addedGoal} />
        <View style={styles.btns}>
          <Button onPress={addGoalHandler} title="ADD" disabled={addedGoal==''} />
          <Button onPress={props.onCancel} title="Cancel" color="red"/>
        </View>
        </View>
      </Modal>
)
}

const styles = StyleSheet.create({
    container2: {
      backgroundColor:'#a1a1a1',
      padding:10,
      flex:1,
      justifyContent:"center",
      alignItems:"center"
        },
    input:{
      borderColor:"#b2c4d1",
      backgroundColor:"white",
      borderWidth:1,
      borderRadius:20,
      marginBottom:10,
      width:300,
      height:40
    },
    btns:{
      flexDirection:"row", 
      width:300,
      justifyContent:"space-around"
    }
  });

  export default InputArea;