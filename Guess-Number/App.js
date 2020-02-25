import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
const[userNumber,setUserNumber] = useState();
const [guessRounds,setGuessRounds] = useState(0);

const startGameHandler = (selectedNumber)=>{
  setUserNumber(selectedNumber);
}

const startNewGameHandler =()=>{
  setGuessRounds(0);
  setUserNumber(null);
}

const gameOverHandler =(rounds)=>{
    setGuessRounds(rounds);
}

let content = <StartGameScreen onStartGame={startGameHandler} />
console.log(guessRounds);
if(userNumber && guessRounds <= 0){
  content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
} else if(guessRounds>0){
  content = <GameOverScreen rounds={guessRounds} userNumber={userNumber} onRestart={startNewGameHandler}/>
}

  return (
    <View style={styles.screen}>
      <Header title="Guess A Number!"></Header>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
