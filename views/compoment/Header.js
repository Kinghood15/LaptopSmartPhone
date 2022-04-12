import { StatusBar } from 'expo-status-bar';
import React, { useState, } from 'react';
import { StyleSheet, TextInput, TouchableHighlight, ScrollView, Image, Text, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <View style={styles.boxheaderbar}>
                <TouchableHighlight style={styles.buttongoback}>
                    <AntDesign name="left" size={24} color="black" />
                </TouchableHighlight>
                <Text style={styles.titleheaderbar}>{title}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        width: '100%',
        paddingTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,


    },
    boxheaderbar: {
        width: '90%',
        position: 'relative',
        alignItems: 'center',
    },
    buttongoback: {
        position: 'absolute',
        left: 0,
        top: 20,
    },
    titleheaderbar: {
        padding: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
});



export default Header;