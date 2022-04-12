import React, { useState } from 'react';
import { StyleSheet, Dimensions, TouchableOpacity, Pressable, Modal, Text, View, useWindowDimensions, StatusBar, FlatList } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Checkbox from 'expo-checkbox';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

const ModalAddToCart = ({ modalVisible, setModalVisible }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredViewFullSize} ></View>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.BoxModaltitle}>
                        <View style={styles.Modaltitle}>
                            <Text style={styles.modalText}>Thêm vào giỏ hàng</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <AntDesign name="close" size={24} color="black" />
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.ModalContent}>
                        <View style={styles.Boxquantity}>
                            <Text>Số lượng</Text>
                            <View style={styles.quantity}>
                                <TouchableOpacity>
                                    <AntDesign name="minus" size={24} color="black" />
                                </TouchableOpacity>
                                <Text>1</Text>
                                <TouchableOpacity>
                                    <AntDesign name="plus" size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.Boxcolor}>
                            <Text>Màu sắc</Text>
                            <View style={styles.color}>
                                <TouchableOpacity style={styles.ButtonColor}>
                                    <Text style={styles.ButtonColorText}>Đen</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.ButtonColor}>
                                    <Text style={styles.ButtonColorText}>Trắng</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* <View style={styles.Boxcolor}>
                            <Text>CPU</Text>
                            <View style={styles.quantity}>
                                <TouchableOpacity>
                                    <AntDesign name="minus" size={24} color="black" />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <AntDesign name="plus" size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View> */}
                        <View style={styles.Boxcolor}>
                            <Text>Tổng tiền</Text>
                            <Text style={{fontWeight:'bold'}}>10.000.000 VNĐ</Text>
                        </View>
                        <Pressable style={styles.ButtonBuy} >
                            <Text style={styles.ButtonBuyText}>Mua ngay</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    centeredViewFullSize: {
        backgroundColor: '#E9E9E9',
        opacity: 0.5,
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
        position: 'absolute',
        width: '100%',
        height: 600,
    },
    modalView: {
        width: '90%',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        opacity: 1,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    BoxModaltitle: {
        width: '100%',

    },
    Modaltitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomWidth: 0.5,
        borderColor: 'gray',
        alignItems: 'center',
    },
    modalText: {
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 20,
    },
    button: {
        padding: 10,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonOpen: {

    },
    buttonClose: {

    },
    ModalContent: {
        padding: 10,
        width:'90%',
        alignItems: 'center',
    },
    Boxquantity:{
        
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop:10,
        paddingBottom:10,
        borderBottomWidth:0.5,
        borderColor:'gray',
    },
    quantity:{
        flexDirection: 'row',
        width:100,
        justifyContent: 'space-between',
    },
    color:{
        marginTop:20,
        width:'100%',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    Boxcolor:{
        width: '100%',
        paddingTop:10,
        paddingBottom:10,
        borderBottomWidth:0.5,
        marginBottom:20,
        justifyContent:'space-around',
    },
    ButtonColorText:{
        
    },
    ButtonColor:{
        padding:10,
        alignItems: 'center',
        paddingLeft:30,
        paddingRight:30,
        borderWidth:0.5,
        borderRadius: 10,
    },
    ButtonBuy:{
        width:'90%',
        height:50,
        backgroundColor:'#3669C9',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10,
        
    },
    ButtonBuyText:{
        color:'white',
    },

});
export default ModalAddToCart;

