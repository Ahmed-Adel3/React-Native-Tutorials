import React, { useState,useRef,useEffect } from 'react';
import {View,StyleSheet,Text,Button,Alert} from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandBetween= (min,max,exclude) =>{
    min  = Math.ceil(min);
    max = Math.floor(max);
    const rand = Math.floor(Math.random()*(max-min))+min; // generate rand num between max and min
    if(rand === exclude) return generateRandBetween(min,max,exclude);
    else return rand
}

const GameScreen = props => {
    const currentLow=useRef(1);
    const currentHigh=useRef(100);
    const [rounds,setRounds] = useState(0);

    const [currentGuess,setCurrentGuess] = useState(generateRandBetween(1,100,props.userChoice));
    const{userChoice,onGameOver} = props;
    useEffect(()=>{
        if(currentGuess === props.userChoice) {
            props.onGameOver(rounds);
        };
    }, [currentGuess,userChoice,onGameOver])
    const nextGuessHandler =(direction)=>{
        if((direction === "lower" && currentGuess < props.userChoice) || (direction === "higher" && currentGuess > props.userChoice)){
            Alert.alert("Don't lie","You know it is not "+direction,[{text:"Sorry!",style:"cancel"}]); 
            return;
        }
        
        if (direction === "lower"){
            currentHigh.current = currentGuess;
        } else if (direction === "higher"){
            currentLow.current = currentGuess;
        }
        const newNum =  generateRandBetween(currentLow.current,currentHigh.current,currentGuess);
        setCurrentGuess(newNum);
        setRounds(rounds+1)
    }
    return(
        <View style={styles.screen}>
            <Text>Opponent Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="Lower" onPress={nextGuessHandler.bind(this,"lower")} />
                <Button title="Greater" onPress={nextGuessHandler.bind(this,"higher")}   />
            </Card>
        </View>)
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding: 10,
        alignItems:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent: "space-around",
        marginTop:20,
        width:300,
        maxWidth:'80%'
    }
});

export default GameScreen;