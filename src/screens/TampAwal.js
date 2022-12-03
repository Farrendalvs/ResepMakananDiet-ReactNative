import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, ImageBackground, Image  } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Iicon from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#EEEEEE', }}>
      <ScrollView>

        <View style={{ fontSize: 17, marginLeft: 31, marginTop: 5, fontWeight: "400", }}>
          <View style={{ flexDirection: 'row'}}> 
            <Text style={{ fontSize: 41, marginTop: 30, marginLeft: 10, color: 'black'}}>Hello!</Text>
            <Iicon name='information-circle-outline' color="black" size={20}/>
          </View>
          
          <Text style={{ fontSize: 15, marginLeft: 10, color: 'black',}}>Cari resep menu diet favoritmu!</Text>
        </View>

        
      {/* background + menu resep */}
        <View style={{ backgroundColor: '#829460', width: '100%', height: 900, borderTopLeftRadius: 20, borderTopRightRadius: 20, marginTop: 30, alignContent: 'center', alignItems: 'center' }}>
          <View style={{ alignContent: 'center', alignItems: 'center', }}>
            <Text style={{ fontSize: 22,  color: 'white', marginTop: 40,}}>MAKANAN & MINUMAN DIET</Text>
          </View>

          {/* gambar resep 1 */}
          <View style={{ flexDirection: 'row' }}>
            <View style={{ backgroundColor: '#EEEEEE', height: 165, width: 150, marginLeft: 0, marginTop: 30, borderRadius: 5, }}>
              {/* isi gambar menu */}
              <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 10,}}>
                <Image source={require('./src/img/buah.png')} style={{ width: 132, height: 122, borderRadius: 5}}/>
              </View>
              <View style={{ marginTop: 0, }}>
                <Text style={{ fontSize: 15, color: 'black', textAlign: 'center', textAlign: 'center', marginTop: 6, fontWeight: 'bold'}}>BUAH</Text>
              </View>
            </View>


            <View style={{ backgroundColor: '#EEEEEE', height: 165, width: 150, marginLeft: 20, marginTop: 30, borderRadius: 5, }}>
              {/* isi gambar menu */}
              <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 10,}}>
                <Image source={require('./src/img/oatmeal.png')} style={{ width: 132, height: 122, borderRadius: 5 }}/>
              </View>
              <View style={{ marginTop: 0 }}>
                <Text style={{ fontSize: 15, color:'black', textAlign: 'center', textAlign: 'center', marginTop: 6, fontWeight: 'bold'}}>OATMEAL</Text>
              </View>
            </View>
          </View>

          {/* gambar resep 2 */}
          <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
            <View style={{ backgroundColor: '#EEEEEE', height: 165, width: 150, marginLeft: 0, marginTop: 25, borderRadius: 5, }}>
              {/* isi gambar menu */}
              <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 10,}}>
                <Image source={require('./src/img/daging.png')} style={{ width: 132, height: 122, borderRadius: 5 }}/>
              </View>
              <View style={{ marginTop: 0 }}>
                <Text style={{ fontSize: 15, color: 'black', textAlign: 'center', textAlign: 'center', marginTop: 6, fontWeight: 'bold'}}>DAGING</Text>
              </View>
            </View>
            
            <View style={{ backgroundColor: '#EEEEEE', height: 165, width: 150, marginLeft: 20, marginTop: 25, borderRadius: 5, }}>
              {/* isi gambar menu */}
              <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 10,}}>
                <Image source={require('./src/img/sayur.png')} style={{ width: 132, height: 122, borderRadius: 5 }}/>
              </View>
              <View style={{ marginTop: 0 }}>
                <Text style={{ fontSize: 15, color: 'black', textAlign: 'center', textAlign: 'center', marginTop: 6, fontWeight: 'bold'}}>SAYUR</Text>
              </View>
            </View>
          </View>

          {/* gambar resep 3 */}
          <View style={{ flexDirection: 'row' }}>
            <View style={{ backgroundColor: '#EEEEEE', height: 165, width: 150, marginLeft: 0, marginTop: 25, borderRadius: 5, }}>
              {/* isi gambar menu */}
              <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 10,}}>
                <Image source={require('./src/img/smoothies.png')} style={{ width: 132, height: 122, borderRadius: 5 }}/>
              </View>
              <View style={{ marginTop: 0 }}>
                <Text style={{ fontSize: 15, color:'black', textAlign: 'center', textAlign: 'center', marginTop: 6, fontWeight: 'bold'}}>SMOOTHIES</Text>
              </View>
            </View>
            <View style={{ backgroundColor: '#EEEEEE', height: 165, width: 150, marginLeft: 20, marginTop: 25, borderRadius: 5, }}>
              {/* isi gambar menu */}
              <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 10,}}>
                <Image source={require('./src/img/pasta.png')} style={{ width: 132, height: 122, borderRadius: 5 }}/>
              </View>
              <View style={{ marginTop: 0 }}>
                <Text style={{ fontSize: 15, color:'black',  textAlign: 'center', textAlign: 'center', marginTop: 6, fontWeight: 'bold'}}>PASTA</Text>
              </View>
            </View>
          </View>

          {/* gambar resep 4 */}
          <View style={{ flexDirection: 'row' }}>
            <View style={{ backgroundColor: '#EEEEEE', height: 165, width: 150, marginLeft: 0, marginTop: 25, borderRadius: 5, }}>
              {/* isi gambar menu */}
              <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 10,}}>
                <Image source={require('./src/img/soup.png')} style={{ width: 132, height: 122, borderRadius: 5 }}/>
              </View>
              <View style={{ marginTop: 0 }}>
                <Text style={{ fontSize: 15, color:'black',  textAlign: 'center', textAlign: 'center', marginTop: 6, fontWeight: 'bold'}}>SOUP</Text>
              </View>
            </View>
            <View style={{ backgroundColor: '#EEEEEE', height: 165, width: 150, marginLeft: 20, marginTop: 25, borderRadius: 5, }}>
              {/* isi gambar menu */}
              <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 10,}}>
                <Image source={require('./src/img/jus.png')} style={{ width: 132, height: 122, borderRadius: 5 }}/>
              </View>
              <View style={{ marginTop: 0 }}>
                <Text style={{ fontSize: 15, color:'black', textAlign: 'center', textAlign: 'center', marginTop: 6, fontWeight: 'bold'}}>JUS BUAH</Text>
              </View>
            </View>
          </View>
        </View>
          

      </ScrollView>

    </View>
  )
}
