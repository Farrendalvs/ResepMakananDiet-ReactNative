import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5'
// {'\n'} enter kalimat 
export default function Reseppasta1({navigation}) {
    return(
        <ScrollView style="flex: 1">
            <View style="">
                
                {/* ini icon ya */}
                <View style={{ width: 36, height: 36, backgroundColor: 'rgba(198,198,198,0.7)', alignContent: 'center', borderRadius: 12, alignItems: 'center', zIndex: 10 , marginTop: 30, marginLeft: 30}}>
                    <Icon name="arrow-left" size={18} color="#000000" onPress={() => navigation.goBack()} style={{ marginTop: 7}}/>
                </View>


            <Image source={require('../imgpasta/pasta1.png')} style={{ width: 393, height: 300, marginTop: -67}}/>
            <View style={{ backgroundColor: '#829460', width: 393, height: 55, alignContent: 'center', alignItems: 'center', borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
                <Text style={{ color: '#ffffff', fontSize: 25, fontWeight: '500', marginTop: 10, fontFamily: 'Poppins-Medium'}}>PASTA PESTO BAYAM</Text>
            </View>
            </View>


            <View style={{ marginLeft: 30, marginRight: 30, marginTop: 20,}}>
                <Text style={{ color: "black", fontSize: 15, fontWeight: '300', lineHeight: 24, fontFamily: 'Poppins-Medium'
            }}>
                <Text style={{ color: 'black', fontSize: 18 }}>Bahan:</Text>{'\n'}
                - 340 gram spaghetti(bisa diganti pasta lainnya){'\n'}
                - 113 gram daun bayam segar{'\n'}
                - 2 siung bawang putih, cincang{'\n'}
                - 42 gram keju parmesan{'\n'}
                - 78 ml minyak zaitun{'\n'}
                - 2 sdm kacang pinus, sekitar 30 gram (bisa diganti almond atau kacang mede){'\n'}
                - Garam dan lada bubuk secukupnya{'\n'}
                - 400 gram udang panggang (opsional){'\n'}

                {'\n'}{'\n'}
                
                <Text style={{ color: 'black', fontSize: 18 }}>Cara Membuat:</Text>{'\n'}
                - Masak spaghetti sesuai petunjuk kemasannya. Tiriskan, lalu sisakan sedikit air rebusannya.{'\n'}
                - Masukkan bayam, keju parmesan, minyak zaitun, kacang pinus, garam, merica, dan bawang putih ke dalam blender atau food processor. Proses hingga halus.{'\n'}
                - Dalam mangkuk besar, aduk spaghetti yang sudah dimasak bersama dengan pesto, udang, dan sisa air rebusan pasta. Aduk hingga rata atau bisa ditumis sebentar. Sajikan. {'\n'}
                </Text>
            </View>
        </ScrollView>
    )
}
