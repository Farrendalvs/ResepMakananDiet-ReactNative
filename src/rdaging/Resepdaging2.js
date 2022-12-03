import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5'
// {'\n'} enter kalimat 
export default function Resepdaging2({navigation}) {
    return(
        <ScrollView style="flex: 1">
            <View style="">
                
                {/* ini icon ya */}
                <View style={{ width: 36, height: 36, backgroundColor: 'rgba(198,198,198,0.7)', alignContent: 'center', borderRadius: 12, alignItems: 'center', zIndex: 10 , marginTop: 30, marginLeft: 30}}>
                    <Icon name="arrow-left" size={18} color="#000000" onPress={() => navigation.goBack()} style={{ marginTop: 7}}/>
                </View>


            <Image source={require('../imgdaging/daging2.png')} style={{ width: 393, height: 300, marginTop: -67}}/>
            <View style={{ backgroundColor: '#829460', width: 393, height: 55, alignContent: 'center', alignItems: 'center', borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
                <Text style={{ color: '#ffffff', fontSize: 25, fontWeight: '500', marginTop: 10, fontFamily: 'Poppins-Medium'}}>AYAM LADA HITAM</Text>
            </View>
            </View>


            <View style={{ marginLeft: 30, marginRight: 30, marginTop: 20,}}>
                <Text style={{ color: "black", fontSize: 15, fontWeight: '300', lineHeight: 24, fontFamily: 'Poppins-Medium'
            }}>
                <Text style={{ color: 'black', fontSize: 18 }}>Bahan:</Text>{'\n'}
                - 3 siung bawang putih, iris tipis{'\n'}
                - 1 buah bawang bombay, iris lalu bagi dua bagian{'\n'}
                - 3 potong ayam, difillet ambil dagingnya lalu potong kecil kecil{'\n'}
                - secukupnya cabe/paprika (sesuai selera){'\n'}
                - 1 buah wortel, iris{'\n'}
                - 1 ikat kembang kol{'\n'}
                - Secukupnya lada hitam{'\n'}
                - Secukupnya gula{'\n'}
                - Secukupnya kecap{'\n'}
                - Secukupnya garam{'\n'}
                - Secukupnya merica{'\n'}
                - Secukupnya air/ air kaldu sayuran (diet){'\n'}
                - Secukupnya minyak sayur/wijen/olive oil (diet){'\n'}
                
                {'\n'}{'\n'}
                <Text style={{ color: 'black', fontSize: 18 }}>Cara Membuat:</Text>{'\n'}
                - Siapkan daging ayam yang telah difillet dan diiris kotak kotak. Taburi garam, merica, kecap dan lada hitam. Diamkan dalam chiller/kulkas selama minimal 30 menit.{'\n'}
                - Tumis dengan minyak sayur/wijen/olive oil sebagian bawang bombay hingga agak layu, tambahkan daging ayam yang telah disimpan. Tumis hingga ayam separuh matang, angkat, dan sisihkan.{'\n'}
                - Tumis sisa bawang bombay dengan minyak sayur/wijen/oliveoil lalu tambahkan bawang dan sayuran, kemudian berikan air/air kaldu sayuran. Masak hingga sayuran agak matang (jangan terlalu lembek/matang karena kandungan gizinya banyak yang hilang nanti){'\n'}
                - Tambahkan ayam bersama sayuran yang telah dimasak, aduk sebentar. Ayam lada hitam siap disajikan.{'\n'}
                </Text>
            </View>
        </ScrollView>
    )
}
