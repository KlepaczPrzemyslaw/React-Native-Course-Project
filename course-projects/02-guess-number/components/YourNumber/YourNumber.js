import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ColorBase from '../../constants/colors';

export const YourNumber = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{props.number}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: ColorBase.secondary,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: ColorBase.secondary,
        fontSize: 22
    }
});

export default YourNumber;
