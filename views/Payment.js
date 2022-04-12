import React, { useState } from 'react';
import { StyleSheet, Text, Dimensions, Pressable, TextInput, TouchableOpacity, Image, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const Payment = ({ navigation}) => {
    return (
        <View style={styles.fullScreen}>
            <View style={styles.header}>
                <View style={styles.boxheaderbar}>
                    <Pressable style={styles.buttongoback} onPress={() => navigation.goBack()} >
                        <AntDesign name="left" size={24} color="black" />
                    </Pressable>
                    <Text style={styles.titleheaderbar}>Thanh toán</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.BoxAddressUser}>
                    <View style={styles.BoxLeftAddress}>
                        <Entypo name="location" size={24} color="skyblue" />
                    </View>
                    <View style={styles.BoxRightAddress}>
                        <View style={styles.BoxLeftContextUser}>
                            <Text style={styles.TitleAddress}>
                                Địa chỉ nhận hàng:
                            </Text>
                            <Text style={styles.ContextAddress}>
                                Thành An | (+84 335 555 928)
                            </Text>
                            <Text>Nam Từ Liêm Hà Nội</Text>
                        </View>
                        <View style={styles.BoxRightContextUser}>
                            <AntDesign name="right" size={16} color="black" />
                        </View>
                    </View>
                </View>
                <View style={styles.BoxProductUser}>
                    <Image style={styles.BoxProductImage} source={require('../1.jpg')} />
                    <View style={styles.BoxContentProduct}>
                        <Text style={styles.TitleProduct} >Samsung Galaxy A72 8Gb 256Gb</Text>
                        <View style={styles.BoxPrice}>
                            <Text>10.000.000 VNĐ</Text>
                            <Text>x1</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.BoxShipUser}>
                    <Text style={styles.TitleShip}>Phương thức vận chuyển</Text>
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={styles.BoxDateShip}>
                                <Text style={styles.TitleDateShip}>Nhanh</Text>
                                <Text style={styles.TextDateShip}>Nhận hàng vào </Text>
                            </View>
                            <View style={styles.TitlePriceShip}>
                                <Text style={{ fontSize: 14 }}>45.100 VNĐ</Text>
                                <AntDesign name="right" size={16} color="black" style={{ alignItems: 'center', justifyContent: 'center', padding: 10 }} />
                            </View>
                        </View>
                        <Text style={{ lineHeight: 20 }}>(Do ảnh hưởng của Covid-19, thời gian giao hàng có thể dài hơn dự kiến từ 1-3 ngày) </Text>
                    </View>
                </View>
                <View style={styles.BoxRemarkUser}>
                    <Text>Ghi chú</Text>
                    <TextInput placeholder="Lưu ý cho Người bán và vận chuyển" />
                </View>
                <View style={styles.BoxListTotalUser}>
                    <View style={styles.BoxTotalUser}>
                        <Text style={styles.textprice}>Tổng tiền hàng:</Text>
                        <Text style={styles.textprice}>10.000.000 VNĐ</Text>
                    </View>
                    <View style={styles.BoxTotalUser}>
                        <Text style={styles.textprice}>Tổng tiền phí vận chuyển:</Text>
                        <Text style={styles.textprice}>10.000.000 VNĐ</Text>
                    </View>
                    <View style={styles.BoxTotalUser}>
                        <Text style={styles.textTitleprice}>Tổng thanh toán:</Text>
                        <Text style={styles.textNumberprice}>10.000.000 VNĐ</Text>
                    </View>
                </View>
                <View style={styles.BoxRule}>
                    <Entypo name="text-document" size={24} color="skyblue" />
                    <Text style={{ width: WIDTH - 50, paddingLeft: 10, paddingRight: 10 }}>Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân thủ <Text>Điều khoản Acodern</Text></Text>
                </View>
            </View>
            <View style={styles.footer}>
                <Pressable style={styles.buttonorder} onPress={() => navigation.navigate('SuccessOrder')}>
                    <View style={styles.buttonboxorder}>
                        <Text style={{fontSize:18,color:'black'}}>Đặt hàng</Text>
                    </View>
                </Pressable>
            </View>
            <StatusBar style="auto" />
        </View>
    );

};

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
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.4
    },
    boxheaderbar: {
        width: '90%',
        position: 'relative',
        alignItems: 'center',
    },
    buttongoback: {
        position: 'absolute',
        left: 0,
        top: 25,
    },
    boxbuttonheader: {
        position: 'absolute',
        right: 0,
        top: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonnotifications: {
        paddingLeft: 5,
        paddingRight: 5,
    },
    titleheaderbar: {
        padding: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        width: WIDTH,
        alignItems: 'center',
        justifyContent: 'center',
    },
    BoxAddressUser: {
        width: '100%',
        padding: 10,
        borderBottomWidth: 0.5,
        borderColor: 'gray',
        flexDirection: 'row',

    },
    BoxLeftAddress: {
        padding: 10,
        alignItems: 'center',

    },
    BoxRightAddress: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: WIDTH - 70,

    },
    BoxLeftContextUser: {
        padding: 5,
    },
    TitleAddress: {
        fontWeight: 'bold',
    },
    ContextAddress: {

    },
    BoxRightContextUser: {

    },
    BoxProductUser: {
        width: WIDTH,
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 0.5,
    },
    BoxProductImage: {
        width: 100,
        height: 100,
    },
    BoxContentProduct: {
        width: WIDTH - 120,
        padding: 10,
        justifyContent: 'space-between',
    },
    TitleProduct: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    BoxPrice: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    BoxShipUser: {
        padding: 10,
        width: WIDTH,
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
    },
    TitleShip: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    BoxDateShip: {

    },
    TitleDateShip: {

    },
    TextDateShip: {

    },
    TitlePriceShip: {
        flexDirection: 'row',
    },
    BoxRemarkUser: {
        width: WIDTH,
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        justifyContent: 'space-between',
    },
    BoxListTotalUser: {
        width: WIDTH,
        padding: 10,
    },
    BoxTotalUser: {
        width: WIDTH - 20,
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textprice: {

    },
    textNumberprice: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    BoxRule: {
        width: WIDTH,
        flexDirection: 'row',
        padding: 10,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        width: WIDTH,
        height: 80,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#E9EDF0',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
    buttonorder: {
        width: 150,
        height: 50,
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:20,
        position: 'absolute',
        right:20,
    },
    buttonboxorder: {

    }
});
export default Payment;