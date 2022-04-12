import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Alert, Pressable, Modal, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Footer = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.footer}>
            <View style={styles.ListTab}>
                <TouchableOpacity
                    style={styles.buttonPlus}
                    underlayColor='#eaeaea'>
                    <Entypo name="home" size={24} color="gray" />
                </TouchableOpacity>
            </View>
            <View style={styles.ListTab}>
                <TouchableOpacity onPress={() => navigation.navigate('News')}>
                    <FontAwesome name="newspaper-o" size={24} color="gray"
                        containerStyle={{ marginHorizontal: 15, position: 'relative', }}
                    />
                    {10 > 0 ? (
                        <View
                            style={{
                                position: 'absolute',
                                backgroundColor: 'red',
                                width: 16,
                                height: 16,
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
                                    fontSize: 8,
                                }}>
                                10
                            </Text>
                        </View>
                    ) : null}
                </TouchableOpacity>
            </View>
            <View style={styles.ListTabMenu}>
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
                                    <Text style={styles.modalText}>Danh mục sản phẩm</Text>
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => setModalVisible(!modalVisible)}
                                    >
                                        <AntDesign name="close" size={24} color="black" />
                                    </Pressable>
                                </View>
                            </View>
                            <View style={styles.ModalContent}>
                                <View style={styles.ListBoxItem}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Category')}>
                                        <View style={styles.BoxItem}>
                                            <View style={styles.ItemLogo}>
                                                <MaterialIcons name="computer" size={24} color="#3A9B7A" />
                                            </View>
                                            <Text style={styles.ItemName}>Laptop</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={styles.BoxItem}>
                                            <View style={styles.ItemLogo}>
                                                <FontAwesome name="mobile-phone" size={24} color="#FE6E4C" />
                                            </View>
                                            <Text style={styles.ItemName}>Điện thoại</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={styles.BoxItem}>
                                            <View style={styles.ItemLogo}>
                                                <AntDesign name="iconfontdesktop" size={24} color="#FFC120" />
                                            </View>
                                            <Text style={styles.ItemName}>Máy tính bàn</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
                <View style={styles.ListTabActive}>
                    <Pressable
                        style={styles.buttonPlus}
                        underlayColor='#eaeaea'
                        onPress={() => setModalVisible(true)} >
                        <AntDesign name="appstore1" size={24} color="white" />
                    </Pressable>
                </View>
            </View>
            <View style={styles.ListTab}>
                <TouchableOpacity>
                    <AntDesign name="heart" size={24} color="gray"
                        containerStyle={{ marginHorizontal: 15, position: 'relative', }}
                    />
                    {10 > 0 ? (
                        <View
                            style={{
                                position: 'absolute',
                                backgroundColor: 'red',
                                width: 16,
                                height: 16,
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
                                    fontSize: 8,
                                }}>
                                10
                            </Text>
                        </View>
                    ) : null}
                </TouchableOpacity>
            </View>
            <View style={styles.ListTab}>
                <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                    <MaterialCommunityIcons name="account" size={24} color="gray" containerStyle={{ marginHorizontal: 15, position: 'relative', }} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    footer: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'space-around',
        width: '100%',
        height: 60,
        textAlign: 'center',
        backgroundColor: '#E9EDF0',
        alignContent: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    ListTab: {
        padding: 15,
        justifyContent: 'center'
    },
    ListTabMenu: {
        padding: 5,
        justifyContent: 'center',
        paddingBottom: 30,

    },
    ListTabActive: {
        backgroundColor: '#EB1C24',
        width: 60,
        height: 60,
        borderRadius: 50,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },



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
        marginTop: 400,
        position: 'absolute',
        width: '100%',
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
        borderBottomWidth: 0.5,
    },
    Modaltitle: {
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        paddingLeft:20,
        paddingRight:20,
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

        padding: 20,
    },
    ListBoxItem: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    BoxItem: {
        justifyContent: 'center',
        padding: 20,
        textAlign: 'center',
        alignItems: 'center',
    },
    ItemLogo: {
        width: 50,
        height: 50,
        backgroundColor: '#EFF5FB',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginBottom: 10,
    },
    ItemName: {
        textAlign: 'center'
    }
});
export default Footer;