import React, { useState, useContext, useEffect } from 'react';
import { Component, ActivityIndicator, StyleSheet, Text, Dimensions, Pressable, TouchableOpacity, Image, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { ProductContext } from '../contexts/ProductContext';
import CarouselImageProduct from './compoment/CarouselImageProduct';
import ModalAddToCart from './compoment/ModalAddToCart';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const ProductDetails = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    // const {
    //     productState: {
    //         products,
    //         productLoading
    //     }, getProductsbyId
    // } = useContext(ProductContext);
    // useEffect(() => getProductsbyId(key), []);
    // let bodyProduct = null;
    // if (productLoading) {
    //     bodyProduct = (
    //         <ActivityIndicator size="large" color="skyblue" />
    //     );
    // } else if (products.length > 0) {
    //     bodyProduct = (
    //         <View style={{ width: WIDTH * 0.9, alignSelf: 'center' }}>
    //             <View style={styles.boximageproduct}>
    //                 <CarouselImageProduct />
    //             </View>
    //             <View style={styles.boxtitleproduct}>
    //                 <Text style={styles.titleproduct}>{products.nameProduct}</Text>
    //                 <Text style={styles.priceproduct}>{products.priceProduct} VNĐ</Text>
    //                 <Pressable style={{ paddingTop: 5, paddingBottom: 5, borderBottomWidth: 0.5 }}>
    //                     <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
    //                         <Text>
    //                             <AntDesign name="star" size={15} color="#FFC120" />
    //                             4.6
    //                         </Text>
    //                         <Text style={{ paddingLeft: 10 }}>
    //                             86 đánh giá
    //                         </Text>
    //                     </View>
    //                 </Pressable>
    //             </View>
    //             <View style={styles.boxtitleproduct}>
    //                 <Text style={styles.titleproduct}>{products.nameProduct}</Text>
    //                 <Text style={styles.priceproduct}>{products.priceProduct} VNĐ</Text>
    //                 <Pressable style={{ paddingTop: 5, paddingBottom: 5, borderBottomWidth: 0.5 }}>
    //                     <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
    //                         <Text>
    //                             <AntDesign name="star" size={15} color="#FFC120" />
    //                             4.6
    //                         </Text>
    //                         <Text style={{ paddingLeft: 10 }}>
    //                             86 đánh giá
    //                         </Text>
    //                     </View>
    //                 </Pressable>
    //             </View>
    //             <View style={styles.boxcontextproduct}>
    //                 <Text style={styles.titleproduct}>Thông tin sản phẩm</Text>
    //                 <Text style={styles.descriptionproduct}>Model: {products.modelProduct}</Text>
    //                 <Text style={styles.descriptionproduct}>Cpu: {products.cpuProduct}</Text>
    //                 <Text style={styles.descriptionproduct}>Gpu: {products.gpuProduct}</Text>
    //                 <Text style={styles.descriptionproduct}>Bộ nhớ: {products.memoryProduct}</Text>
    //                 <Text style={styles.descriptionproduct}>Ram: {products.ramProduct}</Text>
    //                 <Text style={styles.descriptionproduct}>Màn hình: {products.displayProduct}</Text>
    //                 <Text style={styles.descriptionproduct}>Kết nối: {products.connectProduct}</Text>
    //                 <Text style={styles.descriptionproduct}>Cổng kết nối: {products.portconnectProduct}</Text>
    //                 <Text style={styles.descriptionproduct}>Camera trước(Selfie): {products.webcameraProduct}</Text>
    //                 <Text style={styles.descriptionproduct}>Touch Id: {products.touchidProduct}</Text>
    //                 <Text style={styles.descriptionproduct}>Face Id: {products.faceidProduct}</Text>
    //                 <Text style={styles.descriptionproduct}>Tính năng đặt biệt: {products.featureProduct}</Text>
    //                 <Text style={styles.descriptionproduct}>Hệ điều hành: {products.operatingsystemProduct}</Text>
    //                 <Text style={styles.descriptionproduct}>Pin: {products.batteryProduct}</Text>
    //                 <Text style={styles.descriptionproduct}>Kích thước: {products.sizeProduct}</Text>
    //                 <Text style={styles.descriptionproduct}>Khối lượng: {products.weigthProduct}</Text>
    //                 <Text style={styles.descriptionproduct}>Màu: {products.colorProduct}</Text>
    //                 <Text style={styles.descriptionproduct}>Camera sau: {products.rearcameraProduct}</Text>
    //                 <Text style={styles.descriptionproduct}>Đèn flash: {products.lightflashProduct}</Text>
    //                 <Text style={styles.descriptionproduct}>Chip GPS: {products.chipGpsProduct}</Text>
    //                 <Text style={styles.descriptionproduct}>Chip Wifi: {products.chipWifiProduct}</Text>
    //                 <Text style={styles.descriptionproduct}>Chip bluetooth: {products.bluetoothProduct}</Text>
    //                 <Text style={styles.descriptionproduct}>Jack cắm 3.5: {products.jackProduct}</Text>
    //                 <Text style={styles.descriptionproduct}>Vật liệu sản xuất: {products.materialProduct}</Text>
    //                 <Text style={styles.descriptionproduct}>

    //                 </Text>
    //             </View>
    //             <View style={styles.boxreviewproduct}>
    //                 <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
    //                     <Text style={styles.titleproduct}>Đánh giá sản phẩm</Text>
    //                     <Text style={{ fontSize: 18 }}>
    //                         <AntDesign name="star" size={15} color="#FFC120" />
    //                         4.6
    //                     </Text>
    //                 </View>
    //                 <View style={styles.BoxListReview}>

    //                     <View style={styles.BoxReview}>
    //                         <View style={{ width: 50, height: 50, borderRadius: 50, borderWidth: 0.5, alignItems: 'center', justifyContent: 'center', borderColor: 'gray', }}>
    //                             <Image style={styles.BoxProfileImage} source={require('../1.jpg')} />
    //                         </View>
    //                         <View style={styles.BoxReviewTitle}>
    //                             <Text style={styles.BoxProfileTitle}>
    //                                 Yelena Belova
    //                             </Text>
    //                             <Text style={styles.BoxProfileStar}>
    //                                 <AntDesign name="star" size={15} color="#FFC120" />
    //                                 <AntDesign name="star" size={15} color="#FFC120" />
    //                                 <AntDesign name="star" size={15} color="#FFC120" />
    //                                 <AntDesign name="star" size={15} color="#FFC120" />
    //                                 <AntDesign name="staro" size={15} color="gray" />
    //                             </Text>
    //                             <Text style={styles.BoxProfileContext}>
    //                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //                             </Text>
    //                         </View>
    //                         <Text style={styles.BoxReviewDate}>
    //                             2 phút trước
    //                         </Text>
    //                     </View>
    //                 </View>
    //                 <Pressable style={{ marginTop: 20, marginBottom: 20 }}>
    //                     <View style={{ textItems: 'center', padding: 20, borderRadius: 50, width: '100%', borderRadius: 10, borderWidth: 0.5, borderColor: 'black', alignItems: 'center' }}>
    //                         <Text>Xem thêm</Text>
    //                     </View>
    //                 </Pressable>
    //             </View>
    //             <View style={styles.boxfeaturedproduct}>
    //             </View>
    //         </View>
    //     )
    // }
    return (
        <View style={styles.fullScreen}>
            <View style={styles.header}>
                <View style={styles.boxheaderbar}>
                    <Pressable style={styles.buttongoback} onPress={() => navigation.goBack()}>
                        <AntDesign name="left" size={24} color="black" />
                    </Pressable>
                    <Text style={styles.titleheaderbar}>Thông tin sản phẩm</Text>
                    <View style={styles.boxbuttonheader}>
                        <TouchableOpacity style={styles.buttonshare}>
                            <FontAwesome name="share" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonPlus}
                            underlayColor='#eaeaea'
                            onPress={() => navigation.navigate('Cart')}
                        >
                            <AntDesign name="shoppingcart" size={24} color="black" containerStyle={{ marginHorizontal: 15, position: 'relative', }} />
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
                    <View style={{ width: WIDTH * 0.9, alignSelf: 'center' }}>
                        <View style={styles.boximageproduct}>
                            <CarouselImageProduct />
                        </View>
                        <View style={styles.boxtitleproduct}>
                            <Text style={styles.titleproduct}>Samsung Galaxy A72 8Gb 256Gb</Text>
                            <Text style={styles.priceproduct}>45000000 VNĐ</Text>
                            <Pressable style={{ paddingTop: 5, paddingBottom: 5, borderBottomWidth: 0.5 }}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text>
                                        <AntDesign name="star" size={15} color="#FFC120" />
                                        4.6
                                    </Text>
                                    <Text style={{ paddingLeft: 10 }}>
                                        86 đánh giá
                                    </Text>
                                </View>
                            </Pressable>
                        </View>
                        {/* <View style={styles.boxtitleproduct}>
                            <Text style={styles.titleproduct}>{products.nameProduct}</Text>
                            <Text style={styles.priceproduct}>{products.priceProduct} VNĐ</Text>
                            <Pressable style={{ paddingTop: 5, paddingBottom: 5, borderBottomWidth: 0.5 }}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text>
                                        <AntDesign name="star" size={15} color="#FFC120" />
                                        4.6
                                    </Text>
                                    <Text style={{ paddingLeft: 10 }}>
                                        86 đánh giá
                                    </Text>
                                </View>
                            </Pressable>
                        </View> */}
                        {/* <View style={styles.boxcontextproduct}>
                    <Text style={styles.titleproduct}>Thông tin sản phẩm</Text>
                    <Text style={styles.descriptionproduct}>Model: {products.modelProduct}</Text>
                    <Text style={styles.descriptionproduct}>Cpu: {products.cpuProduct}</Text>
                    <Text style={styles.descriptionproduct}>Gpu: {products.gpuProduct}</Text>
                    <Text style={styles.descriptionproduct}>Bộ nhớ: {products.memoryProduct}</Text>
                    <Text style={styles.descriptionproduct}>Ram: {products.ramProduct}</Text>
                    <Text style={styles.descriptionproduct}>Màn hình: {products.displayProduct}</Text>
                    <Text style={styles.descriptionproduct}>Kết nối: {products.connectProduct}</Text>
                    <Text style={styles.descriptionproduct}>Cổng kết nối: {products.portconnectProduct}</Text>
                    <Text style={styles.descriptionproduct}>Camera trước(Selfie): {products.webcameraProduct}</Text>
                    <Text style={styles.descriptionproduct}>Touch Id: {products.touchidProduct}</Text>
                    <Text style={styles.descriptionproduct}>Face Id: {products.faceidProduct}</Text>
                    <Text style={styles.descriptionproduct}>Tính năng đặt biệt: {products.featureProduct}</Text>
                    <Text style={styles.descriptionproduct}>Hệ điều hành: {products.operatingsystemProduct}</Text>
                    <Text style={styles.descriptionproduct}>Pin: {products.batteryProduct}</Text>
                    <Text style={styles.descriptionproduct}>Kích thước: {products.sizeProduct}</Text>
                    <Text style={styles.descriptionproduct}>Khối lượng: {products.weigthProduct}</Text>
                    <Text style={styles.descriptionproduct}>Màu: {products.colorProduct}</Text>
                    <Text style={styles.descriptionproduct}>Camera sau: {products.rearcameraProduct}</Text>
                    <Text style={styles.descriptionproduct}>Đèn flash: {products.lightflashProduct}</Text>
                    <Text style={styles.descriptionproduct}>Chip GPS: {products.chipGpsProduct}</Text>
                    <Text style={styles.descriptionproduct}>Chip Wifi: {products.chipWifiProduct}</Text>
                    <Text style={styles.descriptionproduct}>Chip bluetooth: {products.bluetoothProduct}</Text>
                    <Text style={styles.descriptionproduct}>Jack cắm 3.5: {products.jackProduct}</Text>
                    <Text style={styles.descriptionproduct}>Vật liệu sản xuất: {products.materialProduct}</Text>
                    <Text style={styles.descriptionproduct}>
                        
                    </Text>
                </View> */}
                        <View style={styles.boxreviewproduct}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={styles.titleproduct}>Đánh giá sản phẩm</Text>
                                <Text style={{ fontSize: 18 }}>
                                    <AntDesign name="star" size={15} color="#FFC120" />
                                    4.6
                                </Text>
                            </View>
                            <View style={styles.BoxListReview}>

                                <View style={styles.BoxReview}>
                                    <View style={{ width: 50, height: 50, borderRadius: 50, borderWidth: 0.5, alignItems: 'center', justifyContent: 'center', borderColor: 'gray', }}>
                                        <Image style={styles.BoxProfileImage} source={require('../1.jpg')} />
                                    </View>
                                    <View style={styles.BoxReviewTitle}>
                                        <Text style={styles.BoxProfileTitle}>
                                            Yelena Belova
                                        </Text>
                                        <Text style={styles.BoxProfileStar}>
                                            <AntDesign name="star" size={15} color="#FFC120" />
                                            <AntDesign name="star" size={15} color="#FFC120" />
                                            <AntDesign name="star" size={15} color="#FFC120" />
                                            <AntDesign name="star" size={15} color="#FFC120" />
                                            <AntDesign name="staro" size={15} color="gray" />
                                        </Text>
                                        <Text style={styles.BoxProfileContext}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </Text>
                                    </View>
                                    <Text style={styles.BoxReviewDate}>
                                        2 phút trước
                                    </Text>
                                </View>
                            </View>
                            <Pressable style={{ marginTop: 20, marginBottom: 20 }}>
                                <View style={{ textItems: 'center', padding: 20, borderRadius: 50, width: '100%', borderRadius: 10, borderWidth: 0.5, borderColor: 'black', alignItems: 'center' }}>
                                    <Text>Xem thêm</Text>
                                </View>
                            </Pressable>
                        </View>
                        <View style={styles.boxfeaturedproduct}>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <Pressable style={styles.ButtonAdded}>
                    <View>
                        <Text style={{ color: 'white', }}>Lưu vào danh sách</Text>
                    </View>
                </Pressable>
                <Pressable style={styles.ButtonAddCart} onPress={() => setModalVisible(true)}>
                    <View>
                        <Text style={{ color: 'white', }}>Thêm vào giỏ hàng</Text>
                    </View>
                </Pressable>
                <ModalAddToCart modalVisible={modalVisible} setModalVisible={setModalVisible} />
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
    buttonshare: {
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
        width: WIDTH,
        alignItems: 'center',
        marginBottom: 150,
    },
    scrollView: {
        width: WIDTH,
    },
    boximageproduct: {
        alignSelf: 'center',
    },
    boxtitleproduct: {
        paddingTop: 20,
    },
    titleproduct: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        paddingTop: 5,
        paddingBottom: 5,
    },
    priceproduct: {
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold',
    },
    boxcontextproduct: {
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 0.5,
    },
    descriptionproduct: {
        textAlign: 'justify',
        lineHeight: 22,
        fontSize: 14,
    },
    boxreviewproduct: {
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 0.5,
    },
    BoxListReview: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    BoxReview: {
        flexDirection: 'row',
        width: '100%',

    },
    BoxProfileImage: {
        width: 40,
        height: 40,
        borderRadius: 50,
        borderWidth: 0.5,
        borderColor: 'white',
    },
    BoxReviewTitle: {
        paddingLeft: 10,
    },
    BoxProfileTitle: {
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 22,
        padding: 5,
    },
    BoxProfileStar: {
        paddingLeft: 5,
    },
    BoxProfileContext: {
        fontSize: 13,
        lineHeight: 20,
        textAlign: 'justify',
        padding: 5,
        width: WIDTH * 0.9 - 80,
    },
    BoxReviewDate: {
        position: 'absolute',
        right: 0,
        top: 0,
    },
    boxfeaturedproduct: {

    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'space-around',
        width: '100%',
        textAlign: 'center',
        alignContent: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
    },
    ButtonAdded: {
        backgroundColor: '#FE3A30',
        width: '40%',
        alignItems: 'center',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
    },
    ButtonAddCart: {
        backgroundColor: '#3669C9',
        width: '40%',
        alignItems: 'center',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
    }
});
export default ProductDetails;