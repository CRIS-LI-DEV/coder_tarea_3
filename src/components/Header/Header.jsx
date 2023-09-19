import { Text, View } from 'react-native'

import React from 'react'
import styles from './Header.style'

const Header = ({ title, subtitle }) => {
  
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
