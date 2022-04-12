import React from 'react';
import { Alert, Modal, StyleSheet, Text, Dimensions, Pressable, TouchableOpacity, ScrollView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Main from './compoment/main';
import { StatusBar } from 'expo-status-bar';
const Stack = createNativeStackNavigator();
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const Category = ({ navigation }) => {
    return (
        <View style={styles.fullScreen}>
            <View style={styles.header}>
                <View style={styles.boxheaderbar}>
                    <Pressable style={styles.buttongoback} onPress={() => navigation.goBack()}>
                        <AntDesign name="left" size={24} color="black" />
                    </Pressable>
                    <Text style={styles.titleheaderbar}>Danh mục sản phẩm</Text>
                    <TouchableOpacity
                        style={styles.buttonCart}
                        underlayColor='#eaeaea'
                        onPress={() => navigation.navigate('Cart')}
                    >
                        <AntDesign name="shoppingcart" size={30} color="black" containerStyle={{ marginHorizontal: 15, position: 'relative', }} />
                        {10 > 0 ? (
                            <View
                                style={{
                                    position: 'absolute',
                                    backgroundColor: 'red',
                                    width: 18,
                                    height: 18,
                                    borderRadius: 15 / 2,
                                    right: -5,
                                    top: -5,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <Text
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: "#FFFFFF",
                                        fontSize: 10,
                                    }}>
                                    10
                                </Text>
                            </View>
                        ) : null}
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Main navigation={navigation} />
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
    fullScreen: {
        width: WIDTH,
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    header: {
        width: '100%',
        paddingTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: 'gray',

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
    buttonCart: {
        position: 'absolute',
        right: 0,
        top: 20,
    },
    container: {
        width: '100%',
        padding: 10,
        alignItems: 'center',

    },
});
export default Category;