import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground} from 'react-native';
import { StackActions } from '@react-navigation/native';
import {set} from 'react-native-reanimated'

class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state ={};
}

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.dispatch(StackActions.replace('Home'));
        }, 2000);
    }

    render() {
        return (

            <View style={{flex: 1, }}>
                <ImageBackground source={require('../img/splashscreen1.png')} style={{ flex: 1, }}>
            <View style={{ alignItems: 'center', alignContent: 'center', }}>
                    <Text style={{ fontSize: 35,fontWeight: '700', color: 'white', marginTop: 120, }}>SELAMAT DATANG</Text>
                    <Text style={{ fontSize: 17,fontWeight: '700', color: 'white', marginTop: 5, }}>Resep Diet Sehat</Text>
                </View>
            </ImageBackground>
            
            </View>
            
    
     )
    }
}
    
export default SplashScreen;
    //home


