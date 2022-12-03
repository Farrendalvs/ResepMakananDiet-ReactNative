import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function Rsmoothies({navigation}) {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#EEEEEE', }}>
                {/* ini icon ya */}
            <View style={{ width: 36, height: 36, backgroundColor: 'rgba(198,198,198,0.7)', alignContent: 'center', borderRadius: 12, alignItems: 'center', zIndex: 10 , marginTop: 30, marginLeft: 30}}>
                    <Icon name="arrow-left" size={18} color="#000000" onPress={() => navigation.goBack()} style={{ marginTop: 7}}/>
                </View>
                
    <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 15, }}>
        <Text style={{ fontSize: 25, fontWeight: '700', color: '#000000'}}>KATEGORI SMOOTHIES</Text>
        </View>

        {/* menuresep 1 */}
        <TouchableOpacity onPress={() => navigation.navigate('Resepsmoothies1')}>
            <View style={{alignContent: 'center', alignItems: 'center', marginTop: 50}}>
                <View style={{ width: 310, height: 101, backgroundColor: '#829460', borderRadius: 20}}>
                <View style={{ flexDirection: 'row', }}>
                    <Image source={require('../imgsmoothies/smoothies1.png')} style={{ width: 109, height: 101, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, }}/>
                    <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: '700', marginTop: 37, marginLeft: 10, }}>GREEN SMOOTHIES</Text>
                </View>
                </View>
            </View>
        </TouchableOpacity>

        {/* menuresep 2 */}
        <TouchableOpacity onPress={() => navigation.navigate('Resepsmoothies2')}>    
        <View style={{alignContent: 'center', alignItems: 'center', marginTop: 22}}>
                <View style={{ width: 310, height: 101, backgroundColor: '#829460', borderRadius: 20}}>
                <View style={{ flexDirection: 'row', }}>
                    <Image source={require('../imgsmoothies/smoothies2.png')} style={{ width: 109, height: 101, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, }}/>
                    <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: '700', marginTop: 37, marginLeft: 10, }}>AVOCADO & BANANA</Text>
                </View>
                </View>
            </View>
        </TouchableOpacity>
        {/* menuresep 3 */}
        <TouchableOpacity onPress={() => navigation.navigate('Resepsmoothies3')}>    
        <View style={{alignContent: 'center', alignItems: 'center', marginTop: 22}}>
                <View style={{ width: 310, height: 101, backgroundColor: '#829460', borderRadius: 20}}>
                <View style={{ flexDirection: 'row', }}>
                    <Image source={require('../imgsmoothies/smoothies4.png')} style={{ width: 109, height: 101, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, }}/>
                    <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: '700', marginTop: 37, marginLeft:10, }}>ANGGUR & BERRY</Text>
                </View>
                </View>
            </View>
        </TouchableOpacity>

        {/* menuresep 4 */}
        <TouchableOpacity onPress={() => navigation.navigate('Resepsmoothies4')}>    
        <View style={{alignContent: 'center', alignItems: 'center', marginTop: 22}}>
                <View style={{ width: 310, height: 101, backgroundColor: '#829460', borderRadius: 20}}>
                <View style={{ flexDirection: 'row', }}>
                    <Image source={require('../imgsmoothies/smoothies3.png')} style={{ width: 109, height: 101, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, }}/>
                    <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: '700', marginTop: 37, marginLeft:10, }}>BUAH NAGA & PISANG</Text>
                </View>
                </View>
            </View>
        </TouchableOpacity>
        
                
                
    




        </ScrollView>
    )
}