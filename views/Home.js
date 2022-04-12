import React, { Component } from 'react';
import { StyleSheet, TextInput, TouchableHighlight, ScrollView, Image, Text, View } from 'react-native';
import Header from './compoment/Header_Home';
import Carousel from './compoment/Carousel';
import Main from './compoment/main_Home';
import Footer from './compoment/Footer_Home';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Carousel />
                <Main navigation={navigation} />
            </ScrollView>
            <Footer navigation={navigation} />
            <StatusBar style="auto" />
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 25,
    },
});

export default Home;