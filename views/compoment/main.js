import React, { useState } from 'react';
import { StyleSheet, Dimensions, TouchableOpacity, Pressable, ScrollView, Image, Text, View } from 'react-native';
import Items from './Items';
import { AntDesign } from '@expo/vector-icons';
import ModalFilter from './ModalFilter';
const ITEM_WIDTH = Dimensions.get('window').width;
const ITEM_HEIGHT = Dimensions.get('window').width * 0.5;

const main = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View styles={styles.main}>
            <View>
                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <Text style={styles.title}>Laptop</Text>
                    <ModalFilter modalVisible={modalVisible} setModalVisible={setModalVisible} />
                    <TouchableOpacity style={styles.touchFilter} onPress={() => setModalVisible(true)} >
                        <AntDesign name="filter" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.BoxSearch}>
                    <Pressable onPress={() => navigation.navigate('InputSearch')} >
                        <View style={styles.Search}>
                            <Text style={styles.input}>Tìm kiếm tên sản phẩm</Text>
                            <Text style={styles.buttonSearch}>
                                <AntDesign name="search1" size={24} color="black" />
                            </Text>
                        </View>
                    </Pressable>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ width: '100%', alignSelf: 'center' }}>
                    <View style={styles.listItems}>
                        <Items navigation={navigation} />
                        <Items navigation={navigation} />
                        <Items navigation={navigation} />
                        <Items navigation={navigation} />
                        <Items navigation={navigation} />
                        <Items navigation={navigation} />
                        <Items navigation={navigation} />
                        <Items navigation={navigation} />
                        <Items navigation={navigation} />
                        <Items navigation={navigation} />
                        <Items navigation={navigation} />
                        <Items navigation={navigation} />
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
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',

    },
    BoxSearch: {
        marginTop: 10,
        flexDirection: 'row',
        position: 'relative',
        width: '100%',
        height: 70,
        padding: 10,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',

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
        width: '100%',
        opacity: 0.5,
    },
    buttonSearch: {
        position: 'absolute',
        right: 0,
        padding: 16,
        // backgroundColor:'#eaeaea'
    },
    container: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: '#FAFAFA',
        
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
        paddingBottom: 0,
    },
    touchFilter: {
        position: 'absolute',
        right: 10,
        bottom: 0,
    },
    listItems: {
        paddingTop: 20,
        height: 'auto',
        justifyContent: 'space-between',
        flexDirection: "row",
        flexWrap: "wrap",
    }
});
export default main;

const DATA = {

}