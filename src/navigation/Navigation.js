// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from '../screens/Home';
import rbuah from '../screens/Rbuah';
import roatmeal from '../screens/Roatmeal';
import rdaging from '../screens/Rdaging';
import rsayur from '../screens/Rsayur';
import rsmoothies from '../screens/Rsmoothies';
import rpasta from '../screens/Rpasta';
import rsoup from '../screens/Rsoup';
import rjus from '../screens/Rjus';
import resepbuah1 from '../rbuah/Resepbuah1';
import resepbuah2 from '../rbuah/Resepbuah2';
import resepbuah3 from '../rbuah/Resepbuah3';
import resepbuah4 from '../rbuah/Resepbuah4';
import resepoat1 from '../roatmeal/Resepoat1';
import resepoat2 from '../roatmeal/Resepoat2';
import resepoat3 from '../roatmeal/Resepoat3';
import resepoat4 from '../roatmeal/Resepoat4';
import resepdaging1 from '../rdaging/Resepdaging1';
import resepdaging2 from '../rdaging/Resepdaging2';
import resepdaging3 from '../rdaging/Resepdaging3';
import resepdaging4 from '../rdaging/Resepdaging4';
import resepsayur1 from '../rsayur/Resepsayur1';
import resepsayur2 from '../rsayur/Resepsayur2';
import resepsayur3 from '../rsayur/Resepsayur3';
import resepsayur4 from '../rsayur/Resepsayur4';
import resepsmoothies1 from '../rsmoothies/Resepsmoothies1';
import resepsmoothies2 from '../rsmoothies/Resepsmoothies2';
import resepsmoothies3 from '../rsmoothies/Resepsmoothies3';
import resepsmoothies4 from '../rsmoothies/Resepsmoothies4';
import reseppasta1 from '../rpasta/Reseppasta1';
import reseppasta2 from '../rpasta/Reseppasta2';
import reseppasta3 from '../rpasta/Reseppasta3';
import reseppasta4 from '../rpasta/Reseppasta4';
import resepsoup1 from '../rsoup/Resepsoup1';
import resepsoup2 from '../rsoup/Resepsoup2';
import resepsoup3 from '../rsoup/Resepsoup3';
import resepsoup4 from '../rsoup/Resepsoup4';
import resepjus1 from '../rjus/Resepjus1';
import resepjus2 from '../rjus/Resepjus2';
import resepjus3 from '../rjus/Resepjus3';
import resepjus4 from '../rjus/Resepjus4';
import information from '../information/Information';
import SplashScreen from '../screens/SplashScreen';



const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false, tabBarShowLabel: false}}>
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="Rbuah" component={rbuah} />
        <Stack.Screen name="Roatmeal" component={roatmeal} />
        <Stack.Screen name="Rdaging" component={rdaging} />
        <Stack.Screen name="Rsayur" component={rsayur} />
        <Stack.Screen name="Rsmoothies" component={rsmoothies} />
        <Stack.Screen name="Rpasta" component={rpasta} />
        <Stack.Screen name="Rsoup" component={rsoup} />
        <Stack.Screen name="Rjus" component={rjus} />
        <Stack.Screen name="Resepbuah1" component={resepbuah1} />
        <Stack.Screen name="Resepbuah2" component={resepbuah2} />
        <Stack.Screen name="Resepbuah3" component={resepbuah3} />
        <Stack.Screen name="Resepbuah4" component={resepbuah4} />
        <Stack.Screen name="Resepoat1" component={resepoat1} />
        <Stack.Screen name="Resepoat2" component={resepoat2} />
        <Stack.Screen name="Resepoat3" component={resepoat3} />
        <Stack.Screen name="Resepoat4" component={resepoat4} />
        <Stack.Screen name="Resepdaging1" component={resepdaging1} />
        <Stack.Screen name="Resepdaging2" component={resepdaging2} />
        <Stack.Screen name="Resepdaging3" component={resepdaging3} />
        <Stack.Screen name="Resepdaging4" component={resepdaging4} />
        <Stack.Screen name="Resepsayur1" component={resepsayur1} />
        <Stack.Screen name="Resepsayur2" component={resepsayur2} />
        <Stack.Screen name="Resepsayur3" component={resepsayur3} />
        <Stack.Screen name="Resepsayur4" component={resepsayur4} />
        <Stack.Screen name="Resepsmoothies1" component={resepsmoothies1} />
        <Stack.Screen name="Resepsmoothies2" component={resepsmoothies2} />
        <Stack.Screen name="Resepsmoothies3" component={resepsmoothies3} />
        <Stack.Screen name="Resepsmoothies4" component={resepsmoothies4} />
        <Stack.Screen name="Reseppasta1" component={reseppasta1} />
        <Stack.Screen name="Reseppasta2" component={reseppasta2} />
        <Stack.Screen name="Reseppasta3" component={reseppasta3} />
        <Stack.Screen name="Reseppasta4" component={reseppasta4} />
        <Stack.Screen name="Resepsoup1" component={resepsoup1} />
        <Stack.Screen name="Resepsoup2" component={resepsoup2} />
        <Stack.Screen name="Resepsoup3" component={resepsoup3} />
        <Stack.Screen name="Resepsoup4" component={resepsoup4} />
        <Stack.Screen name="Resepjus1" component={resepjus1} />
        <Stack.Screen name="Resepjus2" component={resepjus2} />
        <Stack.Screen name="Resepjus3" component={resepjus3} />
        <Stack.Screen name="Resepjus4" component={resepjus4} />
        <Stack.Screen name="Information" component={information} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;