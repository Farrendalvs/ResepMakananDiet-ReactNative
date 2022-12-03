import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5'
// {'\n'} enter kalimat 
export default function Resepbuah3({navigation}) {
    return(
        <ScrollView style="flex: 1">
            <View style="">
                
                {/* ini icon ya */}
                <View style={{ width: 36, height: 36, backgroundColor: 'rgba(198,198,198,0.7)', alignContent: 'center', borderRadius: 12, alignItems: 'center', zIndex: 10 , marginTop: 30, marginLeft: 30}}>
                    <Icon name="arrow-left" size={18} color="#000000" onPress={() => navigation.goBack()} style={{ marginTop: 7}}/>
                </View>


            <Image source={require('../imgbuah/buah2.jpeg')} style={{ width: 393, height: 300, marginTop: -67}}/>
            <View style={{ backgroundColor: '#829460', width: 393, height: 55, alignContent: 'center', alignItems: 'center', borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
                <Text style={{ color: '#ffffff', fontSize: 25, fontWeight: '500', marginTop: 10, fontFamily: 'Poppins-Medium'}}>DONAT BUAH NAGA</Text>
            </View>
            </View>


            <View style={{ marginLeft: 30, marginRight: 30, marginTop: 20,}}>
                <Text style={{ color: "black", fontSize: 15, fontWeight: '300', lineHeight: 24, fontFamily: 'Poppins-Medium'
            }}>
                <Text style={{ color: 'black', fontSize: 18 }}>Bahan:</Text>{'\n'}
                - 300 gr tepung terigu protein tinggi{'\n'}
                - 150 gr buah naga{'\n'}
                - 1 butir telur{'\n'}
                - 4 sdm madu{'\n'}
                - 4 sdm susu bubuk{'\n'}
                - 1 sdt fermipan, larutkan dengan air hangat{'\n'}
                - 1 sdm mentega{'\n'}
                - Sejumput garam{'\n'}

                
                {'\n'}{'\n'}
                <Text style={{ color: 'black', fontSize: 18 }}>Cara Membuat:</Text>{'\n'}
                - Campurkan tepung, fermipan, madu, garam, dan telur. Lalu aduk sambil diberi potongan buah naga.{'\n'}
                - Tambahkan mentega dan susu bubuk, ulenin adonan sampai kalis. Diamkan satu jam dan tutup hingga mengembang.{'\n'}
                - Tinju adonan lalu timbang masing-masing 40 gram. Bentuk bulatan, pipihkan, dan beri lubang tengahnya.{'\n'}
                - Panggang atau oven donat selama 10 menit. Jika sudah matang, keluarkan adonan.{'\n'}
                - Jika donat sudah dingin, celupkan di toping yang kalian suka.{'\n'}
                </Text>
            </View>
        </ScrollView>
    )
}

