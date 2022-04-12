import React, { useState, useRef } from 'react';
import { StyleSheet, Text, Dimensions, Pressable, TouchableOpacity, Image, View, ScrollView, TouchableHighlight } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { StatusBar } from 'expo-status-bar';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const Cart = ({ navigation }) => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [isChecked, setChecked] = useState(false);
    const pickerRef = useRef();

    function open() {
        pickerRef.current.focus();
    }

    function close() {
        pickerRef.current.blur();
    }
    return (
        <View style={styles.fullScreen}>
            <View style={styles.header}>
                <View style={styles.boxheaderbar}>
                    <Pressable style={styles.buttongoback} onPress={() => navigation.goBack()} >
                        <AntDesign name="left" size={24} color="black" />
                    </Pressable>
                    <Text style={styles.titleheaderbar}>Giỏ hàng</Text>
                    <View style={styles.boxbuttonheader}>
                        <TouchableOpacity
                            style={styles.buttonPlus}
                            underlayColor='#eaeaea'>
                            <Ionicons name="notifications" size={24} color="black" containerStyle={{ marginHorizontal: 15, position: 'relative', }} />
                            {10 > 0 ? (
                                <View
                                    style={{
                                        position: 'absolute',
                                        backgroundColor: 'red',
                                        width: 16,
                                        height: 16,
                                        borderRadius: 15 / 2,
                                        right: 0,
                                        top: 0,
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
                        <TouchableOpacity
                            style={styles.buttonPlus}
                            underlayColor='#eaeaea'>
                            <Ionicons name="chatbubbles-outline" size={24} color="black" containerStyle={{ marginHorizontal: 15, position: 'relative', }} />
                            {10 > 0 ? (
                                <View
                                    style={{
                                        position: 'absolute',
                                        backgroundColor: 'red',
                                        width: 16,
                                        height: 16,
                                        borderRadius: 15 / 2,
                                        right: 0,
                                        top: 0,
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
            </View>
            <View style={styles.container}>
                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                    <View style={styles.BoxListReview}>
                        <View style={styles.BoxReview}>
                            <View style={styles.BoxImage}>
                                <Image style={styles.BoxProfileImage} source={require('../1.jpg')} />
                            </View>
                            <View style={styles.BoxReviewTitle}>
                                <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                                    <Text style={styles.BoxProfileTitle}>
                                        Yelena Belova
                                    </Text>
                                    <Checkbox
                                        style={styles.checkbox}
                                        value={isChecked}
                                        onValueChange={setChecked}
                                        color={isChecked ? '#4630EB' : undefined}
                                    />
                                </View>
                                <View style={{}}>
                                    <Text style={{ fontSize: 11, paddingLeft: 5 }}>Màu sắc</Text>
                                    <Picker
                                        style={styles.BoxPicker}
                                        ref={pickerRef}
                                        selectedValue={selectedLanguage}
                                        onValueChange={(itemValue, itemIndex) =>
                                            setSelectedLanguage(itemValue)
                                        }>
                                        <Picker.Item label="red" value="red" />
                                        <Picker.Item label="yellow" value="yellow" />
                                    </Picker>
                                </View>
                                <View style={{}}>
                                    <Text style={{ fontSize: 11, paddingLeft: 5 }}>Số lượng</Text>
                                    <View style={styles.quantity}>
                                        <TouchableOpacity style={styles.touchableOpacityminus}>
                                            <AntDesign name="minus" size={16} color="black" />
                                        </TouchableOpacity>
                                        <Text style={styles.textquantity}>1</Text>
                                        <TouchableOpacity style={styles.touchableOpacityminus}>
                                            <AntDesign name="plus" size={16} color="black" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <Text style={styles.BoxProfileContext}>
                                    <Text style={styles.BoxPrice}>10.000.000 VNĐ</Text>
                                </Text>
                            </View>
                        </View>
                        
                    </View>

                </ScrollView>
            </View >
            <View style={styles.footer}>
                <View style={{ backgroundColor: '#efefef', paddingBottom: 10, height: '100%', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
                    <View style={styles.BoxTotalsPrice}>
                        <View style={styles.BoxLeftTotalsPrice}>
                            <Text style={{ textAlign: 'left', paddingTop: 3, paddingBottom: 3, fontWeight: 'bold', fontSize: 18, color: 'black' }}>Thành tiền</Text>
                            <Text style={{ textAlign: 'left', paddingTop: 3, paddingBottom: 3, fontWeight: 'bold', fontSize: 18, color: 'red' }}>10.000.000 VNĐ</Text>
                            <Text style={{ textAlign: 'left', paddingTop: 3, paddingBottom: 3, fontSize: 14, fontWeight: 'bold', color: '#cacaca' }}>Miễn phí vận chuyển nội thành Hà Nội</Text>
                        </View>
                        <View style={styles.BoxRightTotalsPrice}>
                            <Pressable onPress={() => navigation.navigate('Payment')}
                                underlayColor='skyblue'>
                                <View style={styles.BoxButtonMyOrder}>
                                    <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', padding: 10 }}>Đặt hàng</Text>
                                    <View style={styles.BoxBoxRight}>
                                        <AntDesign style={{ padding: 7 }} name="right" size={18} color="skyblue" />
                                    </View>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
            <StatusBar style="auto" />
        </View >
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
    buttonPlus: {
        padding: 5,
    },
    container: {
        width: '100%',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 180,
    },
    scrollView: {
        width: '100%',
    },
    BoxListReview: {
        width: WIDTH * 0.9,
        alignItems: 'center',
        alignSelf: 'center',
        paddingBottom: 20
    },
    BoxReview: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#FAFAFA',
        padding: 10,
        borderWidth: 0.5,
        borderColor: '#FAFAFA',
        borderRadius: 20,

    },
    BoxImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        borderWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'gray',
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 10,
    },
    BoxProfileImage: {
        width: 90,
        height: 90,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    BoxReviewTitle: {
        paddingLeft: 10,
        marginLeft: 20,
        width: WIDTH * 0.9 - 150,


    },
    BoxProfileTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 22,
        padding: 5,
    },
    BoxProfileContext: {
        fontSize: 13,
        lineHeight: 20,
        textAlign: 'justify',
        padding: 5,
        justifyContent: 'space-between',

    },
    BoxPicker: {
        borderWidth: 0.5,
        borderColor: 'gray',
        fontSize: 11
    },
    quantity: {
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'space-between',
        padding: 5,
        margin: 10,
    },
    touchableOpacityminus: {
        width: 20,
        height: 20,
        borderRadius: 50,
        borderWidth: 0.5,
        alignItems: "center",
        justifyContent: "center",
    },
    textquantity: {
        fontSize: 12,
        textAlign: "center",
        alignSelf: 'center',
    },
    BoxPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red',
    },
    footer: {
        width: '100%',
        height: 120,
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#ffffff'
    },
    BoxGiftSell: {
        width: '100%',
        alignItems: 'center',
        padding: 10,
        height: '100%',
        backgroundColor: '#efefef',
        borderTopWidth: 0.5,
        borderColor: 'gray',

    },
    BoxLeftGiftSell: {
        width: '90%',
        alignItems: 'center',
    },
    BoxRightGiftSell: {
        width: '10%',
    },
    BoxTotalsPrice: {
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
        paddingTop: 10,

    },
    BoxLeftTotalsPrice: {
        width: '45%',
    },
    BoxRightTotalsPrice: {
        width: '45%',
        alignItems: 'flex-end',
    },
    BoxButtonMyOrder: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        width: 150,
        borderWidth: 0.5,
        borderRadius: 40,
        borderColor: 'skyblue',
        backgroundColor: 'skyblue',
        display: 'flex',
        justifyContent: 'space-around',
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    BoxBoxRight: {
        width: 30,
        height: 30,
        borderWidth: 0.5,
        backgroundColor: '#ffffff',
        borderRadius: 50,
        alignSelf: 'center',
        borderColor: 'skyblue'
    }

});
export default Cart;