import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5'
// {'\n'} enter kalimat 
export default function Resepjus1({navigation}) {
    return(
        <ScrollView style="flex: 1">
            <View style="">
                
                {/* ini icon ya */}
                <View style={{ width: 36, height: 36, backgroundColor: 'rgba(198,198,198,0.7)', alignContent: 'center', borderRadius: 12, alignItems: 'center', zIndex: 10 , marginTop: 30, marginLeft: 30}}>
                    <Icon name="arrow-left" size={18} color="#000000" onPress={() => navigation.goBack()} style={{ marginTop: 7}}/>
                </View>


            <Image source={require('../imgjus/jus1.png')} style={{ width: 393, height: 300, marginTop: -67}}/>
            <View style={{ backgroundColor: '#829460', width: 393, height: 55, alignContent: 'center', alignItems: 'center', borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
                <Text style={{ color: '#ffffff', fontSize: 25, fontWeight: '500', marginTop: 10, fontFamily: 'Poppins-Medium'}}>JUS SEMANGKA</Text>
            </View>
            </View>


            <View style={{ marginLeft: 30, marginRight: 30, marginTop: 20,}}>
                <Text style={{ color: "black", fontSize: 15, fontWeight: '300', lineHeight: 24, fontFamily: 'Poppins-Medium'
            }}>
                <Text style={{ color: 'black', fontSize: 18 }}>Bahan:</Text>{'\n'}
                - 500 gram semangka{'\n'}
                - 3 sdm sirup vanilla{'\n'}
                - 1 sdm air perasan lemon (optional){'\n'}
                - 200 ml air matang/ air kelapa (optional){'\n'}
                {'\n'}{'\n'}
                
                <Text style={{ color: 'black', fontSize: 18 }}>Cara Membuat:</Text>{'\n'}
                - Potong semangka kotak-kotak sekitar 3 x 3 cm. Taruh dalam mangkuk besar, tutup dengan plastik wrap. Simpan potongan semangka 1-2 jam dalam freezer.{'\n'}
                - Siapkan blender, masukan semangka beku, sirup vanilla, dan air perasan lemon. Blender jus hingga tercampur rata.{'\n'}
                - Tuang dalam gelas, sajikan segera selagi dingin. Atau simpan kembali di kulkas sebelum disajikan.{'\n'}
                {'\n'}{'\n'}
                </Text>
            </View>
        </ScrollView>
    )
}
