import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5'
// {'\n'} enter kalimat 
export default function Resepbuah4({navigation}) {
    return(
        <ScrollView style="flex: 1">
            <View style="">
                
                {/* ini icon ya */}
                <View style={{ width: 36, height: 36, backgroundColor: 'rgba(198,198,198,0.7)', alignContent: 'center', borderRadius: 12, alignItems: 'center', zIndex: 10 , marginTop: 30, marginLeft: 30}}>
                    <Icon name="arrow-left" size={18} color="#000000" onPress={() => navigation.goBack()} style={{ marginTop: 7}}/>
                </View>


            <Image source={require('../imgbuah/buah4.jpeg')} style={{ width: 393, height: 300, marginTop: -67}}/>
            <View style={{ backgroundColor: '#829460', width: 393, height: 55, alignContent: 'center', alignItems: 'center', borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
                <Text style={{ color: '#ffffff', fontSize: 25, fontWeight: '500', marginTop: 10, fontFamily: 'Poppins-Medium'}}>AVOCADO TOAST</Text>
            </View>
            </View>


            <View style={{ marginLeft: 30, marginRight: 30, marginTop: 20,}}>
                <Text style={{ color: "black", fontSize: 15, fontWeight: '300', lineHeight: 24, fontFamily: 'Poppins-Medium'
            }}>
                <Text style={{ color: 'black', fontSize: 18 }}>Bahan:</Text>{'\n'}
                - 2 lembar roti tawar{'\n'}
                - 1 butir telur ceplok{'\n'}
                - 1/2 buah alpukat matang{'\n'}
                - 1 sdt air jeruk nipis{'\n'}
                - 1 buah tomat ukuran kecil, potong dadu buang isi{'\n'}
                - 3 siung bawang merah ukuran kecil{'\n'}
                - garam dan merica secukupnya (campur){'\n'}
                
                {'\n'}{'\n'}
                <Text style={{ color: 'black', fontSize: 18 }}>Cara Membuat:</Text>{'\n'}
                - Kerok daging alpukat lalu lumat kasar.{'\n'}
                - Campur dengan air jeruk, potongan dadu tomat dan bawang merah.{'\n'}
                - Bumbui dengan garam, merica.{'\n'}
                - Oleskan ke permukaan roti yang sudah dibakar, tambahkan telur.{'\n'}
                </Text>
            </View>
        </ScrollView>
    )
}

