import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from "./Header/Header";
import StartGameScreen from "../screens/StartGameScreen";
import GameScreen from "../screens/GameScreen";
import GameOver from "../screens/GameOver";
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

const fetchFonts = () => {
    Font.loadAsync({
        'open-sans': require('../../assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('../../assets/fonts/OpenSans-Bold.ttf')
    });
};

export const GuessNumberMainPage = () => {
    const [userNumber, setUserNumber] = useState(undefined);
    const [guessRounds, setGuessRounds] = useState(0);
    const [dataLoaded, setDataLoaded] = useState(false);

    if (!dataLoaded) {
        return (<AppLoading
            startAsync={fetchFonts}
            onFinish={() => setDataLoaded(true)}
            onError={(err) => console.error(err)}
        />);
    }

    const configureNewGameHandler = () => {
        setUserNumber(undefined);
        setGuessRounds(0);
    };
    const startGameHandler = selectedNumber => {
        setUserNumber(selectedNumber);
        setGuessRounds(0);
    };
    const gameOverHandler = numberOfGuesses => {
        setGuessRounds(numberOfGuesses);
    };

    // Page Logic
    let content = <StartGameScreen onStartGame={startGameHandler}/>;
    if (userNumber && guessRounds <= 0) {
        content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
    }
    if (guessRounds > 0) {
        content = <GameOver
            numberOfGuesses={guessRounds}
            userNumber={userNumber}
            onNewGame={configureNewGameHandler}
        />
    }

    return (
        <View style={styles.screen}>
            <Header title='Guess A Number'/>
            {content}
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});

export default GuessNumberMainPage;
