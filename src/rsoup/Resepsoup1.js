import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5'
// {'\n'} enter kalimat 
export default function Resepsoup1({navigation}) {
    return(
        <ScrollView style="flex: 1">
            <View style="">
                
                {/* ini icon ya */}
                <View style={{ width: 36, height: 36, backgroundColor: 'rgba(198,198,198,0.7)', alignContent: 'center', borderRadius: 12, alignItems: 'center', zIndex: 10 , marginTop: 30, marginLeft: 30}}>
                    <Icon name="arrow-left" size={18} color="#000000" onPress={() => navigation.goBack()} style={{ marginTop: 7}}/>
                </View>


            <Image source={require('../imgsoup/soup1.png')} style={{ width: 393, height: 300, marginTop: -67}}/>
            <View style={{ backgroundColor: '#829460', width: 393, height: 55, alignContent: 'center', alignItems: 'center', borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
                <Text style={{ color: '#ffffff', fontSize: 25, fontWeight: '500', marginTop: 10, fontFamily: 'Poppins-Bold'}}>SOUP KRIM JAGUNG</Text>
            </View>
            </View>


            <View style={{ marginLeft: 30, marginRight: 30, marginTop: 20,}}>
                <Text style={{ color: "black", fontSize: 14, fontWeight: '300', lineHeight: 24, fontFamily: 'Poppins-Medium'
            }}>
                <Text style={{ color: 'black', fontSize: 18 }}>Bahan:</Text>{'\n'}
                - Dada ayam yang di giling{'\n'}
                - 3 buah jagung manis (dipipil){'\n'}
                - 3 buah kentang ukuran sedang (potong dadu){'\n'}
                - 3 batang daun seledri cincang{'\n'}
                - 1 buah bawang bombay cincang kasar{'\n'}
                - 2 siung bawang putih dicincang kasar{'\n'}
                - 500 ml susu cair fresh{'\n'}
                - 600 ml air (3 gelas){'\n'}
                - 1 btr telur (dikocok lepas){'\n'}
                {'\n'}{'\n'}
                
                <Text style={{ color: 'black', fontSize: 18 }}>Cara Membuat:</Text>{'\n'}
                - Masukan bawang bombay ke dalam panci berisi air.{'\n'}
                - Masukkan daging ayam aduk-aduk hingga berubah warna.{'\n'}
                - Masukan kentang, dan jagung manis lalu masak hingga matang.{'\n'}
                - Masukkan susu cair ke dalam sup hingga mendidih.{'\n'}
                - Masukkan telur yang telah dikocok sambil diaduk dan masukkan garam secukupnya.{'\n'}
                - Setelah mendidih, matikan api dan masukkan daun seledri yang telah dicincang.{'\n'}

                </Text>
                <View style={{marginTop: 20}}></View>
            </View>
        </ScrollView>
    )
}
