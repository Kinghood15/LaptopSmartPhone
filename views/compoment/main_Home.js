import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Dimensions, ActivityIndicator, TouchableOpacity, ScrollView, Image, FlatList, Text, View, Pressable } from 'react-native';
import Items from './Items';
import { ProductContext } from '../../contexts/ProductContext';
import axios from 'axios';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const ITEM_WIDTH = Dimensions.get('window').width;
const ITEM_HEIGHT = Dimensions.get('window').width * 0.5;
const ITEMPRODUCT_WIDTH = Dimensions.get('window').width * 0.45;
const ITEMPRODUCT_HEIGHT = Dimensions.get('window').width * 0.7;

const DATA = [
    {id:'3',name_product:'Laptop Apple Macbook Air MGND3(SA\/A) Apple M1 8Gb\/ 256Gb (Gold)',cpu:"Apple M1 chip with 8‑core CPU, 7‑core GPU, and 16‑core Neural Engine",gpu:"VGA onboard Intel Graphics Plus",memory:"256Gb SSD\/ Không có ổ đĩa quang",ram:"8Gb",display:"13.3Inch",color:"Gold",weight:"1.29 kg",quanlity:"150",discount:"0",quotedprice:"29999000",price:"25790000",id_categoryproducts:"3",created_at:"2021-12-18 07:48:45",updated_at:"2021-12-21 10:01:14",id_categorylaptops:"7"},
    {id:'4',name_product:'Laptop Asus Zenbook UX425EA-KI429T',cpu:"Core i5 1135G7 2.4GHz-8MB",gpu:"Intel® Iris® Xe Graphics",memory:"512GB M.2 NVMe™ PCIe® 3.0  SSD",ram:"8Gb (8GB LPDDR4X on board)",display:"14.0Inch Full HD",color:"Grey",weight:"1.17 kg",quanlity:"200",discount:"0",quotedprice:"24690000",price:"23990000",id_categoryproducts:"6",created_at:"2021-12-18 08:44:32",updated_at:"2021-12-21 10:00:58",id_categorylaptops:"3"},
    {id:'5',name_product:'Laptop Dell Latitude 3520 70251590',cpu:"Core i7 1165G7 2.8Ghz Up to 4.7Ghz-12Mb",gpu:"Intel® Iris® Xe Graphics",memory:"256Gb SSD",ram:"8Gb (2 Khe cắm \/ Hỗ trợ tối đa 16GB)",display:"15.6Inch Full HD",color:"Black",weight:"1.79 kg",quanlity:"50",discount:"0",quotedprice:"25990000",price:"24490000",id_categoryproducts:"6",created_at:"2021-12-18 08:46:27",updated_at:"2021-12-21 10:00:39",id_categorylaptops:"4"},
    {id:'6',name_product:'Laptop Dell Latitude 5420 42LT542001',cpu:"Core i5 1135G7 2.4 Ghz up to 4.2Ghz-8Mb",gpu:"Intel Graphics HD 620",memory:"256Gb SSD\/ Không có",ram:"4Gb (Thiết kế mới, mỏng nhẹ hơn)",display:"14.0Inch Full HD",color:"Grey",weight:"1.48 kg",quanlity:"15",discount:"0",quotedprice:"23990000",price:"22690000",id_categoryproducts:"6",created_at:"2021-12-18 08:48:26",updated_at:"2021-12-21 10:00:15",id_categorylaptops:"3"},
    {id:'7',name_product:'Laptop Dell Vostro 3400 V4I7015W1',cpu:"Core i7 1165G7 2.8Ghz Up to 4.7Ghz-12Mb",gpu:"Nvidia GeForce MX330 2GB GDDR5",memory:"512Gb SSD NVMe\/ No DVDW",ram:"8Gb (2 Khe cắm \/ Hỗ trợ tối đa 16GB)",display:"14.0Inch Full HD",color:"Black",weight:"1.58 kg",quanlity:"65",discount:"0",quotedprice:"26390000",price:"25390000",id_categoryproducts:"6",created_at:"2021-12-18 08:50:43",updated_at:"2021-12-21 10:00:00",id_categorylaptops:"3"},
    {id:'8',name_product:'Laptop HP 15s-fq2561TU',cpu:"Core i5 11135G7 2.4Ghz-8Mb",gpu:"Intel® Iris® Xe Graphics",memory:"512GB SSD",ram:"8Gb (DDR4-3200 SDRAM (2x4GB))",display:"15.6Inch",color:"Silver",weight:"1.74 kg",quanlity:"25",discount:"0",quotedprice:"17590000",price:"17390000",id_categoryproducts:"6",created_at:"2021-12-18 08:53:17",updated_at:"2021-12-21 09:59:45",id_categorylaptops:"7"},
    {id:'9',name_product:'Laptop HP VICTUS 16-e0177AX',cpu:"Ryzen 5 5600H 3.3Ghz-16Mb",gpu:"NVIDIA GTX 1650 4GB",memory:"512GB SSD",ram:"8Gb (2x4GB) (Up to 32 GB DDR4-3200 MHz RAM\/ 2 slots)",display:"16.1Inch FHD",color:"Đen ánh bạc",weight:"2.46 kg",quanlity:"24",discount:"0",quotedprice:"22990000",price:"22790000",id_categoryproducts:"6",created_at:"2021-12-18 08:55:15",updated_at:"2021-12-21 09:59:12",id_categorylaptops:"6"},
    {id:'10',name_product:'Laptop Lenovo Ideapad Gaming 3 15IHU6 82K100FBVN',cpu:"Core i7 11370H 3.0Ghz Up to 4.8Ghz-12Mb",gpu:"NVIDIA GeForce RTX 3050 4GB GDDR6, Boost Clock 1500 \/ 1740MHz, TGP 90W",memory:"512Gb SSD M.2 2242 PCIe NVMe 3.0x4, x1 slot 2.5\" SATA (HDD\/SSD) Up to 2 drives, 1x 2.5\" HDD + 1x M.2 2242 SSD or 1x M.2 2242\/2280 SSD + 1x M.2 2242 SSD • 2.5\" HDD up to 1TB • M.2 2242 SSD up to 512GB • M.2 2280 SSD up to 1TB",ram:"1x 8GB SO-DIMM DDR4-3200 Two DDR4 SO-DIMM slots, dual-channel capable Up to 16GB DDR4-3200 offering",display:"15.6\" FHD (1920x1080) IPS 250nits Anti-glare, 120Hz, 45% NTSC, DC dimmer",color:"Black",weight:"2.25 kg (4.96 lbs)",quanlity:"26",discount:"0",quotedprice:"28990000",price:"27990000",id_categoryproducts:"6",created_at:"2021-12-18 08:58:49",updated_at:"2021-12-21 09:58:58",id_categorylaptops:"6"},
    {id:'11',name_product:'Samsung Galaxy A72 8Gb\/ 256Gb - Trắng',cpu:"Snapdragon 720G 8 nhân 2 nhân 2.3 Ghz & 6 nhân 1.8 Ghz",gpu:"Adreno 618",memory:"256 GB",ram:"8 GB",display:"Super AMOLED 6.7\" Độ phân giải Full HD+ (1080 x 2400 Pixels) Mặt cảm ứng Kính cường lực Corning Gorilla Glass 3",color:"White",weight:"203 g",quanlity:"20",discount:"0",quotedprice:"11490000",price:"10790000",id_categoryproducts:"4",created_at:"2021-12-18 09:01:23",updated_at:"2021-12-21 09:58:41",id_categorylaptops:null}
];
const main = ({ navigation }) => {
    // const [modalVisible, setModalVisible] = useState(false);

    // const {
    //     productState: {
    //         Products,
    //         productLoading
    //     }, getProducts
    // } = useContext(ProductContext);
    // useEffect(() => getProducts(), []);
    // console.log(Products);
    const numColumns=2
    const Item = ({ navigation,item }) => (
        // <Items navigation={navigation} item={item} />
        <Pressable style={styles.containerProduct} >
            {/* console.log(product._id); */}
            <View style={styles.boxImageProduct}>
                <Image style={styles.imageProduct} source={require('../../1.jpg')} />
                {/* {console.log(name_product)} */}
                <AntDesign name="hearto" size={20} color="black" style={styles.iconheart} />
            </View>
            <View style={styles.boxcontentProduct}>
                <Text style={styles.nameProduct}>{item.name_product}</Text>
                <Text style={styles.priceProduct}>{item.price} VNĐ</Text>
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
    return (
        
            <View styles={styles.main}>
                <View style={styles.container}>
                    <Text style={styles.title}>Sản phẩm</Text>
                    <View style={{ width: '95%', alignSelf: 'center' }}>
                        <View style={styles.listItems}>
                            <FlatList data={DATA} renderItem={Item} keyExtractor={item => item.id} numColumns={numColumns} />

                            {/* <Items navigation={navigation} />
                            <Items navigation={navigation} />
                            <Items navigation={navigation} />
                            <Items navigation={navigation} />
                            <Items navigation={navigation} />
                            <Items navigation={navigation} />
                            <Items navigation={navigation} /> */}

                        </View>
                    </View>
                </View>
            </View>
        
    );
}
const styles = StyleSheet.create({
    main: {
        width: ITEM_WIDTH,
        height: 'auto',
        backgroundColor: '#FAFAFA',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    container: {
        width: ITEM_WIDTH,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#FAFAFA',
        marginTop: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
        paddingBottom: 0,
    },
    listItems: {

        paddingTop: 20,
        paddingBottom: 20,
        marginBottom: 40,
        height: 'auto',
        justifyContent: 'space-between',
        flexDirection: "row",
        flexWrap: "wrap",
        
    },

    containerProduct: {
        width: ITEMPRODUCT_WIDTH,
        height: ITEMPRODUCT_HEIGHT,
        backgroundColor: 'white',
        paddingBottom: 20,
        marginHorizontal: "1%",
        marginBottom: 20,
        borderRadius: 20,
        alignItems: "center",
    },
    boxImageProduct: {
        width: ITEMPRODUCT_WIDTH * 0.8,
        height: ITEMPRODUCT_HEIGHT * 0.6
    },
    imageProduct: {
        marginTop: 10,
        width: ITEMPRODUCT_WIDTH * 0.9,
        height: ITEMPRODUCT_WIDTH * 0.8,
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
export default main;