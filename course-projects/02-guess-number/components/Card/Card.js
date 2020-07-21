import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Card = props => {
    return (
        <View style={styles.cardContainer}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        width: 360,
        maxWidth: '80%',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 15,
        marginTop: 15,
        // iOS
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 6,
        // Android
        elevation: 5,
    }
});

export default Card;
