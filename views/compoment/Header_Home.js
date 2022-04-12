import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Pressable, ScrollView, Image, Text, View, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const WIDTH = Dimensions.get('window').width;
const Header = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logo}>Acodern</Text>
                <View style={styles.boxcart}>
                    <TouchableOpacity
                        style={styles.buttonPlus}
                        underlayColor='#eaeaea'>
                        <Ionicons name="notifications-outline" size={24} color="black" containerStyle={{ marginHorizontal: 15, position: 'relative', }} />
                        {10 > 0 ? (
                            <View
                                style={{
                                    position: 'absolute',
                                    backgroundColor: 'red',
                                    width: 16,
                                    height: 16,
                                    borderRadius: 15 / 2,
                                    right: 5,
                                    top: 0,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <Text
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: "#FFFFFF",
                                        fontSize: 8,
                                    }}>
                                    10
                                </Text>
                            </View>
                        ) : null}

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonPlus}
                        underlayColor='#eaeaea'
                        onPress={() => navigation.navigate('Cart')}
                        >
                        
                        <AntDesign name="shoppingcart" size={24} color="black" containerStyle={{ marginHorizontal: 15, position: 'relative', }} />
                        {10 > 0 ? (
                            <View
                                style={{
                                    position: 'absolute',
                                    backgroundColor: 'red',
                                    width: 16,
                                    height: 16,
                                    borderRadius: 15 / 2,
                                    right: 5,
                                    top: 0,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <Text
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: "#FFFFFF",
                                        fontSize: 8,
                                    }}>
                                    10
                                </Text>
                            </View>
                        ) : null}

                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.BoxSearch}>
                <Pressable onPress={() => navigation.navigate('InputSearch')} >
                    <View style={styles.Search}>
                        <Text style={styles.input}>Tìm kiếm tên sản phẩm</Text>
                        <Text style={styles.buttonSearch}>
                            <AntDesign name="search1" size={24} color="black" />
                        </Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        borderBottomWidth: 0.2,
        borderBottomColor: '#0C1A30'
    },
    header: {
        flexDirection: 'row',
        position: 'relative',
        width: '95%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontSize: 21,
        fontWeight: 'bold',
        color: 'skyblue',
    },
    boxcart: {
        flexDirection: 'row',
        position: 'absolute',
        right: 0,

    },
    buttonPlus: {
        padding: 5,
        paddingRight: 10,
    },
    BoxSearch: {
        flexDirection: 'row',
        position: 'relative',
        width: WIDTH*0.95,
        height: 70,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Search: {
        width: WIDTH*0.9,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: '#FAFAFA',
        backgroundColor: '#FAFAFA',
        flexDirection: 'row',
    },
    input: {
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 20,
        paddingRight: 20,
        width: '100%',
        opacity:0.5,
    },
    buttonSearch: {
        position: 'absolute',
        right: 0,
        padding: 16,
        // backgroundColor:'#eaeaea'
    }
});
export default Header;