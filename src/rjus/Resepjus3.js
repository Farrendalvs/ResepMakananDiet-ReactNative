import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5'
// {'\n'} enter kalimat 
export default function Resepjus3({navigation}) {
    return(
        <ScrollView style="flex: 1">
            <View style="">
                
                {/* ini icon ya */}
                <View style={{ width: 36, height: 36, backgroundColor: 'rgba(198,198,198,0.7)', alignContent: 'center', borderRadius: 12, alignItems: 'center', zIndex: 10 , marginTop: 30, marginLeft: 30}}>
                    <Icon name="arrow-left" size={18} color="#000000" onPress={() => navigation.goBack()} style={{ marginTop: 7}}/>
                </View>


            <Image source={require('../imgjus/jus4.png')} style={{ width: 393, height: 300, marginTop: -67}}/>
            <View style={{ backgroundColor: '#829460', width: 393, height: 55, alignContent: 'center', alignItems: 'center', borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
                <Text style={{ color: '#ffffff', fontSize: 25, fontWeight: '500', marginTop: 10, fontFamily: 'Poppins-Medium'}}>JUS NANAS</Text>
            </View>
            </View>


            <View style={{ marginLeft: 30, marginRight: 30, marginTop: 20,}}>
                <Text style={{ color: "black", fontSize: 15, fontWeight: '300', lineHeight: 24, fontFamily: 'Poppins-Medium'
            }}>
                <Text style={{ color: 'black', fontSize: 18 }}>Bahan:</Text>{'\n'}
                - 300 gr buah nanas yang matang dan sudah bersih{'\n'}
                - Air matang secukupnya{'\n'}
                - 1 sendok sayur gula batu yang dicairkan{'\n'}
                - Susu kental manis secukupnya{'\n'}
                - Es batu secukupnya{'\n'}
                {'\n'}{'\n'}
                
                <Text style={{ color: 'black', fontSize: 18 }}>Cara Membuat:</Text>{'\n'}
                - Ambil buah nanas yang sudah disiapkan.{'\n'}
                - Lalu potong-potong buah nanas dengan ukuran sesuai selera.{'\n'}
                - Masukkan buah nanas yang sudah dipotong kedalam blender.{'\n'}
                - Masukkan juga air matang dan gula.{'\n'}
                - Kemudian tambahkan susu kental manis dan siap diblend dengan kecepatan sedang selama 2-3 menit.{'\n'}
                - Tuang kedalam gelas saji yang sudah diisi dengan es batu kemudian siap untuk dinikmati.{'\n'}

                </Text>
            </View>
        </ScrollView>
    )
}
