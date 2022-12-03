import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5'


export default function Buah({navigation}) {

     const [kategori, setkategori] = useState(
    [
      {
        nama: 'SALAD BUAH',
        image: require('../img/buah.png'),
      },
      {
        nama: 'BANANA PANCAKES',
        image: require('../img/buah.png'),
      },
      {
        nama: 'DONAT BUAH NAGA',
        image: require('../img/buah.png'),
      },
      {
        nama: 'AVOCADO TOAST',
        image: require('../img/buah.png'),
      },
      
      
         ]);
    
    

   return (
    <View>
      <ScrollView style={{ backgroundColor: '#ffffff', }}>
        
        <TouchableOpacity style={{ marginTop: 30, marginLeft: 20 }}>
          <Icon name="arrow-left" size={30} color="black" onPress={() => navigation.goBack()}/>
        </TouchableOpacity>

        <View style={{alignItems: 'center', alignContent: 'center',}}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black',}}>Kategori Buah</Text>
        </View>

        <View style={{marginTop: 30, minHeight: 800}}>

        
          {kategori.map((item, Index) => {
            return (
              <Text 
                key={Index}
                showsHScrollIndicator={false}
                style={{ marginLeft: 0, marginTop: 20, alignSelf: 'center',}}>
                <TouchableOpacity
                style={{
              width: 300, 
              height: 100,
              marginRight: 5,
              backgroundColor: '#829460',
              elevation: 0,
              
              borderRadius: 20,
              marginLeft: 5,
              
            }}>
          
      
          <View style={{ flexDirection: 'row',}}>
              <Image
                source={item.image}
                style={{ width: 100, height: 100, borderBottomLeftRadius: 20, borderTopLeftRadius: 20, }}
              />
            
            <View style={{ marginLeft: 10, marginTop: 40,}}>
                <View>
                <Text style={{color: '#353535',fontSize: 15, fontWeight: 'bold', color: 'white',}}>{item.nama}</Text>
              </View>
            </View>
                  </View>
                
          </TouchableOpacity>
        </Text>
        );
      })}
          </View> 
          </ScrollView>
    </View>
      
  )
}