import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5'
// {'\n'} enter kalimat 
export default function Resepsayur2({navigation}) {
    return(
        <ScrollView style="flex: 1">
            <View style="">
                
                {/* ini icon ya */}
                <View style={{ width: 36, height: 36, backgroundColor: 'rgba(198,198,198,0.7)', alignContent: 'center', borderRadius: 12, alignItems: 'center', zIndex: 10 , marginTop: 30, marginLeft: 30}}>
                    <Icon name="arrow-left" size={18} color="#000000" onPress={() => navigation.goBack()} style={{ marginTop: 7}}/>
                </View>


            <Image source={require('../imgsayur/sayur2.png')} style={{ width: 393, height: 300, marginTop: -67}}/>
            <View style={{ backgroundColor: '#829460', width: 393, height: 55, alignContent: 'center', alignItems: 'center', borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
                <Text style={{ color: '#ffffff', fontSize: 25, fontWeight: '500', marginTop: 10, fontFamily: 'Poppins-Medium'}}>CAESAR SALAD</Text>
            </View>
            </View>


            <View style={{ marginLeft: 30, marginRight: 30, marginTop: 20,}}>
                <Text style={{ color: "black", fontSize: 15, fontWeight: '300', lineHeight: 24, fontFamily: 'Poppins-Medium'
            }}>
                <Text style={{ color: 'black', fontSize: 18 }}>Bahan:</Text>{'\n'}
                Ayam Panggang:{'\n'}
                - 2 potong fillet ayam{'\n'}
                - 2 sdm minyak sayur{'\n'}
                - 1 sdt bawang putih parut{'\n'}
                - 1/2 sdt merica bubuk{'\n'}
                - 1 sdm air jeruk lemon{'\n'}
                - 1 sdt garam{'\n'}
                {'\n'}
                Salad:{'\n'}
                - 250 g cos lettuce{'\n'}
                - 2 sdm keju parmesan parut{'\n'}
                {'\n'}
                Saus:{'\n'}
                - 200 ml mayones botolan{'\n'}
                - 1 sdm air jeruk lemon{'\n'}
                - 1 sdt mustard pasta{'\n'}
                - 1 sdm saus LP/BBQ{'\n'}
                - 1 sdm keju parmesan bubuk{'\n'}
                - 1/2 sdt merica bubuk{'\n'}
                - 1/2 sdt garam{'\n'}
                {'\n'}
                Pelengkap:{'\n'}
                Roti panggang/crouton{'\n'}
                {'\n'}{'\n'}

                <Text style={{ color: 'black', fontSize: 18 }}>Cara Membuat:</Text>{'\n'}
                - Belah membujur fillet ayam hingga agak tipis.{'\n'}
                - Bumbui dengan bawang putih, minyak, air lemon dan garam. Remas-remas hingga terlapisi bumbu. Diamkan selama 15 menit.{'\n'}
                - Panaskan wajan, masak fillet ayam hingga matang kedua sisinya dan kecokelatan.{'\n'}
                {'\n'}
                Saus:{'\n'}
                - Aduk semua bahan saus hingga tercampur rata dan licin.{'\n'}
                - Potong-potong kasar cos lettuce, taruh di piring saji.{'\n'}
                - Potong-potong ayam, taburkan ke atas lettuce.{'\n'}
                - Tambahkan sausnya dan sebelum disajikan taburi keju parmesan dan roti panggang.{'\n'}
                </Text>
            </View>
        </ScrollView>
    )
}
