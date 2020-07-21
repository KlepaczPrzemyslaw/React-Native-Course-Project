import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ColorBase from '../../constants/colors';
import FontFamily from '../../constants/font-family';

export const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: ColorBase.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        color: 'black',
        fontSize: 18,
        fontFamily: FontFamily.openSansBold
    }
});

export default Header;
