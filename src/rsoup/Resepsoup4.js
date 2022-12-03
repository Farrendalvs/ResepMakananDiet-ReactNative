import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5'
// {'\n'} enter kalimat 
export default function Resepsoup4({navigation}) {
    return(
        <ScrollView style="flex: 1">
            <View style="">
                
                {/* ini icon ya */}
                <View style={{ width: 36, height: 36, backgroundColor: 'rgba(198,198,198,0.7)', alignContent: 'center', borderRadius: 12, alignItems: 'center', zIndex: 10 , marginTop: 30, marginLeft: 30}}>
                    <Icon name="arrow-left" size={18} color="#000000" onPress={() => navigation.goBack()} style={{ marginTop: 7}}/>
                </View>


            <Image source={require('../imgsoup/soup3.png')} style={{ width: 393, height: 300, marginTop: -67}}/>
            <View style={{ backgroundColor: '#829460', width: 393, height: 55, alignContent: 'center', alignItems: 'center', borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
                <Text style={{ color: '#ffffff', fontSize: 25, fontWeight: '500', marginTop: 10, fontFamily: 'Poppins-Medium' }}>SOUP KIMLO</Text>
            </View>
            </View>


            <View style={{ marginLeft: 30, marginRight: 30, marginTop: 20,}}>
                <Text style={{ color: "black", fontSize: 15, fontWeight: '300', lineHeight: 24, fontFamily: 'Poppins-Medium'
            }}>
                <Text style={{ color: 'black', fontSize: 18 }}>Bahan:</Text>{'\n'}
                - 250 gr ayam potong{'\n'}
                - 1/2 siung bawang bombay, cincang{'\n'}
                -  buah kentang{'\n'}
                - 1 buah wortel{'\n'}
                - 1 buah tomat{'\n'}
                - 100 gr jamur, rendam dalam air{'\n'}
                - Secukupnya soun{'\n'}
                - 100 gr bakso (belah dua){'\n'}
                - 1 buah kapulaga{'\n'}
                - 1 buah bunga lawang{'\n'}
                - 2 batang daun seledri{'\n'}
                - 1 batang daun bawang{'\n'}
                - Secukupnya garam{'\n'}
                - Secukupnya gula{'\n'}
                - Secukupnya air{'\n'}
                - 1 sdm minyak{'\n'}
                {'\n'}
                Bumbu Halus:{'\n'}
                - 8 siung bawang merah{'\n'}
                - 6 siung bawang putih{'\n'}
                - 1 sdt lada bubuk{'\n'}
                - 1/4 buah pala{'\n'}

                {'\n'}{'\n'}
                
                <Text style={{ color: 'black', fontSize: 18 }}>Cara Membuat:</Text>{'\n'}
                - Haluskan bumbu.{'\n'}
                - Siapkan panci. Masukkan minyak goreng, lalu masukkan bawang bombay, setelah harum masukkan bumbu.{'\n'}
                - Masukkan ayam, aduk rata, lalu masukkan air. Setelah ayam setengah empuk atau setelah 10 menit, masukkan kentang dan wortel yang sudah dipotong-potong, kapulaga, bunga lawang, garam, dan gula.{'\n'}
                - Aduk rata. Setelah kentang, wortel, dan ayamnya empuk, masukkan tomat, daun sop, daun bawang, jamur, bakso, dan soun. Masak hingga matang.{'\n'}
                - Setelah matang, angkat.{'\n'}
                - Sop kimlo siap disajikan.{'\n'}
                </Text>
            </View>
        </ScrollView>
    )
}
