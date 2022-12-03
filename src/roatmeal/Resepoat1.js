import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5'
// {'\n'} enter kalimat 
export default function Resepoat1({navigation}) {
    return(
        <ScrollView style="flex: 1">
            <View style="">
                
                {/* ini icon ya */}
                <View style={{ width: 36, height: 36, backgroundColor: 'rgba(198,198,198,0.7)', alignContent: 'center', borderRadius: 12, alignItems: 'center', zIndex: 10 , marginTop: 30, marginLeft: 30}}>
                    <Icon name="arrow-left" size={18} color="#000000" onPress={() => navigation.goBack()} style={{ marginTop: 7}}/>
                </View>


            <Image source={require('../imgoatmeal/oatmeal1.png')} style={{ width: 393, height: 300, marginTop: -67}}/>
            <View style={{ backgroundColor: '#829460', width: 393, height: 55, alignContent: 'center', alignItems: 'center', borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
                <Text style={{ color: '#ffffff', fontSize: 25, fontWeight: '500', marginTop: 10, fontFamily: 'Poppins-Medium'}}>FRUIT BAKE OATMEAL</Text>
            </View>
            </View>


            <View style={{ marginLeft: 30, marginRight: 30, marginTop: 20,}}>
                <Text style={{ color: "black", fontSize: 15, fontWeight: '300', lineHeight: 24, fontFamily: 'Poppins-Medium'
            }}>
                <Text style={{ color: 'black', fontSize: 18 }}>Bahan:</Text>{'\n'}
                - 180 g rolled oats{'\n'}
                - 80 g maple syrup{'\n'}
                - 1 sdt baking powder{'\n'}
                - 1 sdt cinnamon powder{'\n'}
                - 1/2 sdt garam{'\n'}
                - 450 ml susu cair{'\n'}
                - 1 telur{'\n'}
                - 25 gram minyak sayur{'\n'}
                - 2 sdt vanilla{'\n'}
                - 1 pisang, haluskan{'\n'}

                {'\n'}
                Bahan Tambahan:{'\n'}
                - 1 pisang, iris tipis{'\n'}
                - 40 gram choco chips{'\n'}
                - Susu untuk penyajian{'\n'}
                {'\n'}{'\n'}

                <Text style={{ color: 'black', fontSize: 18 }}>Cara Membuat:</Text>{'\n'}
                - Panaskan oven suhu 190 derajat Celcius. Olesi loyang dengan minyak.{'\n'}
                - Campur semua bahan utama dengan spatula.{'\n'}
                - Tambahkan 3/4 bahan tambahan, aduk rata lalu tuang ke cetakan.{'\n'}
                - Taburi dengan sisa bahan tambahan.{'\n'}
                - Panggang selama 50-60 menit.{'\n'}
                - Angkat lalu potong sesuai selera.{'\n'}
                </Text>
            </View>
        </ScrollView>
    )
}
