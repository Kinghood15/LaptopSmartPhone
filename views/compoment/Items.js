import React from 'react';
import { StyleSheet, TextInput, Dimensions, TouchableOpacity, ScrollView, Image, Text, View, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const ITEM_WIDTH = Dimensions.get('window').width * 0.45;
const ITEM_HEIGHT = Dimensions.get('window').width * 0.7;

const Items = ({ navigation, product }) => {
    return (
        <Pressable style={styles.container} onPress={() => navigation.navigate('ProductDetails')}>
            {/* console.log(product._id); */}
            <View style={styles.boxImageProduct}>
                <Image style={styles.image} source={require('../../1.jpg')} />
                <AntDesign name="hearto" size={20} color="black" style={styles.iconheart} />
            </View>
            <View style={styles.boxcontentProduct}>
                <Text style={styles.nameProduct}>Samsung Galaxy A72 8Gb\/ 256Gb - Trắng</Text>
                <Text style={styles.priceProduct}>4500000 VNĐ</Text>
                <View style={styles.boxProductReview}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text>
                            <AntDesign name="star" size={15} color="#FFC120" />
                            4.6
                        </Text>
                        <Text style={{paddingLeft:10}}>
                            86 đánh giá
                        </Text>
                    </View>
                    <TouchableOpacity style={{ padding: 5, borderRadius: 50, borderWidth: 0.5 }}>
                        <FontAwesome5 name="cart-plus" size={15} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </Pressable>
    );
};
const styles = StyleSheet.create({
    container: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        backgroundColor: 'white',
        paddingBottom: 20,
        marginHorizontal: "1%",
        marginBottom: 20,
        borderRadius: 20,
        alignItems: "center",
    },
    boxImageProduct: {
        width: ITEM_WIDTH * 0.9,
        height: ITEM_HEIGHT * 0.6
    },
    image: {
        paddingTop: 10,
        width: ITEM_WIDTH * 0.9,
        height: ITEM_WIDTH * 0.9,
        alignItems: 'center',

        resizeMode: 'contain'
    },
    iconheart: {
        marginHorizontal: 15,
        position: 'absolute',
        top: 10,
        right: -10
    },
    boxcontentProduct: {
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',

    },
    nameProduct: {
        paddingTop:5,
        paddingBottom:5
    },
    priceProduct: {
        color: '#FE3A30',
        fontWeight: 'bold',
        fontSize:16
    },
    boxProductReview: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
export default Items;