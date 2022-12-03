import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5'
// {'\n'} enter kalimat 
export default function Resepjus4({navigation}) {
    return(
        <ScrollView style="flex: 1">
            <View style="">
                
                {/* ini icon ya */}
                <View style={{ width: 36, height: 36, backgroundColor: 'rgba(198,198,198,0.7)', alignContent: 'center', borderRadius: 12, alignItems: 'center', zIndex: 10 , marginTop: 30, marginLeft: 30}}>
                    <Icon name="arrow-left" size={18} color="#000000" onPress={() => navigation.goBack()} style={{ marginTop: 7}}/>
                </View>


            <Image source={require('../imgjus/jus3.png')} style={{ width: 393, height: 300, marginTop: -67}}/>
            <View style={{ backgroundColor: '#829460', width: 393, height: 55, alignContent: 'center', alignItems: 'center', borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
                <Text style={{ color: '#ffffff', fontSize: 25, fontWeight: '500', marginTop: 10, fontFamily: 'Poppins-Medium'}}>JUS JERUK</Text>
            </View>
            </View>


            <View style={{ marginLeft: 30, marginRight: 30, marginTop: 20,}}>
                <Text style={{ color: "black", fontSize: 15, fontWeight: '300', lineHeight: 24, fontFamily: 'Poppins-Medium'
            }}>
                <Text style={{ color: 'black', fontSize: 18 }}>Bahan:</Text>{'\n'}
                - 5 buah jeruk segar(bisa anda pakai jeruk mandarin){'\n'}
                - Lemon sebanyak 1/2 buah, untuk bahan olesan di bibir gelas{'\n'}
                - Gula pasir sebanyak 1/2 kg, lalu rebus dan cairkan{'\n'}
                - Susu Kental manis untuk campuran (secukupnya){'\n'}
                - Es batu 1 balok, kemudian geprek hancur{'\n'}
                - Air putih secukupnya, buat campuran{'\n'}
                {'\n'}{'\n'}
                
                <Text style={{ color: 'black', fontSize: 18 }}>Cara Membuat:</Text>{'\n'}
                - Pertama, kupas atau belah jeruk terlebih dahulu, setelah itu masukan ke dalam blender.{'\n'}
                - Masukan air rebusan gula pasir tadi dan juga air putih sedikit saja.{'\n'}
                - Masukan es batu dan susu kental manis yang telah di siapkan sebelumnya.{'\n'}
                - Kemudian blender seluruh bahan tadi sampai halus dan tercampur rata.{'\n'}
                - Kemudian tuangkan jus jeruk ke dalam gelas saji tadi, ingat mesti disaring biar tak masuk ampas jeruknya.{'\n'}
                - Nah, untuk gelas sajinya Anda dapat olesi dengan jeruk lemon yang telah dibelah, putarkan ke seluruh bibir gelas{'\n'}
                - Maka es jus jeruk segar telah siap dihidangkan.{'\n'}
                                </Text>
            </View>
        </ScrollView>
    )
}
