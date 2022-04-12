import { StatusBar } from 'expo-status-bar';
import React, { useState, } from 'react';
import { StyleSheet, TextInput, Pressable, Image, Text, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const InputSearch = ({navigation}) => {
    const [text, onChangeText] = useState("");
    return (
        <View style={styles.fullScreen}>
            <View style={styles.header}>
                <View style={styles.boxheaderbar}>
                    <Pressable style={styles.buttongoback} onPress={() => navigation.goBack()}>
                        <AntDesign name="left" size={24} color="black" />
                    </Pressable>
                    <Text style={styles.titleheaderbar}>Tìm kiếm</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.Search}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Tìm kiếm tên sản phẩm"
                    />
                    <Pressable
                        style={styles.buttonSearch}
                        underlayColor='#eaeaea'>
                        <AntDesign name="search1" size={24} color="black" />
                    </Pressable>
                </View>
                {/* <View style={styles.boxhistoryandsearchsuggestion}>
                    <Text style={{ padding: 10, fontSize: 18, fontWeight: 'bold', textAlign: 'left' }}>Lịch sử tìm kiếm</Text>
                    <View style={styles.listboxitem}>
                        <View style={styles.boxitem}>
                            <AntDesign name="clockcircleo" size={24} color="gray" style={{padding:10,textAlign:'left'}} />
                            <Text style={{padding:10}}>Computer</Text>
                            <Pressable style={{position:'absolute', right:5, top:20}}>
                                <AntDesign name="close" size={24} color="black" />
                            </Pressable>
                        </View>
                        <View style={styles.boxitem}>
                            <AntDesign name="clockcircleo" size={24} color="gray" style={{padding:10,textAlign:'left'}} />
                            <Text style={{padding:10}}>Computer</Text>
                            <Pressable style={{position:'absolute', right:5, top:20}}>
                                <AntDesign name="close" size={24} color="black" />
                            </Pressable>
                        </View>
                        <View style={styles.boxitem}>
                            <AntDesign name="clockcircleo" size={24} color="gray" style={{padding:10,textAlign:'left'}} />
                            <Text style={{padding:10}}>Computer</Text>
                            <Pressable style={{position:'absolute', right:5, top:20}}>
                                <AntDesign name="close" size={24} color="black" />
                            </Pressable>
                        </View>
                        <View style={styles.boxitem}>
                            <AntDesign name="clockcircleo" size={24} color="gray" style={{padding:10,textAlign:'left'}} />
                            <Text style={{padding:10}}>Computer</Text>
                            <Pressable style={{position:'absolute', right:5, top:20}}>
                                <AntDesign name="close" size={24} color="black" />
                            </Pressable>
                        </View>
                    </View>
                </View> */}
                {/* <View style={styles.boxhistoryandsearchsuggestion}>
                    <Text style={{ padding: 10, fontSize: 18, fontWeight: 'bold', textAlign: 'left' }}>Gợi ý tìm kiếm</Text>
                    <View style={styles.listboxitem}>
                        <View style={styles.boxitem}>
                            <AntDesign name="search1" size={24} color="gray" style={{padding:10,textAlign:'left'}} />
                            <Text style={{padding:10}}>Samsung</Text>
                        </View>
                        <View style={styles.boxitem}>
                            <AntDesign name="search1" size={24} color="gray" style={{padding:10,textAlign:'left'}} />
                            <Text style={{padding:10}}>Samsung</Text>
                        </View>
                        <View style={styles.boxitem}>
                            <AntDesign name="search1" size={24} color="gray" style={{padding:10,textAlign:'left'}} />
                            <Text style={{padding:10}}>Samsung</Text>
                        </View>
                    </View>
                </View> */}
                <View style={styles.boxhistoryandsearchsuggestion}>
                    <View style={styles.boximage}>
                        <Image style={styles.image} source={require('../Emoj.png')} />
                        <Text style={{ padding: 10,textAlign:'center' }}>Không tìm thấy sản phẩm phù hợp</Text>
                        <Text style={{ color:'gray',textAlign:'center', }}>Vui lòng thử sử dụng các từ khóa khác để tìm tên sản phẩm </Text>
                    </View>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>

    );
}
const styles = StyleSheet.create({
    fullScreen: {
        width: WIDTH,
        height: HEIGHT * 1.5,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    header: {
        width: '100%',
        paddingTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
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
    container: {
        width: '90%',
        height: 70,
        padding: 10,
        alignItems: 'center',

    },
    Search: {
        width: '100%',
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
        width: '90%'
    },
    buttonSearch: {
        position: 'absolute',
        right: 0,
        padding: 16,
    },
    boxhistoryandsearchsuggestion: {
        width: '100%',
        paddingTop: 10,

    },
    listboxitem: {

    },
    boxitem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 5,
    },
    boximage: {
        marginTop:100,
        width: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        height:'auto',
        padding:50,
    },
    image: {
        width: 50,
        height: 50,
    }
});



export default InputSearch;