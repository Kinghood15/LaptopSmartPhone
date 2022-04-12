import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Dimensions, Pressable, TouchableOpacity, TextInput, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Footer from './compoment/Footer_Home';
const WIDTH = Dimensions.get('window').width;

const Account = () => {
    return (
        <View style={styles.fullScreen}>
            <View style={styles.header}>
                <Pressable style={styles.buttongoback} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={24} color="black" />
                </Pressable>
            </View>
            <View style={styles.container}>

            </View>
            <Footer navigation={navigation} />
        </View>
    );
}
const styles = StyleSheet.create({
    fullScreen: {
        width: WIDTH,
        flex: 1,
        alignItems: 'center',
        paddingTop: 25,
        backgroundColor: 'white',
        position: 'relative',
    },
    header: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',

    },
    boxheaderbar: {
        width: '90%',

    },
    buttongoback: {
        position: 'absolute',
        left: 25,
        top: 25,
    },
    container: {
        marginTop: 10,
        width: WIDTH * 0.9,
        padding: 10,
        alignItems: 'center',
        marginBottom: 150,
    },
});
export default Account;