import React from 'react';
import { View, Text } from 'react-native';
import { Home } from './src/Screens/'
import {
  useFonts,
  Inter_900Black,
  Inter_300Light,
} from "@expo-google-fonts/inter";
export default function App() {
 let [fontsLoaded] = useFonts({ Inter_900Black, Inter_300Light });

 if (!fontsLoaded) {
   return null;
 }


  return (
   
     
  <Home/>

  );
}

