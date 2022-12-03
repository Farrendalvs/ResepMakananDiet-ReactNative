import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5'
// {'\n'} enter kalimat 
export default function Resepdaging3({navigation}) {
    return(
        <ScrollView style="flex: 1">
            <View style="">
                
                {/* ini icon ya */}
                <View style={{ width: 36, height: 36, backgroundColor: 'rgba(198,198,198,0.7)', alignContent: 'center', borderRadius: 12, alignItems: 'center', zIndex: 10 , marginTop: 30, marginLeft: 30}}>
                    <Icon name="arrow-left" size={18} color="#000000" onPress={() => navigation.goBack()} style={{ marginTop: 7}}/>
                </View>


            <Image source={require('../imgdaging/daging3.png')} style={{ width: 393, height: 300, marginTop: -67}}/>
            <View style={{ backgroundColor: '#829460', width: 393, height: 55, alignContent: 'center', alignItems: 'center', borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
                <Text style={{ color: '#ffffff', fontSize: 25, fontWeight: '500', marginTop: 10, fontFamily: 'Poppins-Medium'}}>BISTIK BOLA DAGING</Text>
            </View>
            </View>


            <View style={{ marginLeft: 30, marginRight: 30, marginTop: 20,}}>
                <Text style={{ color: "black", fontSize: 15, fontWeight: '300', lineHeight: 24, fontFamily: 'Poppins-Medium'
            }}>
                <Text style={{ color: 'black', fontSize: 18 }}>Bahan:</Text>{'\n'}
                - 500 g daging sapi giling{'\n'}
                - 3 siung bawang putih, haluskan{'\n'}
                - Secukupnya lada hitam bubuk dan bawang putih bubuk{'\n'}
                {'\n'}{'\n'}

                <Text style={{ color: 'black', fontSize: 18 }}>Saus:</Text>{'\n'}
                - 1/2 sisir gula jawa{'\n'}
                - 1/2 bh bawang bombai{'\n'}
                - 3 siung bawang putih{'\n'}
                - 5 siung bawang merah{'\n'}
                - 1 buah tomat{'\n'}
                - Secukupnya lada dan pala bubuk{'\n'}
                - Secukupnya air{'\n'}

                {'\n'}{'\n'}
                <Text style={{ color: 'black', fontSize: 18 }}>Cara Membuat:</Text>{'\n'}
                - Campurkan semua bahan adonan bistik, lalu buat bentuk bulat.{'\n'}
                - Untuk saus, tumis bawang putih dan bawang merah halus serta bawang bombai yang telah diiris tipis dengan mentega tawar.{'\n'}
                - Setelah wangi, masukkan tomat, aduk cepat.{'\n'}
                - Tambahkan air, gula jawa, lada, dan pala.{'\n'}
                - Tunggu hingga saus mendidih.{'\n'}
                - Masukkan adonan bistik ke dalam kuah saus. Biarkan hingga matang dan bumbu meresap.{'\n'}
                </Text>
            </View>
        </ScrollView>
    )
}
