import React from 'react';
import { Component, ScrollView, StyleSheet, Text, Dimensions, Pressable, TouchableOpacity, Image, View } from 'react-native';


const WIDTH = Dimensions.get('window').width * 0.95;
const HEIGHT = WIDTH * 0.5;
const images = [
    { id:1,
      uri:'https://static.remove.bg/remove-bg-web/126e8851f6e88bf644890fafdf1b0d82aff0629e/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg',
    },
    {
        id:2,
        uri:'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
    },
    {
        id:3,
        uri:'https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg',
    }
    
    
]
const Carousel = () => {
    return (
        <View style={styles.container}>
            <ScrollView pagingEnabled={true} showsVerticalScrollIndicator={false} horizontal={true} style={styles.scrollView}>
                {
                    images.map((image) => (
                        <Pressable>
                            <Image
                                key={image.id}
                                source={{ uri: image.uri }}
                                style={{ width: WIDTH, height: HEIGHT, resizeMode: 'cover', borderRadius: 15 }}
                            />
                            <Text style={{position:'absolute',fontSize:30,color:'white',fontWeight: 'bold',bottom:10,width:'90%',backgroundColor:'black', alignSelf: 'center', textAlign: 'center' }}>Test </Text>
                        </Pressable>
                    ))
                }
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: WIDTH,
        height: HEIGHT,
        alignItems: 'center',
        alignSelf: 'center',

    },
    scrollView: {
        width: WIDTH,
        height: HEIGHT,

    }
});

export default Carousel;