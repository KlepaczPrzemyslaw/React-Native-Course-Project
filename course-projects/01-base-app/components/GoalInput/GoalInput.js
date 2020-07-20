import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from "react-native";
import Modal from 'modal-enhanced-react-native-web';

const GoalInput = props => {
    const [currentGoal, setNewGoal] = useState('');

    const goalInputHandler = inputText => setNewGoal(inputText);

    const pressButtonHandler = () => {
        props.onAddNewGoal(currentGoal);
        setNewGoal('');
    };

    return (
        <Modal
            isVisible={props.isModalOpened}
            animationType='slide'
            onBackdropPress={props.onCloseModal}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Add New Course Goal'
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    value={currentGoal}
                />
                <View style={styles.panel}>
                    <View style={styles.button}><Button title='Add' onPress={pressButtonHandler}/></View>
                    <View style={styles.button}><Button color='red' title='Back' onPress={props.onCloseModal}/></View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        backgroundColor: '#fff',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        width: '100%'
    },
    panel: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '70%'
    },
    button: {
        width: '45%'
    }
});

export default GoalInput;
