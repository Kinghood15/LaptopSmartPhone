import React, { useState } from 'react';
import { StyleSheet, Dimensions, TouchableOpacity, Pressable, Modal, Text, View, useWindowDimensions, StatusBar, FlatList } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Checkbox from 'expo-checkbox';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import Test from '../Test';



const FirstRoute = () => {
    const [isChecked, setChecked] = useState(false);
    return (
        <View style={{ height: 400, width: '95%', alignSelf: 'center', marginTop:20 }}>
            <Text>Khoảng giá</Text>
            <Slider
                style={{ width: 300, height: 50, color: '#3669C9' }}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#3669C9"
                maximumTrackTintColor="#EFF5FB"
            />
            <View style={styles.boxPriceBuy}>
                <Text>0 VNĐ</Text>
                <Text>10.000.000 VNĐ</Text>
            </View>
            <View style={styles.boxListSupplier}>
                <View style={styles.boxSupplier}>
                    <Text>Dell</Text>
                    <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                    />
                </View>
                <View style={styles.boxSupplier}>
                    <Text>Dell</Text>
                    <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                    />
                </View>
            </View>
            <View style={{ flexDirection: 'row',justifyContent: 'space-around', textAlign: 'center', paddingTop: 50 }}>
                <Pressable style={[styles.buttonReset]}>
                    <Text style={{textAlign: 'center'}}>Đặt lại</Text>
                </Pressable>
                <Pressable style={[styles.buttonApply]}>
                    <Text style={{textAlign: 'center', color:'white',}}>Cập nhật</Text>
                </Pressable>
            </View>
        </View>
    );
}
const SecondRoute = () => {
    const [isChecked, setChecked] = useState(false);
    return (
        <View style={{ height: 450, width: '95%', alignSelf: 'center', marginTop:20 }}>
            <View style={styles.boxListSupplier}>
                <View style={styles.boxSupplier}>
                    <Text>Name (A-Z)</Text>
                    <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                    />
                </View>
                <View style={styles.boxSupplier}>
                    <Text>Name (Z-A)</Text>
                    <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                    />
                </View>
                <View style={styles.boxSupplier}>
                    <Text>Giá (giá thấp nhất - giá cao nhất)</Text>
                    <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                    />
                </View>
                <View style={styles.boxSupplier}>
                    <Text>Giá (Giá cao nhất - giá thấp nhất )</Text>
                    <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                    />
                </View>
            </View>
            <View style={{ flexDirection: 'row',justifyContent: 'space-around', textAlign: 'center', paddingTop: 50 }}>
                <Pressable style={[styles.buttonReset]}>
                    <Text style={{textAlign: 'center'}}>Đặt lại</Text>
                </Pressable>
                <Pressable style={[styles.buttonApply]}>
                    <Text style={{textAlign: 'center', color:'white',}}>Cập nhật</Text>
                </Pressable>
            </View>
        </View>
    );
}

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});
const ModalFilter = ({ modalVisible, setModalVisible }) => {
    const [status, setStatus] = useState('filter');


    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Lọc' },
        { key: 'second', title: 'Sắp xếp' },
    ]);

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
                            <Text style={styles.modalText}>Lọc và sắp xếp</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <AntDesign name="close" size={24} color="black" />
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.ModalContent}>
                        {/* <View style={styles.ListTab}>
                            <TouchableOpacity style={styles.btnTab} onPress={() => setStatusFilter('Filter')}>
                                <Text style={styles.textTab}>
                                    Lọc
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnTab}>
                                <Text style={styles.textTab}>
                                    Sắp xếp
                                </Text>
                            </TouchableOpacity>
                        </View> */}
                        <View>
                        </View>
                        <TabView
                            style={{ width: Dimensions.get('window').width * 0.8 }}
                            navigationState={{ index, routes }}
                            renderScene={renderScene}
                            onIndexChange={setIndex}
                            initialLayout={{ width: layout.width }}
                        />

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
        padding: 20
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
    },
    ListTab: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 20,
    },
    btnTab: {
        width: Dimensions.get('window').width / 3.5,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#EBEBEB',
        padding: 10,
        justifyContent: 'center',
    },
    textTab: {
        fontSize: 16,

    },
    btnTabActive: {
        backgroundColor: '#E63838',
    },
    itemContainer: {
        flexDirection: 'row',
        paddingVertical: 15
    },
    itemBody: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center',

    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    itemStatus: {
        backgroundColor: 'white',
        paddingHorizontal: 6,
        justifyContent: 'center',
        right: 12,
    },
    boxPriceBuy: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth:0.4,
        borderColor: 'gray',
        padding:10,
    },
    boxListSupplier: {
        marginBottom:20,
    },
    boxSupplier: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15,
        paddingBottom: 15,
    },
    checkbox: {

    },
    buttonReset:{
        width: Dimensions.get('window').width * 0.3,
        borderWidth:0.5,
        borderRadius:10,
        padding:15,
    },
    buttonApply:{
        width: Dimensions.get('window').width * 0.3,
        borderRadius:10,
        backgroundColor:'#3669C9',
        padding:15,
    },

});
export default ModalFilter;

