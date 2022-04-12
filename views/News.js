import React, { useState } from 'react';
import { Alert, TextInput, StyleSheet, Text, Dimensions, Pressable, TouchableOpacity, Image, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
const Stack = createNativeStackNavigator();
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const News = ({ navigation }) => {
    const [text, onChangeText] = useState("");
    return (
        <View style={styles.fullScreen}>
            <View style={styles.header}>
                <View style={styles.boxheaderbar}>
                    <Pressable style={styles.buttongoback} onPress={() => navigation.goBack()}>
                        <AntDesign name="left" size={24} color="black" />
                    </Pressable>
                    <Text style={styles.titleheaderbar}>Tin tức</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.Search}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Tìm kiếm tên tin tức"
                    />
                    <Pressable
                        style={styles.buttonSearch}
                        underlayColor='#eaeaea'>
                        <AntDesign name="search1" size={24} color="black" />
                    </Pressable>
                </View>
            </View>
            <View style={styles.containerr}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ width: WIDTH }}>
                    <View style={styles.BoxListNews}>
                        <Pressable style={styles.BoxNews} onPress={() => navigation.navigate('NewsDetails')}>
                            <View style={styles.BoxContent}>
                                <Text style={styles.TitleNews}>Intel ra mắt chip thế hệ 12 </Text>
                                <Text style={styles.DateNews}>16-11-2021</Text>
                            </View>
                            <View  >
                                <Image style={styles.BoxImage} source={require('../1.jpg')} />
                            </View>
                        </Pressable>

                        <Pressable style={styles.BoxNews} onPress={() => navigation.navigate('NewsDetails')}>
                            <View style={styles.BoxContent}>
                                <Text style={styles.TitleNews}>Intel ra mắt chip thế hệ 12 </Text>
                                <Text style={styles.DateNews}>16-11-2021</Text>
                            </View>
                            <View  >
                                <Image style={styles.BoxImage} source={require('../1.jpg')} />
                            </View>
                        </Pressable>

                        <Pressable style={styles.BoxNews} onPress={() => navigation.navigate('NewsDetails')}>
                            <View style={styles.BoxContent}>
                                <Text style={styles.TitleNews}>Intel ra mắt chip thế hệ 12 </Text>
                                <Text style={styles.DateNews}>16-11-2021</Text>
                            </View>
                            <View  >
                                <Image style={styles.BoxImage} source={require('../1.jpg')} />
                            </View>
                        </Pressable>

                        <Pressable style={styles.BoxNews} onPress={() => navigation.navigate('NewsDetails')}>
                            <View style={styles.BoxContent}>
                                <Text style={styles.TitleNews}>Intel ra mắt chip thế hệ 12 </Text>
                                <Text style={styles.DateNews}>16-11-2021</Text>
                            </View>
                            <View  >
                                <Image style={styles.BoxImage} source={require('../1.jpg')} />
                            </View>
                        </Pressable>

                        <Pressable style={styles.BoxNews} onPress={() => navigation.navigate('NewsDetails')}>
                            <View style={styles.BoxContent}>
                                <Text style={styles.TitleNews}>Intel ra mắt chip thế hệ 12 </Text>
                                <Text style={styles.DateNews}>16-11-2021</Text>
                            </View>
                            <View  >
                                <Image style={styles.BoxImage} source={require('../1.jpg')} />
                            </View>
                        </Pressable>

                        <Pressable style={styles.BoxNews} onPress={() => navigation.navigate('NewsDetails')}>
                            <View style={styles.BoxContent}>
                                <Text style={styles.TitleNews}>Intel ra mắt chip thế hệ 12 </Text>
                                <Text style={styles.DateNews}>16-11-2021</Text>
                            </View>
                            <View  >
                                <Image style={styles.BoxImage} source={require('../1.jpg')} />
                            </View>
                        </Pressable>

                        <Pressable style={styles.BoxNews} onPress={() => navigation.navigate('NewsDetails')}>
                            <View style={styles.BoxContent}>
                                <Text style={styles.TitleNews}>Intel ra mắt chip thế hệ 12 </Text>
                                <Text style={styles.DateNews}>16-11-2021</Text>
                            </View>
                            <View  >
                                <Image style={styles.BoxImage} source={require('../1.jpg')} />
                            </View>
                        </Pressable>

                        <Pressable style={styles.BoxNews} onPress={() => navigation.navigate('NewsDetails')}>
                            <View style={styles.BoxContent}>
                                <Text style={styles.TitleNews}>Intel ra mắt chip thế hệ 12 </Text>
                                <Text style={styles.DateNews}>16-11-2021</Text>
                            </View>
                            <View  >
                                <Image style={styles.BoxImage} source={require('../1.jpg')} />
                            </View>
                        </Pressable>

                        <Pressable style={styles.BoxNews} onPress={() => navigation.navigate('NewsDetails')}>
                            <View style={styles.BoxContent}>
                                <Text style={styles.TitleNews}>Intel ra mắt chip thế hệ 12 </Text>
                                <Text style={styles.DateNews}>16-11-2021</Text>
                            </View>
                            <View  >
                                <Image style={styles.BoxImage} source={require('../1.jpg')} />
                            </View>
                        </Pressable>
                    </View>
                </ScrollView>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
    fullScreen: {
        width: WIDTH,
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 50,
    },
    header: {
        width: '100%',
        paddingTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.4,
        paddingBottom: 10
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
        paddingTop: 10,
        width: WIDTH,

    },
    containerr: {
        

    },
    Search: {
        alignSelf: 'center',
        width: '95%',
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
    BoxListNews: {
        marginTop: 20,
        width: '95%',
        alignSelf: 'center',
    },
    BoxNews: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#FAFAFA',
        marginTop: 10,
        marginBottom: 10,
    },
    BoxContent: {
        width: '70%',
        justifyContent: 'space-between',

    },
    TitleNews: {
        fontSize: 16,
        fontWeight: 'bold',

    },
    DateNews: {
        color: 'gray',
    },
    BoxImage: {
        width: 100,
        height: 100,
        borderRadius: 10,

    },
});
export default News;