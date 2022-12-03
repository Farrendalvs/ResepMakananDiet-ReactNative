import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5'
// {'\n'} enter kalimat 
export default function Reseppasta2({navigation}) {
    return(
        <ScrollView style="flex: 1">
            <View style="">
                
                {/* ini icon ya */}
                <View style={{ width: 36, height: 36, backgroundColor: 'rgba(198,198,198,0.7)', alignContent: 'center', borderRadius: 12, alignItems: 'center', zIndex: 10 , marginTop: 30, marginLeft: 30}}>
                    <Icon name="arrow-left" size={18} color="#000000" onPress={() => navigation.goBack()} style={{ marginTop: 7}}/>
                </View>


            <Image source={require('../imgpasta/pasta2.png')} style={{ width: 393, height: 300, marginTop: -67}}/>
            <View style={{ backgroundColor: '#829460', width: 393, height: 55, alignContent: 'center', alignItems: 'center', borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
                <Text style={{ color: '#ffffff', fontSize: 25, fontWeight: '500', marginTop: 10, fontFamily: 'Poppins-Medium'}}>SPAGHETTI UDANG</Text>
            </View>
            </View>


            <View style={{ marginLeft: 30, marginRight: 30, marginTop: 20,}}>
                <Text style={{ color: "black", fontSize: 15, fontWeight: '300', lineHeight: 24, fontFamily: 'Poppins-Medium'
            }}>
                <Text style={{ color: 'black', fontSize: 18 }}>Bahan:</Text>{'\n'}
                - 100 gram spaghetti{'\n'}
                - 250 gram udang kupas{'\n'}
                - 1/2 buah bawang bombay{'\n'}
                - 5 siung bawang putih{'\n'}
                - 1 buah paprika merah{'\n'}
                - 1 buah paprika kuning{'\n'}
                - 1 buah brokoli{'\n'}
                - 1/2 buah lemon{'\n'}
                - Kaldu jamur secukupnya{'\n'}
                - Garam, gula dan lada secukupnya{'\n'}
                - Minyak sayur untuk menumis{'\n'}
                - Keju parmesan sesuai selera{'\n'}
                - Bubuk cabai (optional){'\n'}
                {'\n'}{'\n'}
                
                <Text style={{ color: 'black', fontSize: 18 }}>Cara Membuat:</Text>{'\n'}
                - Tumis bawang putih dan bawang bombay hingga harum.{'\n'}
                - Masukkan udang kupas dan aduk hingga matang namun usahakan untuk tidak overcook.{'\n'}
                - Tambahkan kaldu jamur, garam, gula, lada, bubuk cabe sesuai selera.{'\n'}
                - Angkat jika udang sudah matang dan tercampur sempurna.{'\n'}
                - Dengan menggunakan wajan yang sama, tumis sayuran yang sudah dipotong-potong. Tambahkan sedikit garam, lada dan bubuk cabe. Aduk hingga setengah matang lalu campurkan kembali udang ke dalamnya.{'\n'}
                - Masukkan spaghetti matang ke dalam tumisan sebelumnya. Aduk hingga rata.{'\n'}
                - Untuk menambah kesegaran, tambahkan air perasan lemon.{'\n'}
                - Sajikan spaghetti pada piring lalu taburkan keju parmessan di atasnya.{'\n'}
                - Spaghetti udang siap dihidangkan.{'\n'}
                </Text>
            </View>
        </ScrollView>
    )
}
