import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, ImageBackground, Image  } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Iicon from 'react-native-vector-icons/Ionicons';


export default function Home({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor: '#EEEEEE', }}>
      <ScrollView>

        <View style={{ fontSize: 17, marginLeft: 31, marginTop: 5, fontWeight: "400", marginTop: 30,}}>
        <View style={{ flexDirection: 'row', marginLeft: 10, }}> 
            <Text style={{ fontSize: 41, color: 'black', fontWeight: '700', fontFamily: 'Poppins-Medium'}}>Hello,</Text>
            <Iicon name='information-circle-outline' color="black" size={25} style={{ marginLeft: 180, marginTop: 17}} 
            onPress={() => navigation.navigate('Information')}/>
          </View>
          <Text style={{ fontSize: 13.7, marginLeft: 10, color: 'black', fontWeight: '500', fontFamily: 'Poppins-Medium'}}>Cari resep menu diet favoritmu!</Text>
        </View>

        
      {/* background + menu resep */}
        <View style={{ backgroundColor: '#829460', width: '100%', height: 900, borderTopLeftRadius: 20, borderTopRightRadius: 20, marginTop: 30, alignContent: 'center', alignItems: 'center' }}>
          <View style={{ alignContent: 'center', alignItems: 'center', }}>
            <Text style={{ fontSize: 22,  color: 'white', marginTop: 40, fontWeight: '700', fontFamily: 'Poppins-Medium'}}>MAKANAN & MINUMAN DIET</Text>
          </View>


          {/* gambar resep 1 */}
          <View style={{ flexDirection: 'row' }}>

          <TouchableOpacity onPress={() => navigation.navigate('Rbuah')}>
          <View style={{ backgroundColor: '#EEEEEE', height: 165, width: 150, marginLeft: 0, marginTop: 30, borderRadius: 5, }}>
              {/* isi gambar menu */}
              <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 10,}}>
                <Image source={require('../img/buah.png')} style={{ width: 132, height: 122, borderRadius: 5}}/>
              </View>
              <View style={{ marginTop: 0, }}>
                <Text style={{ fontSize: 15, color: 'black', textAlign: 'center', textAlign: 'center', marginTop: 6, fontWeight: 'bold', fontFamily: 'Poppins-Medium'}}>BUAH</Text>
              </View>
            </View>
          </TouchableOpacity>


            <TouchableOpacity onPress={() => navigation.navigate('Roatmeal')}>
            <View style={{ backgroundColor: '#EEEEEE', height: 165, width: 150, marginLeft: 15, marginTop: 30, borderRadius: 5, }}>
              {/* isi gambar menu */}
              <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 10, }}>
                <Image source={require('../img/oatmeal.png')} style={{ width: 132, height: 122, borderRadius: 5 }}/>
              </View>
              <View style={{ marginTop: 0 }}>
                <Text style={{ fontSize: 15, color:'black', textAlign: 'center', textAlign: 'center', marginTop: 6, fontWeight: 'bold', fontFamily: 'Poppins-Medium'}}>OATMEAL</Text>
              </View>
            </View>
            </TouchableOpacity>
          </View>

          
          {/* gambar resep 2 */}
          <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Rdaging')}>
            <View style={{ backgroundColor: '#EEEEEE', height: 165, width: 150, marginLeft: 0, marginTop: 25, borderRadius: 5, }}>
              {/* isi gambar menu */}
              <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 10, }}>
                <Image source={require('../img/daging.png')} style={{ width: 132, height: 122, borderRadius: 5}}/>
              </View>
              <View style={{ marginTop: 0 }}>
                <Text style={{ fontSize: 15, color: 'black', textAlign: 'center', textAlign: 'center', marginTop: 6, fontWeight: 'bold', fontFamily: 'Poppins-Medium'}}>DAGING</Text>
              </View>
            </View>
          </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate('Rsayur')}>
              <View style={{ backgroundColor: '#EEEEEE', height: 165, width: 150, marginLeft: 15, marginTop: 25, borderRadius: 5, }}>
              {/* isi gambar menu */}
              <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 10, }}>
                <Image source={require('../img/sayur.png')} style={{ width: 132, height: 122, borderRadius: 5 }}/>
              </View>
              <View style={{ marginTop: 0 }}>
                <Text style={{ fontSize: 15, color: 'black', textAlign: 'center', textAlign: 'center', marginTop: 6, fontWeight: 'bold', fontFamily: 'Poppins-Medium'}}>SAYUR</Text>
              </View>
            </View>
            </TouchableOpacity>
          </View>

          
          {/* gambar resep 3 */}
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Rsmoothies')}>
            <View style={{ backgroundColor: '#EEEEEE', height: 165, width: 150, marginLeft: 0, marginTop: 25, borderRadius: 5, }}>
              {/* isi gambar menu */}
              <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 10, }}>
                <Image source={require('../img/smoothies.png')} style={{ width: 132, height: 122, borderRadius: 5}}/>
              </View>
              <View style={{ marginTop: 0 }}>
                <Text style={{ fontSize: 15, color:'black', textAlign: 'center', textAlign: 'center', marginTop: 6, fontWeight: 'bold', fontFamily: 'Poppins-Medium'}}>SMOOTHIES</Text>
              </View>
            </View>
          </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Rpasta')}>
              <View style={{ backgroundColor: '#EEEEEE', height: 165, width: 150, marginLeft: 15, marginTop: 25, borderRadius: 5, }}>
              {/* isi gambar menu */}
              <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 10, }}>
                <Image source={require('../img/pasta.png')} style={{ width: 132, height: 122, borderRadius: 5}}/>
              </View>
              <View style={{ marginTop: 0 }}>
                <Text style={{ fontSize: 15, color:'black',  textAlign: 'center', textAlign: 'center', marginTop: 6, fontWeight: 'bold', fontFamily: 'Poppins-Medium'}}>PASTA</Text>
              </View>
            </View>
            </TouchableOpacity>
          </View>

          
         
          {/* gambar resep 4 */}
          <View style={{ flexDirection: 'row' }}>
             <TouchableOpacity onPress={() => navigation.navigate('Rsoup')}>
            <View style={{ backgroundColor: '#EEEEEE', height: 165, width: 150, marginLeft: 0, marginTop: 25, borderRadius: 5, }}>
              {/* isi gambar menu */}
              <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 10, }}>
                <Image source={require('../img/soup.png')} style={{ width: 132, height: 122, borderRadius: 5}}/>
              </View>
              <View style={{ marginTop: 0 }}>
                <Text style={{ fontSize: 15, color:'black',  textAlign: 'center', textAlign: 'center', marginTop: 6, fontWeight: 'bold', fontFamily: 'Poppins-Medium'}}>SOUP</Text>
              </View>
            </View>
          </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Rjus')}>
              <View style={{ backgroundColor: '#EEEEEE', height: 165, width: 150, marginLeft: 15, marginTop: 25, borderRadius: 5, }}>
              {/* isi gambar menu */}
              <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 10, }}>
                <Image source={require('../img/jus.png')} style={{ width: 132, height: 122, borderRadius: 5}}/>
              </View>
              <View style={{ marginTop: 0 }}>
                <Text style={{ fontSize: 15, color:'black', textAlign: 'center', textAlign: 'center', marginTop: 6, fontWeight: 'bold', fontFamily: 'Poppins-Medium'}}>JUS</Text>
              </View>
            </View>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>

    </View>
  )
}
