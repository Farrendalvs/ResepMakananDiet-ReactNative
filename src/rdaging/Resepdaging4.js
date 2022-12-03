import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5'
// {'\n'} enter kalimat 
export default function Resepdaging4({navigation}) {
    return(
        <ScrollView style="flex: 1">
            <View style="">
                
                {/* ini icon ya */}
                <View style={{ width: 36, height: 36, backgroundColor: 'rgba(198,198,198,0.7)', alignContent: 'center', borderRadius: 12, alignItems: 'center', zIndex: 10 , marginTop: 30, marginLeft: 30}}>
                    <Icon name="arrow-left" size={18} color="#000000" onPress={() => navigation.goBack()} style={{ marginTop: 7}}/>
                </View>


            <Image source={require('../imgdaging/daging4.png')} style={{ width: 393, height: 300, marginTop: -67}}/>
            <View style={{ backgroundColor: '#829460', width: 393, height: 55, alignContent: 'center', alignItems: 'center', borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
                <Text style={{ color: '#ffffff', fontSize: 25, fontWeight: '500', marginTop: 10, fontFamily: 'Poppins-Medium'}}>AYAM SZECHUAN</Text>
            </View>
            </View>


            <View style={{ marginLeft: 30, marginRight: 30, marginTop: 20,}}>
                <Text style={{ color: "black", fontSize: 15, fontWeight: '300', lineHeight: 24, fontFamily: 'Poppins-Medium'
            }}>
                <Text style={{ color: 'black', fontSize: 18 }}>Bahan:</Text>{'\n'}
                - 1/8 cangkir air dingin{'\n'}
                - 1/8 kecap{'\n'}
                - 1 1/2 sdm cuka{'\n'}
                - 1/2 sdm tepung maizena{'\n'}
                - 1 sdt gula pasir{'\n'}
                - 1/2 sdt cabe bubuk{'\n'}
                - 1/2 buah cabai merah kecil{'\n'}
                - 1/2 buah cabai hijau kecil{'\n'}
                - 1 wortel ukuran sedang{'\n'}
                - 1 sdm canola{'\n'}
                - 500 gram dada ayam{'\n'}
                - 3 batang daun bawang, iris tipis{'\n'}
                - 1/2 sdt jahe segar cincang{'\n'}
                
                {'\n'}{'\n'}
                <Text style={{ color: 'black', fontSize: 18 }}>Cara Membuat:</Text>{'\n'}
                - Campurkan 6 bahan utama sampai rata{'\n'}
                - Panaskan minyak dan tumis ayam hingga datang sempurna.{'\n'}
                - Tumis sayuran hingga layu, dan campurkan dengan bahan lainnya.{'\n'}
                - Setelah masak tambahkan campuran tepung maizena. Tunggu hingga mengental.{'\n'}
                - Siap disajikan{'\n'}
                </Text>
            </View>
        </ScrollView>
    )
}
