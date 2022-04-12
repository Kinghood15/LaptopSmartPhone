import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Dimensions, Pressable, TouchableOpacity, TextInput, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const WIDTH = Dimensions.get('window').width;

const SignIn = ({ navigation }) => {
    const [ onHidePassword, setOnHidePassword ] = useState(true);
    return (
        <View style={styles.fullScreen}>
            <View style={styles.header}>
                <Pressable style={styles.buttongoback} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={24} color="black" />
                </Pressable>
            </View>
            <View style={styles.container}>
                <View style={styles.BoxTitle}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.Title}>Chào mừng bạn trở lại tới</Text><Text style={{color: 'skyblue',fontSize:20,fontWeight: 'bold',}}> Acodern</Text>
                    </View>
                    <Text style={styles.SubTitle}>Vui lòng nhập dữ liệu để đăng nhập</Text>
                </View>
                <View style={styles.BoxForm}>
                    <View style={styles.BoxInput}>
                        <Text>Email/Tên đăng nhập:</Text>
                        <TextInput style={styles.BoxInputUsername} placeholder="Nhập tên đăng nhập hoặc email" required />
                    </View>
                    <View style={styles.BoxInput}>
                        <Text>Mật khẩu:</Text>
                        <View style={styles.BoxHidePassword}>
                            <TextInput style={{width:'85%',height:40}} secureTextEntry={onHidePassword ? true : false} placeholder="Nhập mật khẩu" required />
                            <Entypo style={{paddingRight:10}} name={onHidePassword ? 'eye' : 'eye-with-line'}  onPress={() => setOnHidePassword(!onHidePassword)} size={20} color="black" />
                        </View>
                    </View>
                </View>
                <Pressable style={styles.buttonSignIn}>
                    <Text style={styles.titleSignIn}>Đăng nhập</Text>
                </Pressable>
            </View>
            <View style={styles.footer}>
                <View style={styles.footerleft}>
                    <Pressable>
                        <Text style={styles.textforgotpassword}>Quên mật khẩu</Text>
                    </Pressable>
                </View>
                <View style={styles.footerright}>
                    <Pressable>
                        <Text style={styles.textsignup}>Đăng ký</Text>
                    </Pressable>
                </View>
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
        marginTop: 50,
        width: WIDTH * 0.9,
        padding:10,
        alignItems: 'center',
    },
    BoxTitle: {
        width:WIDTH * 0.9,
        paddingTop:20,
        paddingBottom: 20,
    },
    Title: {
        fontSize:20,
        fontWeight: 'bold',
    },
    SubTitle: {
        fontSize:16,
        color:'gray',
    },
    BoxForm: {
        width:'100%',
        paddingTop:20,
        paddingBottom: 20,
    },
    BoxInput: {
        padding:5,
        width:'100%',
        
    },
    BoxInputUsername:{
        width:'100%',
        backgroundColor:'#FAFAFA',
        borderRadius:10,
        height:40,
    },
    BoxHidePassword:{
        flexDirection: 'row',
        width:'100%',
        backgroundColor:'#FAFAFA',
        borderRadius:10,
        height:40,
        alignItems: 'center',
        justifyContent:'space-between',
    },
    buttonSignIn:{
        width:'100%',
        backgroundColor:'#FAFAFA',
        height:50,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'skyblue',
        borderRadius:10,
    },
    titleSignIn: {
        color:'white',
        fontSize:20,
        fontWeight:'bold',
    },
    footer: {
        flexDirection: 'row',
        width:'90%',
        justifyContent:'space-between',
        
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
export default SignIn;