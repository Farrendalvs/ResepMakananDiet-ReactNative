import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5'
// {'\n'} enter kalimat 
export default function Resepdaging1({navigation}) {
    return(
        <ScrollView style="flex: 1">
            <View style="">
                
                {/* ini icon ya */}
                <View style={{ width: 36, height: 36, backgroundColor: 'rgba(198,198,198,0.7)', alignContent: 'center', borderRadius: 12, alignItems: 'center', zIndex: 10 , marginTop: 30, marginLeft: 30}}>
                    <Icon name="arrow-left" size={18} color="#000000" onPress={() => navigation.goBack()} style={{ marginTop: 7}}/>
                </View>


            <Image source={require('../imgdaging/daging1.png')} style={{ width: 393, height: 300, marginTop: -67}}/>
            <View style={{ backgroundColor: '#829460', width: 393, height: 55, alignContent: 'center', alignItems: 'center', borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
                <Text style={{ color: '#ffffff', fontSize: 25, fontWeight: '500', marginTop: 10, fontFamily: 'Poppins-Medium'}}>AYAM ASAM MANIS</Text>
            </View>
            </View>


            <View style={{ marginLeft: 30, marginRight: 30, marginTop: 20,}}>
                <Text style={{ color: "black", fontSize: 15, fontWeight: '300', lineHeight: 24, fontFamily: 'Poppins-Medium'
            }}>
                <Text style={{ color: 'black', fontSize: 18 }}>Bahan:</Text>{'\n'}
                - 7 ons nanas potong{'\n'}
                - 1 sdm tepung maizena{'\n'}
                - 1 sdm gula merah{'\n'}
                - 1/2 sdt garam{'\n'}
                - 1/8 sdt jahe bubuk{'\n'}
                - 1/8 sdt merica{'\n'}
                - 1/6 gelas air{'\n'}
                - 1/6 cangkir saus tomat{'\n'}
                - 1 sdm cuka putih{'\n'}
                - 1 sdm kecap{'\n'}
                - 250 gram daging ayam{'\n'}
                - 1/2 bawang bombay ukuran sedang{'\n'}
                - 1 sendok makan minyak canola{'\n'}
                - 1/2 paprika, potong tipis-tipis{'\n'}
                - Nasi panas{'\n'}
                
                {'\n'}{'\n'}
                <Text style={{ color: 'black', fontSize: 18 }}>Cara Membuat:</Text>{'\n'}
                - Jus nanas hingga halus, dan campurkan dengan bahan kering.{'\n'}
                - Lalu masukan air bahan-bahan cair, aduk hingga lembut. Sisihkan.{'\n'}
                - Tumis daging bersama irisan bawang sampai harum. Kemudian tambahkan saus, tunggu hingga mengental.{'\n'}
                - Didihkan dan terakhir tambahkan paprika.{'\n'}
                - Siap disajikan{'\n'}
                </Text>
            </View>
        </ScrollView>
    )
}
