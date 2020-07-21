import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import ColorBase from '../constants/colors';
import FontFamily from '../constants/font-family';

export const GameOver = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.overTitle}>
                The Game Is Over!
            </Text>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../../assets/success.png')}
                    resizeMode='cover'
                />
            </View>
            <Text>
                Your phone needed <Text style={styles.highlight}>{props.numberOfGuesses}</Text> rounds
            </Text>
            <Text>
                to guess the number <Text style={styles.highlight2}>{props.userNumber}</Text>
            </Text>
            <View style={styles.bigMargin}>
                <Button title='New Game' onPress={props.onNewGame}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bigMargin: {
        marginVertical: 25
    },
    overTitle: {
        marginVertical: 5,
        fontSize: 22
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        borderRadius: 50,
        borderWidth: 3,
        borderColor: 'black',
        width: '80%',
        height: 300,
        overflow: 'hidden',
        marginVertical: 10
    },
    highlight: {
        color: ColorBase.primary,
        fontFamily: FontFamily.openSansBold
    },
    highlight2: {
        color: ColorBase.secondary,
        fontFamily: FontFamily.openSansBold
    }
});

export default GameOver;
