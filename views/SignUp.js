import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Dimensions, Pressable, TouchableOpacity, ScrollView, TextInput, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const WIDTH = Dimensions.get('window').width;

const SignUp = ({ navigation }) => {
    const [onHidePassword, setOnHidePassword] = useState(true);
    return (
        <View style={styles.fullScreen}>
            <View style={styles.header}>
                <Pressable style={styles.buttongoback} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={24} color="black" />
                </Pressable>
            </View>
            <ScrollView>
                <View style={styles.container}>

                    <View style={styles.BoxTitle}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.Title}>Chào mừng bạn trở lại tới</Text><Text style={{ color: 'skyblue', fontSize: 20, fontWeight: 'bold', }}> Acodern</Text>
                        </View>
                        <Text style={styles.SubTitle}>Vui lòng nhập dữ liệu để đăng ký</Text>
                    </View>
                    <View style={styles.BoxForm}>
                        <View style={styles.BoxInput}>
                            <View style={styles.BoxInputForm}>
                                <Text>Họ:</Text>
                                <TextInput style={styles.BoxInputUsername} placeholder="Nhập họ của bạn" required />
                            </View>
                            <View style={styles.BoxInputForm}>
                                <Text>Tên:</Text>
                                <TextInput style={styles.BoxInputUsername} placeholder="Nhập tên của bạn" required />
                            </View>
                        </View>
                        <View style={styles.BoxInput}>
                            <View style={styles.BoxInputFullForm}>
                                <Text>Địa chỉ:</Text>
                                <TextInput style={styles.BoxInputUsername} placeholder="Nhập địa chỉ" required />
                            </View>
                        </View>
                        <View style={styles.BoxInput}>
                            <View style={styles.BoxInputForm}>
                                <Text>Huyện/Quận:</Text>
                                <TextInput style={styles.BoxInputUsername} placeholder="Nhập huyện, quận" required />
                            </View>
                            <View style={styles.BoxInputForm}>
                                <Text>Thành phố:</Text>
                                <TextInput style={styles.BoxInputUsername} placeholder="Nhập thanh phố" required />
                            </View>
                        </View>
                        <View style={styles.BoxInput}>
                            <View style={styles.BoxInputFullForm}>
                                <Text>Email:</Text>
                                <TextInput style={styles.BoxInputUsername} placeholder="Nhập email của bạn" required />
                            </View>
                        </View>
                        <View style={styles.BoxInput}>
                            <View style={styles.BoxInputFullForm}>
                                <Text>Số điện thoại:</Text>
                                <TextInput style={styles.BoxInputUsername} placeholder="Nhập số điện thoại của bạn" required />
                            </View>
                        </View>
                        <View style={styles.BoxInput}>
                            <View style={styles.BoxInputFullForm}>
                                <Text>Email/Tên đăng nhập:</Text>
                                <TextInput style={styles.BoxInputUsername} placeholder="Nhập tên đăng nhập hoặc email" required />
                            </View>
                        </View>
                        <View style={styles.BoxInput}>
                            <View style={styles.BoxInputFullForm}>
                                <Text>Mật khẩu:</Text>
                                <View style={styles.BoxHidePassword}>
                                    <TextInput style={{ width: '85%', height: 40, paddingLeft: 10 }} secureTextEntry={onHidePassword ? true : false} placeholder="Nhập mật khẩu" required />
                                    <Entypo style={{ paddingRight: 10 }} name={onHidePassword ? 'eye' : 'eye-with-line'} onPress={() => setOnHidePassword(!onHidePassword)} size={20} color="black" />
                                </View>
                            </View>
                        </View>
                    </View>
                    <Pressable style={styles.buttonSignUp}>
                        <Text style={styles.titleSignUp}>Đăng ký</Text>
                    </Pressable>

                </View>
            </ScrollView>
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
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',

    },
    boxheaderbar: {
        width: '90%',

    },
    buttongoback: {
        position: 'absolute',
        left: 15,
        top: 15,
    },
    container: {
        width: WIDTH * 0.9,
        padding: 10,
        alignItems: 'center',
       
    },
    BoxTitle: {
        width: WIDTH * 0.9,
        paddingTop: 10,
        paddingBottom: 10,
    },
    Title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    SubTitle: {
        fontSize: 16,
        color: 'gray',
    },
    BoxForm: {
        width: '100%',
        paddingTop: 20,
        paddingBottom: 20,
    },
    BoxInput: {
        padding: 5,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    BoxInputUsername: {
        width: '100%',
        backgroundColor: '#FAFAFA',
        borderRadius: 10,
        height: 40,
        paddingLeft: 10
    },
    BoxInputForm: {
        width: '48%',
    },
    BoxInputFullForm: {
        width: '100%'
    },
    BoxHidePassword: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#FAFAFA',
        borderRadius: 10,
        height: 40,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonSignUp: {
        width: '100%',
        backgroundColor: '#FAFAFA',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'skyblue',
        borderRadius: 10,
    },
    titleSignUp: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    footer: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',

    },
    footerleft: {

    },
    textforgotpassword: {

    },

    footerright: {

    },
    textsignup: {

    }
});
export default SignUp;