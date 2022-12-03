import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5'
// {'\n'} enter kalimat 
export default function Resepsoup2({navigation}) {
    return(
        <ScrollView style="flex: 1">
            <View style="">
                
                {/* ini icon ya */}
                <View style={{ width: 36, height: 36, backgroundColor: 'rgba(198,198,198,0.7)', alignContent: 'center', borderRadius: 12, alignItems: 'center', zIndex: 10 , marginTop: 30, marginLeft: 30}}>
                    <Icon name="arrow-left" size={18} color="#000000" onPress={() => navigation.goBack()} style={{ marginTop: 7}}/>
                </View>


            <Image source={require('../imgsoup/soup2.png')} style={{ width: 393, height: 300, marginTop: -67}}/>
            <View style={{ backgroundColor: '#829460', width: 393, height: 55, alignContent: 'center', alignItems: 'center', borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
                <Text style={{ color: '#ffffff', fontSize: 25, fontWeight: '00', marginTop: 10, fontFamily: 'Poppins-Bold'}}>SOUP BOLA AYAM</Text>
            </View>
            </View>


            <View style={{ marginLeft: 30, marginRight: 30, marginTop: 20,}}>
                <Text style={{ color: "black", fontSize: 14, fontWeight: '300', lineHeight: 24, fontFamily: 'Poppins-Medium'
            }}>
                <Text style={{ color: 'black', fontSize: 18, }}>Bahan:</Text>{'\n'}
                - 1 buah kentang rebus{'\n'}
                - 50 gram daging ayam giling{'\n'}
                - 1 sdm tepung sagu{'\n'}
                - 2 sdt garam{'\n'}
                - 1/2 sdt merica bubuk{'\n'}
                - 1/2 siung bawang putih halus{'\n'}
                - 50 gram makaroni fussili{'\n'}
                - 3 sdm kacang polong{'\n'}
                - Secukupnya daun bawang{'\n'}
                - Secukupnya seledri{'\n'}
                - 2 sdt kaldu ayam blok{'\n'}
                - 1 sdt pala bubuk{'\n'}
                - 1/2 sdt gula pasir{'\n'}
                {'\n'}{'\n'}
                
                <Text style={{ color: 'black', fontSize: 18 }}>Cara Membuat:</Text>{'\n'}
                - Membuat bola: campur ayam giling, kentang tumbuk, bawang putih halus, garam, merica dibentuk bola sesuai selera.{'\n'}
                - Masukkan bola ke dalam kuah kaldu yg sudah mendidih. Biarkan hingga mengambang.{'\n'}
                - Masukkan bawang putih cincang, garam, pala bubuk, gula, fussili, kacang polong, seledri, daun bawang. Rasakan hingga pas di lidah.{'\n'}
                - Sup bola ayam kentang siap dinikmati.{'\n'}
                </Text>
            </View>
        </ScrollView>
    )
}
