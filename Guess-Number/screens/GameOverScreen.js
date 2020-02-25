import React from 'react'
import {View,Text,StyleSheet, Button} from 'react-native';

const GameOverScreen = props =>{
    return (
        <View style = {styles.screen}>
            <Text>The Game is Over</Text>
            <Text>Number of Rounds: {props.rounds}</Text>
            <Text>Your Guess: {props.userNumber}</Text>
            <Button title="New Game!" onPress={props.onRestart}/>
        </View>
    )
}

styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default GameOverScreen;