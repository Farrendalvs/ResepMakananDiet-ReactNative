import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5'
// {'\n'} enter kalimat 
export default function Resepsayur4({navigation}) {
    return(
        <ScrollView style="flex: 1">
            <View style="">
                
                {/* ini icon ya */}
                <View style={{ width: 36, height: 36, backgroundColor: 'rgba(198,198,198,0.7)', alignContent: 'center', borderRadius: 12, alignItems: 'center', zIndex: 10 , marginTop: 30, marginLeft: 30}}>
                    <Icon name="arrow-left" size={18} color="#000000" onPress={() => navigation.goBack()} style={{ marginTop: 7}}/>
                </View>


            <Image source={require('../imgsayur/sayur4.png')} style={{ width: 393, height: 300, marginTop: -67}}/>
            <View style={{ backgroundColor: '#829460', width: 393, height: 55, alignContent: 'center', alignItems: 'center', borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
                <Text style={{ color: '#ffffff', fontSize: 25, fontWeight: '500', marginTop: 10, fontFamily: 'Poppins-Medium'}}>GREEK SALAD</Text>
            </View>
            </View>


            <View style={{ marginLeft: 30, marginRight: 30, marginTop: 20,}}>
                <Text style={{ color: "black", fontSize: 15, fontWeight: '300', lineHeight: 24, fontFamily: 'Poppins-Medium'
            }}>
                <Text style={{ color: 'black', fontSize: 18 }}>Bahan:</Text>{'\n'}
                - 24 buah zaitun{'\n'}
                - 200 gram keju feta (keju dari Yunani yang terbuat dari fermentasi susu domba){'\n'}
                - 250 gram selada bokor, sobek-sobek daunnya{'\n'}
                - 100 gram timun, kupas dan iris melintang{'\n'}
                - 375 gram tomat, iris melintang (bisa juga menggunaka tomat cherry){'\n'}
                - 200 gram paprika merah, potong kotak{'\n'}
                - 200 gram paprika hijau{'\n'}
                - 200 gram paprika kuning{'\n'}
                - 50 gram bawang bombay, iris tipis{'\n'}
                {'\n'}
                Dressing:{'\n'}
                - 6 sendok makan minyak zaitun{'\n'}
                - 6 sendok makan cuka anggur merah{'\n'}
                - ¼ sendok teh oregano kering {'\n'}
                {'\n'}{'\n'}
                
                <Text style={{ color: 'black', fontSize: 18 }}>Cara Membuat:</Text>{'\n'}
                - Aduk rata bahan dressing.{'\n'}
                - Masukkan semua bahan sayuran ke dalam mangkuk.{'\n'}
                - Tuang dressing, aduk rata. Masukkan ke dalam piring saji. Taburi zaitun dan keju feta.{'\n'}
                </Text>
            </View>
        </ScrollView>
    )
}
