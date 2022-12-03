import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, ImageBackground, Image, SliderBase  } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Iicon from 'react-native-vector-icons/Ionicons';

export default function Information({navigation}) {
    return (
        <ScrollView style={{ flex: 1}}>
            <View>
                {/* ini icon ya */}
            <View style={{ width: 36, height: 36, backgroundColor: 'rgba(198,198,198,0.7)', alignContent: 'center', borderRadius: 12, alignItems: 'center', zIndex: 10 , marginTop: 30, marginLeft: 30}}>
                    <Icon name="arrow-left" size={18} color="#000000" onPress={() => navigation.goBack()} style={{ marginTop: 7}}/>
                </View>
            <View style={{ backgroundColor: '#829460', width: '100%', height: 320, marginTop: -67, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, alignContent: 'center', alignItems: 'center' }}>
            </View>
            
            <View style={{alignItems: 'center', marginTop: -240 }}>
                    <Image source={require('../img/foto2.png')} style={{ width: 130, height: 130,}}/>
                    <Text style={{fontSize: 20, fontWeight: '500', color: 'white', marginTop: 25, fontFamily: 'Poppins-Medium'}}>FARRENDA LA VECCHIA SIGNORA</Text>
                    <Text style={{fontSize: 13, fontWeight: '500', color: 'white', marginTop: 2, fontFamily: 'Poppins-Medium'}}>SMK NEGERI 2 SURAKARTA / XII RPL B</Text>
            </View>

            
            <View style={{ marginLeft: 30, marginRight: 30, marginTop: 50}}>
                <Text style={{ color: "black", fontSize: 14, fontWeight: '300', lineHeight: 24, fontFamily: 'Poppins-Medium', textAlign: 'justify'
            }}>
                <Text style={{ color: 'black', fontSize: 18, fontFamily: 'Poppins-Medium' }}>Hallo Semua!</Text>{'\n'}
                {'\n'}Perkenalkan saya Farrenda La Vecchia Signora selaku pembuat dari aplikasi ini. Saya berasal dari Kabupaten Karanganyar.{'\n'}{'\n'}
                Harapan saya, aplikasi ini dapat membantu kalian menemukan resep makanan untuk kalian yang sedang diet.{'\n'}{'\n'}
                Saya mengucapkan terima kasih karena telah menggunakan aplikasi ini, semoga aplikasi ini bermanfaat bagi kalian yang sedang diet. Tetap semangat dan jangan lupa diimbangi olahraga! Semoga berhasil!
                {'\n'}{'\n'}{'\n'}
                </Text>
            </View>
            </View>
        </ScrollView>
    )
}


