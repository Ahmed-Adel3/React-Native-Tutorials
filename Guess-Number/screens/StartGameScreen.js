import React ,{useState} from 'react';
import {View, Text,StyleSheet, Button, TouchableWithoutFeedback, Keyboard,Alert} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/Colors';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = props => {
    const [enteredValue,setEnteredValue] = useState('')
    const [confirmed,setConfirmed] = useState(false);
    const [selectedNum,setSelectedNum]=useState('');

    const numberInputHandler = inputText=>setEnteredValue(inputText.replace(/[^0-9]/g,''))
    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }
    const confirmInputHandler = () =>{
        const chosenNum = parseInt(enteredValue);
        if(isNaN(chosenNum)|| chosenNum <=0 || chosenNum >99){
            console.log("10")
           Alert.alert('Invalid number!!','Number has to be between 1 and 99',
           [{text:'Okay',style:'destructive',onPress:resetInputHandler}])
           return;
        }
            setConfirmed(true);
            setSelectedNum(chosenNum)
            setEnteredValue('');
            Keyboard.dismiss();
    }

    let confirmedOutput;
    if(confirmed){
    confirmedOutput =   <Card style={styles.summaryContainer}>
                          <Text>You Selected:</Text>
                          <NumberContainer>{selectedNum}</NumberContainer>
                          <Button title="START GAME" onPress={()=>props.onStartGame(selectedNum)}/>
                        </Card>
    }
    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={styles.screen}>
            <Text style={styles.title}>Start A New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a number</Text>
                <Input style={styles.Input} 
                       blurOnSubmit autCapitalize="none" 
                       autoCorrect={false} 
                       keyboardType="number-pad" 
                       maxLength={2}
                       onChangeText={numberInputHandler}
                       value={enteredValue}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Reset" onPress={resetInputHandler} color={Colors.accent}/></View>
                    <View style={styles.button}><Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary}/></View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',
    },
    title:{
        fontSize:20,
        marginVertical:10,
    },
    inputContainer:{
        width:'80%',
        maxWidth:'80%',
        alignItems:"center"
    },
    buttonContainer:{ 
        flexDirection:'row',
        width:"100%",
        justifyContent:"space-between",
        paddingHorizontal:15
    },
    button:{
        width:100
    },
    input:{
        width:50,
        textAlign:'center',

    },
    summaryContainer:{
        marginTop:20,
        alignItems:'center',

    }
});

export default StartGameScreen;