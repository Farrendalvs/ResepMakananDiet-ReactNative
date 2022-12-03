import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5'
// {'\n'} enter kalimat 
export default function Resepsayur1({navigation}) {
    return(
        <ScrollView style="flex: 1">
            <View style="">
                
                {/* ini icon ya */}
                <View style={{ width: 36, height: 36, backgroundColor: 'rgba(198,198,198,0.7)', alignContent: 'center', borderRadius: 12, alignItems: 'center', zIndex: 10 , marginTop: 30, marginLeft: 30}}>
                    <Icon name="arrow-left" size={18} color="#000000" onPress={() => navigation.goBack()} style={{ marginTop: 7}}/>
                </View>


            <Image source={require('../imgsayur/sayur1.png')} style={{ width: 393, height: 300, marginTop: -67}}/>
            <View style={{ backgroundColor: '#829460', width: 393, height: 55, alignContent: 'center', alignItems: 'center', borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
                <Text style={{ color: '#ffffff', fontSize: 25, fontWeight: '500', marginTop: 10, fontFamily: 'Poppins-Medium'}}>TUMIS BROKOLI AYAM</Text>
            </View>
            </View>


            <View style={{ marginLeft: 30, marginRight: 30, marginTop: 20,}}>
                <Text style={{ color: "black", fontSize: 15, fontWeight: '300', lineHeight: 24, fontFamily: 'Poppins-Medium'
            }}>
                <Text style={{ color: 'black', fontSize: 18 }}>Bahan:</Text>{'\n'}
                - 1/2 kg ayam{'\n'}
                - Secukupnya brokoli{'\n'}
                - 2 siung bawang putih (cincang){'\n'}
                - 4 sdm saus tiram{'\n'}
                - 2 sdm kecap manis{'\n'}
                - 1/2 btr bawang bombay{'\n'}
                - penyedap rasa (secukupnya){'\n'}
                - 1/2 sdt lada{'\n'}
                - Secukupnya air{'\n'}
                - 1 sdm palmia margarine serbaguna{'\n'}
                {'\n'}{'\n'}
                
                <Text style={{ color: 'black', fontSize: 18 }}>Cara Membuat:</Text>{'\n'}
                - Rebus ayam hingga lunak.{'\n'}
                - Panaskan margarine di penggorengan, lalu tumis bawang bombay, bawang putih, hingga harum lalu masukkan brokoli.{'\n'}
                - Masukkan ayam, saus tiram kecap manis, dan air, lanjut masak hingga bumbu meresap dan matang.{'\n'}
                - Sajikan.{'\n'}
                </Text>
            </View>
        </ScrollView>
    )
}
