import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import Card from "../components/Card/Card";
import ColorBase from '../constants/colors';
import Input from "../components/Input/Input";
import YourNumber from "../components/YourNumber/YourNumber";
import FontFamily from '../constants/font-family';

export const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(undefined);

    const inputHandler = inputText => {
        // Replace
        let validInput = inputText.replace(/[^0-9]/g, '');
        // Cut
        if (validInput.length > 2) {
            validInput = validInput.substring(0, 2);
        }
        // Result
        setEnteredValue(validInput);
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        // Validation
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) ||
            chosenNumber <= 0 ||
            chosenNumber >= 100) {
            Alert.alert('Invalid number!', 'You must enter a number between 1 and 99.', [{
                text: 'Okay', style: 'destructive', onPress: resetInputHandler
            }]);
            return;
        }

        // State
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        // Reset
        Keyboard.dismiss();
    };

    let confirmedOutput;
    if (confirmed) {
        confirmedOutput = (
            <Card>
                <Text>You selected</Text>
                <YourNumber number={selectedNumber}/>
                <Button color={ColorBase.primary} title='START GAME' onPress={() => props.onStartGame(selectedNumber)}/>
            </Card>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.screenTitle}>Start A New Game!</Text>
                <Card>
                    <Text style={styles.text}>Select A Number</Text>
                    <Input
                        blurOnSubmit
                        autoCorrect={false}
                        keyboardType='number-pad'
                        maxLength={2}
                        onChangeText={inputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonWrapper}>
                            <Button
                                color={ColorBase.secondary}
                                title='Reset'
                                onPress={resetInputHandler}
                            />
                        </View>
                        <View style={styles.buttonWrapper}>
                            <Button
                                type='submit'
                                color={ColorBase.primary}
                                title='Confirm'
                                onPress={confirmInputHandler}
                            />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    screenTitle: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: FontFamily.openSansBold
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    buttonWrapper: {
        width: '40%'
    },
    text: {
        fontFamily: FontFamily.openSans
    }
});

export default StartGameScreen;
