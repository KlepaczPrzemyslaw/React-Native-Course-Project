import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Button, Text} from 'react-native';
import GoalItem from "./GoalItem/GoalItem";
import GoalInput from "./GoalInput/GoalInput";

export const BaseAppMainPage = () => {
    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    const addGoalHandler = newGoal => {
        setCourseGoals(currentGoals => [...currentGoals,
            {id: Math.random().toString(), value: newGoal}
        ]);
        setIsAddMode(false);
    };

    const onDeleteHandler = itemId =>
        setCourseGoals(currentGoals => currentGoals.filter(x => x.id !== itemId));

    const onCloseModal = () =>
        setIsAddMode(false);

    return (
        <View style={styles.screen}>
            <View style={styles.button}><Button title="Add New Goal" onPress={() => setIsAddMode(true)}/></View>
            <GoalInput onAddNewGoal={addGoalHandler} onCloseModal={onCloseModal} isModalOpened={isAddMode}/>
            <Text>Your Goals</Text>
            <FlatList
                style={styles.list}
                data={courseGoals}
                keyExtractor={(item, index) => item.id}
                renderItem={itemData =>
                    <GoalItem onGoalDelete={onDeleteHandler} goal={itemData.item}/>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 50,
        alignItems: 'center'
    },
    button: {
        width: '100%',
        marginBottom: 5
    },
    list: {
        width: '100%',
        textAlign: 'center'
    }
});

export default BaseAppMainPage;
