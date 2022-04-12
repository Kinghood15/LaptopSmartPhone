import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,TouchableHighlight, ScrollView, Image, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const SuccessOrder = ({ navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableHighlight onPress={() => navigation.navigate('Home')}
                style={styles.buttonClose}
                underlayColor='#eaeaea'>
                    <MaterialCommunityIcons name="close" size={40} color="skyblue" />
                </TouchableHighlight>
            </View>
            <View style={styles.main}>
                
                <AntDesign style={styles.CheckSuccess} name="checkcircle" size={90} color="#2bd994" />
                <Text style={{fontSize:30,fontWeight:'bold'}}>Thành công!</Text>
                <Text style={{textAlign: 'center',padding:15}}>Đơn hàng đã đươc đặt thành công. Để kiểm tra thông tin vui lòng truy cập "Đơn hàng của tôi" trong tab "Hồ sơ cá nhân"</Text>
                <TouchableHighlight
                style={styles.buttonmyorder}
                underlayColor='#f68889'>
                    <View style={styles.BoxButtonMyOrder}>
                        <Text style={{color:'white',fontSize:18,textAlign:'center',padding:10}}>Đơn hàng của tôi</Text>
                        <View style={styles.BoxBoxRight}>
                            <AntDesign style={{padding:7}} name="right" size={24} color="skyblue" />
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
            <StatusBar style="auto" />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
    },
    header:{
        paddingTop:25,
    },
    buttonClose:{
        display:'flex',
        alignSelf:'flex-end',
        padding:5
    },
    main:{
        width:'90%',
        alignItems:'center',
        textAlign:'center',
        alignSelf:'center',
    },
    CheckSuccess: {
        padding:40,
    },
    BoxButtonMyOrder: {
        flexDirection: 'row',
        padding:10,
        marginTop:40,
        width:280,
        borderWidth:0.5,
        borderRadius:40,
        borderColor:'skyblue',
        backgroundColor:'skyblue',
        display:'flex',
        justifyContent:'space-around',
    },
    BoxBoxRight:{
        justifyContent:'center',
        width:40,
        height:40,
        borderWidth:0.5,
        backgroundColor:'#ffffff',
        borderRadius:50,
        borderColor:'skyblue',
        alignItems:'center'
    }
});
export default SuccessOrder;