import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5'
// {'\n'} enter kalimat 
export default function Resepoat2({navigation}) {
    return(
        <ScrollView style="flex: 1">
            <View style="">
                
                {/* ini icon ya */}
                <View style={{ width: 36, height: 36, backgroundColor: 'rgba(198,198,198,0.7)', alignContent: 'center', borderRadius: 12, alignItems: 'center', zIndex: 10 , marginTop: 30, marginLeft: 30}}>
                    <Icon name="arrow-left" size={18} color="#000000" onPress={() => navigation.goBack()} style={{ marginTop: 7}}/>
                </View>


            <Image source={require('../imgoatmeal/oatmeal2.png')} style={{ width: 393, height: 300, marginTop: -67}}/>
            <View style={{ backgroundColor: '#829460', width: 393, height: 55, alignContent: 'center', alignItems: 'center', borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
                <Text style={{ color: '#ffffff', fontSize: 25, fontWeight: '500', marginTop: 10, fontFamily: 'Poppins-Medium'}}>OATMEAL COOKIES</Text>
            </View>
            </View>


            <View style={{ marginLeft: 30, marginRight: 30, marginTop: 20,}}>
                <Text style={{ color: "black", fontSize: 15, fontWeight: '300', lineHeight: 24, fontFamily: 'Poppins-Medium'
            }}>
                <Text style={{ color: 'black', fontSize: 18 }}>Bahan:</Text>{'\n'}
                - 200 gram salted butter{'\n'}
                - 50 gram margarin{'\n'}
                - 169-179 gram gula palem{'\n'}
                - 1/2 sdt pasta vanilla{'\n'}
                - 2 kuning telur{'\n'}
                - 1/2 sdt baking powder{'\n'}
                - 150 gram choco chips{'\n'}
                - 200 gram oatmeal{'\n'}
                - 250 gram tepung protein rendah{'\n'}
                - 1 sdt cinnamon powder{'\n'}
                
                {'\n'}{'\n'}
                <Text style={{ color: 'black', fontSize: 18 }}>Cara Membuat:</Text>{'\n'}
                - Panaskan oven 160 derajat.{'\n'}
                - Campur butter, margarin, dan gula palem pakai mixer sampai mengembang.{'\n'}
                - Masukkan kuning telur dan pasta vanila. Mixer sampai rata.{'\n'}
                - Masukan tepung, baking powder, dan cinnamon powder yang sudah diayak. Aduk rata pakai spatula.{'\n'}
                - Masukkan choco chips. Bentuk sesuai selera.{'\n'}
                - Panggang kurang lebih 30 menit dengan suhu 169 derajat{'\n'}
                </Text>
            </View>
        </ScrollView>
    )
}
