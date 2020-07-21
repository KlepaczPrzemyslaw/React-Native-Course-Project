import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export const Input = props => {
    return <TextInput {...props} style={styles.input}/>;
};

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10,
        borderRadius: 5,
        width: '30%',
        textAlign: 'center'
    }
});

export default Input;
