import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5'
// {'\n'} enter kalimat 
export default function Reseppasta4({navigation}) {
    return(
        <ScrollView style="flex: 1">
            <View style="">
                
                {/* ini icon ya */}
                <View style={{ width: 36, height: 36, backgroundColor: 'rgba(198,198,198,0.7)', alignContent: 'center', borderRadius: 12, alignItems: 'center', zIndex: 10 , marginTop: 30, marginLeft: 30}}>
                    <Icon name="arrow-left" size={18} color="#000000" onPress={() => navigation.goBack()} style={{ marginTop: 7}}/>
                </View>


            <Image source={require('../imgpasta/pasta4.png')} style={{ width: 393, height: 300, marginTop: -67}}/>
            <View style={{ backgroundColor: '#829460', width: 393, height: 55, alignContent: 'center', alignItems: 'center', borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
                <Text style={{ color: '#ffffff', fontSize: 25, fontWeight: '500', marginTop: 10, fontFamily: 'Poppins-Medium'}}>PASTA BOLOGNESE</Text>
            </View>
            </View>


            <View style={{ marginLeft: 30, marginRight: 30, marginTop: 20,}}>
                <Text style={{ color: "black", fontSize: 15, fontWeight: '300', lineHeight: 24, fontFamily: 'Poppins-Medium'
            }}>
                <Text style={{ color: 'black', fontSize: 18 }}>Bahan:</Text>{'\n'}
                - 300gr pasta{'\n'}
                - 1 sdm minyak zaitun{'\n'}
                - 1 bawang bombay, cincang halus{'\n'}
                - 2 batang seledri, cincang halus{'\n'}
                - 1 papan oncom merah{'\n'}
                - 1 wortel besar, potong dadu{'\n'}
                - 2 siung bawang putih, cincang halus{'\n'}
                - 6 buah tomat merah{'\n'}
                - 2 sdt oregano kering{'\n'}
                - 5 buah jamur champignon, iris tipis{'\n'}
                - 1 buah terong, potong dadu{'\n'}
                - 200ml saus tomat{'\n'}
                - 3 sdm pasta tomat{'\n'}
                - 1 sdt garam{'\n'}
                - 1 sdt lada{'\n'}
                - 1 sdt kaldu sayuran organik{'\n'}
                {'\n'}{'\n'}
                
                <Text style={{ color: 'black', fontSize: 18 }}>Cara Membuat:</Text>{'\n'}
                - Iris kulit tomat, lalu rebus. Buang kulitnya, dan blender hingga halus.{'\n'}
                - Panaskan minyak dalam wajan besar di atas api sedang. Tambahkan bawang, seledri, jamur dan wortel, masak perlahan selama 10 menit, aduk secara teratur, sampai lunak. Tambahkan oncom yang sudah dipotong, tenak agar oncom hancur.{'\n'}
                - Masukan pasta tomat, aduk selama 1 menit, lalu tambahkan jamur, terong, tomat cincang, saus tomat, kaldu sayuran, dan 200ml air, masak beberapa saat. Masukan garam dan lada, lalu diaduk rata.{'\n'}
                - Didihkan lalu kecilkan api hingga mendidih perlahan. Tutup panci dengan longgar dan masak selama 40-50 menit sampai saus mengental dengan konsistensi yang kamu inginkan. Aduk sesering mungkin dan tambahkan sedikit air jika saus mulai menempel di dasar panci.{'\n'}
                - Siapkan pasta yang sudah direbus diatas piring, siram dengan saus bolognese oncom, tambahkan kemangi di atasnya. Vegan spaghetti bolognese siap disajikan.{'\n'}
                </Text>
            </View>
        </ScrollView>
    )
}
