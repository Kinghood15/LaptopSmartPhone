import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Dimensions, Pressable, TouchableOpacity, TextInput, View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Footer from './compoment/Footer_Home';
const WIDTH = Dimensions.get('window').width;

const Account = ({ navigation }) => {
    return (
        <View style={styles.fullScreen}>
            <View style={styles.header}>
                <Pressable style={styles.buttongoback} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={24} color="black" />
                </Pressable>
            </View>
            <View style={styles.container}>
                <View style={{ width: WIDTH, backgroundColor: 'skyblue', alignItems: 'center' }}>
                    <View style={styles.BoxTopContainer}>
                        <View style={styles.BoxLogo}>
                            <Image style={styles.BoxLogoAccount} source={{ uri: 'data:image/png;base64,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', }} />
                        </View>
                        <View style={styles.BoxButtonAccess}>
                            <Pressable style={styles.BoxButton} onPress={() => navigation.navigate('SignIn')}>
                                <View>
                                    <Text>Đăng nhập</Text>
                                </View>
                            </Pressable>
                            <Pressable style={styles.BoxButton} onPress={() => navigation.navigate('SignUp')}>
                                <View>
                                    <Text>Đăng ký</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </View>
                <View style={styles.BoxBottomContainer}>
                    <View style={styles.BoxProductInvoice}>
                        <View style={styles.BoxTopProductInvoice}>
                            <View style={styles.BoxLeftTopProductInvoice}>
                                <Entypo name="text-document-inverted" size={24} color="black" />
                                <Text>Đơn mua</Text>
                            </View>
                            <View style={styles.BoxRightTopProductInvoice}>
                                <Text>Xem lich sử mua hàng</Text>
                            </View>
                        </View>
                        <View style={styles.BoxBottomProductInvoice}>
                            <View style={styles.BoxButtonProductInvoiceCheck}>
                                <AntDesign name="wallet" size={24} color="black" />
                                <Text  style={{fontSize:12}}>Chờ lấy hàng</Text>
                            </View>
                            <View style={styles.BoxButtonProductInvoiceCheck}>
                                <AntDesign name="inbox" size={24} color="black" />
                                <Text  style={{fontSize:12}}>Đang giao</Text>
                            </View>
                            <View style={styles.BoxButtonProductInvoiceCheck}>
                                <MaterialIcons name="local-shipping" size={24} color="black" />
                                <Text  style={{fontSize:12}}>Chờ xác nhận</Text>
                            </View>
                            <View style={styles.BoxButtonProductInvoiceCheck}>
                                <MaterialIcons name="stars" size={24} color="black" />
                                <Text style={{fontSize:12}}>Đánh giá</Text>
                            </View>
                        </View>
                    </View>
                </View>
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
        backgroundColor: 'skyblue'
    },
    boxheaderbar: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttongoback: {
        position: 'absolute',
        left: 15,
        top: 15,
    },
    container: {
        width: WIDTH * 0.9,
        alignItems: 'center',
        marginBottom: 150,
    },
    BoxTopContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: WIDTH * 0.95,
        padding: 10
    },
    BoxLogo: {

    },
    BoxLogoAccount: {
        width: 80,
        height: 80,
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    BoxButtonAccess: {
        flexDirection: 'row',

        width: 250,
        justifyContent: 'space-around'
    },
    BoxButton: {
        width: 100,
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        borderColor: 'skyblue',
        borderWidth: 0.5,
        alignItems: "center",
        justifyContent: "center",
    },
    BoxBottomContainer:{
        flexDirection: 'row',
        width:WIDTH,
    },
    BoxProductInvoice:{
        width:WIDTH,
        alignItems: 'center',
    },
    BoxTopProductInvoice:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: WIDTH * 0.9,
        padding: 10
    },
    BoxLeftTopProductInvoice:{
        flexDirection: 'row',
        width:100,
        justifyContent:'space-between',
        alignItems: 'center',
    },
    BoxRightTopProductInvoice:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    BoxBottomProductInvoice:{
        width: WIDTH,
        flexWrap:'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    BoxButtonProductInvoiceCheck:{
        alignItems: 'center',
        justifyContent: 'center',
        width:80,
        height:80,
    }
});
export default Account;