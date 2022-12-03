import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5'
// {'\n'} enter kalimat 
export default function Resepjus1({navigation}) {
    return(
        <ScrollView style="flex: 1">
            <View style="">
                
                {/* ini icon ya */}
                <View style={{ width: 36, height: 36, backgroundColor: 'rgba(198,198,198,0.7)', alignContent: 'center', borderRadius: 12, alignItems: 'center', zIndex: 10 , marginTop: 30, marginLeft: 30}}>
                    <Icon name="arrow-left" size={18} color="#000000" onPress={() => navigation.goBack()} style={{ marginTop: 7}}/>
                </View>


            <Image source={require('../imgjus/jus2.png')} style={{ width: 393, height: 300, marginTop: -67}}/>
            <View style={{ backgroundColor: '#829460', width: 393, height: 55, alignContent: 'center', alignItems: 'center', borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
                <Text style={{ color: '#ffffff', fontSize: 25, fontWeight: '500', marginTop: 10, fontFamily: 'Poppins-Medium'}}>JUS WORTEL</Text>
            </View>
            </View>


            <View style={{ marginLeft: 30, marginRight: 30, marginTop: 20,}}>
                <Text style={{ color: "black", fontSize: 15, fontWeight: '300', lineHeight: 24, fontFamily: 'Poppins-Medium'
            }}>
                <Text style={{ color: 'black', fontSize: 18 }}>Bahan:</Text>{'\n'}
                - 2 buah wortel ukuran sedang{'\n'}
                - 2 buah jeruk manis (opsional){'\n'}
                - 2 sendok makan gula pasir{'\n'}
                - Kental manis putih (opsional){'\n'}
                - Air matang secukupnya{'\n'}
                - Es batu secukupnya (opsional){'\n'}
                {'\n'}{'\n'}
                
                <Text style={{ color: 'black', fontSize: 18 }}>Cara Membuat:</Text>{'\n'}
                - Siapkan wortel, kupas, dan cuci dengan air bersih yang mengalir hingga bersih.{'\n'}
                - Potong wortel yang sudah dibersihkan kecil-kecil.{'\n'}
                - Siapkan jeruk, potong-potong jadi 2 bagian, lalu peras airnya.{'\n'}
                - Siapkan blender, masukkan potongan wortel, air perasan jeruk, gula pasir, dan air ke dalamnya.{'\n'}
                - Haluskan dengan kecepatan tinggi sampai benar-benar halus dan tercampur merata.{'\n'}
                - Siapkan gelas, tuangkan es batu ke dalamnya.{'\n'}
                - Tuangkan kental manis ke dalam gelas di bagian pinggirannya.{'\n'}
                - Siapkan saringan, letakkan di atas gelas, lalu tuangkan jus wortel yang sudah diblender tadi.{'\n'}
                - Jus Wortel siap disantap.{'\n'}

                </Text>
            </View>
        </ScrollView>
    )
}
