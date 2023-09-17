import { Text, View } from 'react-native'

import React from 'react'
import styles from './Header.style'
import {
  useFonts,
  Inter_900Black,
  Inter_300Light,
} from "@expo-google-fonts/inter";

const Header = ({ title, subtitle }) => {
  let [fontsLoaded] = useFonts({ Inter_900Black, Inter_300Light});
  
  if (!fontsLoaded) { 
    return null
  }
  return (
    <View style={styles.container}>
      <Text style={[styles.text_title, { fontFamily: "Inter_900Black" }]}>
        {title}
      </Text>
      <Text style={[styles.text_subtitle, { fontFamily: "Inter_300Light" }]}>
        {subtitle}
      </Text>
    </View>
  );
}

export default Header
