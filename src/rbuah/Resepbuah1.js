import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5'
// {'\n'} enter kalimat 
export default function Resepbuah1({navigation}) {
    return(
        <ScrollView style="flex: 1">
            <View style="">
                
                {/* ini icon ya */}
                <View style={{ width: 36, height: 36, backgroundColor: 'rgba(198,198,198,0.7)', alignContent: 'center', borderRadius: 12, alignItems: 'center', zIndex: 10 , marginTop: 30, marginLeft: 30}}>
                    <Icon name="arrow-left" size={18} color="#000000" onPress={() => navigation.goBack()} style={{ marginTop: 7}}/>
                </View>


            <Image source={require('../imgbuah/buah1.jpeg')} style={{ width: 393, height: 300, marginTop: -67}}/>
            <View style={{ backgroundColor: '#829460', width: 393, height: 55, alignContent: 'center', alignItems: 'center', borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
                <Text style={{ color: '#ffffff', fontSize: 25, fontWeight: '500', marginTop: 10, fontFamily: 'Poppins-Medium'}}>BANANA PANCAKES</Text>
            </View>
            </View>


            <View style={{ marginLeft: 30, marginRight: 30, marginTop: 20,}}>
                <Text style={{ color: "black", fontSize: 15, fontWeight: '300', lineHeight: 24, fontFamily: 'Poppins-Medium'
            }}>
                <Text style={{ color: 'black', fontSize: 18 }}>Bahan:</Text>{'\n'}
                - 200 gram tepung terigu serbaguna{'\n'}
                - 2 buah pisang ambon yg matang sekali (haluskan dg garpu){'\n'}
                - 200 ml susu cair{'\n'}
                - 1 sdm gula pasir{'\n'}
                - 2 sdm butter/margarin leleh (bisa pakai minyak sayur){'\n'}
                - 1/4 sdt garam{'\n'}
                - 1 sdt baking powder{'\n'}
                - 1 butir telur{'\n'}
                {'\n'}
                Topping: Honey/madu, gula halus, blueberry/strawberry jam, potongan buah, dll{'\n'}
                {'\n'}{'\n'}
                <Text style={{ color: 'black', fontSize: 18 }}>Cara Membuat:</Text>{'\n'}
                - Kocok lepas telur,tambahkan pisang halus,susu cair,garam & butter/margarin leleh,aduk rata,sisihkan.{'\n'}
                - Dalam wadah terpisah campur bahan kering,terigu,gula pasir & baking powder,aduk rata.{'\n'}
                - Tuang adonan pisang & susu kedalan adonan kering,aduk perlahan sampai tercampur rata(tdk perlu terlalu kuat supaya hasil pancake lembut).{'\n'}
                - Panaskan wajan datar,tuang 1 sendok sayur,tunggu sampai bagian bawah pancake berwarna coklat baru balik & masak sampai matang, angkat. Lakukan sampai habis & banana pancake siap disajikan dg berbagai topping sesuai selera.{'\n'}
                </Text>
            </View>
        </ScrollView>
    )
}
