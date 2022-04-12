import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, Dimensions, Pressable, TouchableOpacity, Image, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const NewsDetails = ({ navigation }) => {
    const [text, onChangeText] = useState("");
    return (
        <View style={styles.fullScreen}>
            <View style={styles.header}>
                <View style={styles.boxheaderbar}>
                    <Pressable style={styles.buttongoback} onPress={() => navigation.goBack()}>
                        <AntDesign name="left" size={24} color="black" />
                    </Pressable>
                    <Text style={styles.titleheaderbar}>Bài viết</Text>
                    <Pressable style={styles.buttonshare}>
                        <FontAwesome name="share" size={24} color="black" />
                    </Pressable>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{width:WIDTH, }}>
                <View style={styles.container}>
                    <View style={styles.BoxPostNews}>
                        <Image style={styles.BoxImage} source={require('../news.jpg')} />
                        <Text style={styles.TitleNews}>Intel ra mắt chip thế hệ 12 </Text>
                        <Text style={styles.DateNews}>16-11-2021</Text>
                        <Text style={styles.ContextNews}>The speaker unit contains a diaphragm that is precision-grown from NAC Audio bio-cellulose, making it stiffer, lighter and stronger than regular PET speaker units, and allowing the sound-producing diaphragm to vibrate without the levels of distortion found in other speakers. The speaker unit contains a diaphragm that is precision-grown from NAC Audio bio-cellulose, making it stiffer, lighter and stronger than regular PET speaker units, and allowing the sound-producing diaphragm to vibrate without the levels of distortion found in other speakers. </Text>
                    </View>
                </View>
                <View style={styles.containerr}>
                    <View style={{ paddingTop: 30, paddingBottom: 30, width: '95%', alignSelf: 'center' }}>
                        <Text style={{ fontSize: 20, textAlign: 'left', fontWeight: 'bold', padding: 10, borderBottomWidth: 0.4 }}>Tin tức khác</Text>
                        <View style={styles.BoxListNews}>
                            <Pressable style={styles.BoxNews} >
                                <View style={styles.BoxContent}>
                                    <Text style={styles.TitleNewsOther}>Intel ra mắt chip thế hệ 12 </Text>
                                    <Text style={styles.DateNewsOther}>16-11-2021</Text>
                                </View>
                                <View  >
                                    <Image style={styles.BoxImageOther} source={require('../1.jpg')} />
                                </View>
                            </Pressable>

                            <Pressable style={styles.BoxNews} >
                                <View style={styles.BoxContent}>
                                    <Text style={styles.TitleNewsOther}>Intel ra mắt chip thế hệ 12 </Text>
                                    <Text style={styles.DateNewsOther}>16-11-2021</Text>
                                </View>
                                <View  >
                                    <Image style={styles.BoxImageOther} source={require('../1.jpg')} />
                                </View>
                            </Pressable>

                            <Pressable style={styles.BoxNews} >
                                <View style={styles.BoxContent}>
                                    <Text style={styles.TitleNewsOther}>Intel ra mắt chip thế hệ 12 </Text>
                                    <Text style={styles.DateNewsOther}>16-11-2021</Text>
                                </View>
                                <View  >
                                    <Image style={styles.BoxImageOther} source={require('../1.jpg')} />
                                </View>
                            </Pressable>

                            <Pressable style={styles.BoxNews} >
                                <View style={styles.BoxContent}>
                                    <Text style={styles.TitleNewsOther}>Intel ra mắt chip thế hệ 12 </Text>
                                    <Text style={styles.DateNewsOther}>16-11-2021</Text>
                                </View>
                                <View  >
                                    <Image style={styles.BoxImageOther} source={require('../1.jpg')} />
                                </View>
                            </Pressable>

                            <Pressable style={styles.BoxNews} >
                                <View style={styles.BoxContent}>
                                    <Text style={styles.TitleNewsOther}>Intel ra mắt chip thế hệ 12 </Text>
                                    <Text style={styles.DateNewsOther}>16-11-2021</Text>
                                </View>
                                <View  >
                                    <Image style={styles.BoxImageOther} source={require('../1.jpg')} />
                                </View>
                            </Pressable>

                            <Pressable style={styles.BoxNews} >
                                <View style={styles.BoxContent}>
                                    <Text style={styles.TitleNewsOther}>Intel ra mắt chip thế hệ 12 </Text>
                                    <Text style={styles.DateNewsOther}>16-11-2021</Text>
                                </View>
                                <View  >
                                    <Image style={styles.BoxImageOther} source={require('../1.jpg')} />
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,
        width: WIDTH,
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
    buttonshare: {
        position: 'absolute',
        right: 0,
        top: 25,
    },
    titleheaderbar: {
        padding: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        width:'100%',
        marginTop: 20,
        alignItems: 'center',
        
    },
    containerr: {
        width: '100%',
        
    },
    BoxPostNews: {
        width: WIDTH * 0.9,
    },
    BoxImage: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').width * 1 / 2,
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    TitleNews: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10,
    },
    DateNews: {
        color: 'gray',
    },
    ContextNews: {
        textAlign: 'justify',
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 16,
        lineHeight: 25,
    },
    BoxListNews: {
        marginTop: 20,
        width: '100%',
        alignSelf: 'center',
    },
    BoxNews: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FAFAFA',
        marginTop: 10,
        marginBottom: 10,
    },
    BoxContent: {
        width: '70%',
        justifyContent: 'space-between',
    },
    TitleNewsOther: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    DateNewsOther: {
        color: 'gray',
    },
    BoxImageOther: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
});
export default NewsDetails;