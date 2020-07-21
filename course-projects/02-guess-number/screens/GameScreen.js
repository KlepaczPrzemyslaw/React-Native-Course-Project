import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import YourNumber from "../components/YourNumber/YourNumber";
import Card from "../components/Card/Card";
import {Ionicons} from '@expo/vector-icons';
import ColorBase from '../constants/colors';

const generateRandomBetween = (min, max, exclude) => {
    // Prep
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    // Check
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }

    // Result
    return rndNum;
};

const lowerIdentifier = 'lower';
const greaterIdentifier = 'greater';

export const GameScreen = props => {
    // Props prep
    const {userChoice, onGameOver} = props;
    // State
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, userChoice));
    const [numberOfGuesses, setNumberOfGuesses] = useState(0);
    // This state will "survive" a re-render
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    // EndGame
    useEffect(() => {
        if (currentGuess === userChoice) {
            // Some timeout is nice
            setTimeout(() => onGameOver(numberOfGuesses), 1000);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = direction => {
        // Validation
        if ((direction === lowerIdentifier && currentGuess < userChoice) ||
            (direction === greaterIdentifier && currentGuess > userChoice) ||
            currentGuess === userChoice) {
            Alert.alert('Do not lie!', 'You know that this is wrong answer...', [{
                text: 'Sorry!', style: 'cancel'
            }]);
            return;
        }

        if (direction === lowerIdentifier) {
            currentHigh.current = currentGuess;
        } else if (direction === greaterIdentifier) {
            currentLow.current = currentGuess;
        }

        setNumberOfGuesses(currentRoundQty => currentRoundQty + 1);
        setCurrentGuess(
            generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        );
    };

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <YourNumber number={currentGuess}/>

            <Card>
                <Text style={styles.text}>The number is <Ionicons
                    name='md-remove' size={12} color={ColorBase.primary}/> or <Ionicons
                    name='md-add' size={12} color={ColorBase.primary}/>
                </Text>
                <View style={styles.buttonContainer}>
                    <Button title='LOWER' onPress={() => nextGuessHandler(lowerIdentifier)}/>
                    <Button title='GREATER' onPress={() => nextGuessHandler(greaterIdentifier)}/>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 300,
        maxWidth: '80%'
    },
    text: {
        marginBottom: 10
    }
});

export default GameScreen;
