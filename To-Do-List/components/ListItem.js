import React ,{useState} from 'react';
import {View,Text,Button,StyleSheet,TouchableOpacity} from 'react-native';

const ListItem = props=>{
    return (
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
            <TouchableOpacity style={styles.btnDel} onPress={props.onDelete.bind(this,props.id)}>
               <Text>❌</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    listItem:{
      height:35,
      margin:5,
      borderColor:"#a1a1a1",
      borderWidth:1,
      borderRadius:5,
      justifyContent:'center',
      alignItems:"center",
      flexDirection:"row",
      justifyContent: "space-between",  
    },
    btnDel:{
        backgroundColor:"#a1a1a1",
        borderRadius:20,
        borderWidth:12,
        borderColor:"#a1a1a1"
    }
  });

export default ListItem;