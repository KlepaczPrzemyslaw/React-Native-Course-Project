import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";

const GoalItem = props => {
    return (
        <TouchableOpacity
            style={styles.touchableItem}
            activeOpacity={0.5}
            onPress={() => props.onGoalDelete(props.goal.id)}>
            <View style={styles.listItem}>
                <Text>{props.goal.value}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10
    },
    touchableItem: {
        marginTop: 10,
    }
});

export default GoalItem;
