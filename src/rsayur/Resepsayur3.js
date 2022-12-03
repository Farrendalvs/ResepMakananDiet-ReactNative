import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5'
// {'\n'} enter kalimat 
export default function Resepsayur3({navigation}) {
    return(
        <ScrollView style="flex: 1">
            <View style="">
                
                {/* ini icon ya */}
                <View style={{ width: 36, height: 36, backgroundColor: 'rgba(198,198,198,0.7)', alignContent: 'center', borderRadius: 12, alignItems: 'center', zIndex: 10 , marginTop: 30, marginLeft: 30}}>
                    <Icon name="arrow-left" size={18} color="#000000" onPress={() => navigation.goBack()} style={{ marginTop: 7}}/>
                </View>


            <Image source={require('../imgsayur/sayur3.png')} style={{ width: 393, height: 300, marginTop: -67}}/>
            <View style={{ backgroundColor: '#829460', width: 393, height: 55, alignContent: 'center', alignItems: 'center', borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
                <Text style={{ color: '#ffffff', fontSize: 25, fontWeight: '500', marginTop: 10, fontFamily: 'Poppins-Medium'}}>TUMIS LABU SIAM</Text>
            </View>
            </View>


            <View style={{ marginLeft: 30, marginRight: 30, marginTop: 20,}}>
                <Text style={{ color: "black", fontSize: 15, fontWeight: '300', lineHeight: 24, fontFamily: 'Poppins-Medium'
            }}>
                <Text style={{ color: 'black', fontSize: 18 }}>Bahan:</Text>{'\n'}
                - 1 buah labu siam besar{'\n'}
                - 5 sendok makan minyak sayur{'\n'}
                - 5 butir bawang merah, iris tipis{'\n'}
                - 3 siung bawang putih, iris tipis{'\n'}
                - 2 buah cabe merah, iris tipis{'\n'}
                - 5 buah cabe rawit merah, iris tipis{'\n'}
                - 2 cm lengkuas, memarkan{'\n'}
                - 2 lembar daun salam{'\n'}
                - 2 sdm ebi, rendam lalu tumbuk halus{'\n'}
                - 1 sdm kaldu jamur/ayam{'\n'}
                - 1/2 sdt merica bubuk{'\n'}
                - 1 sdm garam{'\n'}
                {'\n'}{'\n'}
                
                <Text style={{ color: 'black', fontSize: 18 }}>Cara Membuat:</Text>{'\n'}
                - Belah membujur labu siam menjadi dua. Gsok-gosokkan bekas belahannya hingga berbusa putih.{'\n'}
                - Kupas labu siam lalu iris tipis memanjang.{'\n'}
                - Taburi dengan sedikit garam dan remas-remas hingga airnya keluar. Bilas dengan air bersih lalu tiriskan.{'\n'}
                - Tumis bawang merah dan bawang putih hingga layu.{'\n'}
                - Tambahkan cabe merah, cabe rawit, lengkuas, daun salam dan ebi. Aduk hingga layu.{'\n'}
                - Masukkan irisan labu siam, aduk hingga rata.{'\n'}
                - Bumbui dengan kaldu jamur, merica dan garam. Aduk rata.{'\n'}
                - Tutup wajan dan masak hingga layu dan berair. Matikan api.{'\n'}
                </Text>
            </View>
        </ScrollView>
    )
}
