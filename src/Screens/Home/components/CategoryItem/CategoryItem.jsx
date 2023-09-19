import { Pressable, Text } from 'react-native'

import { Card } from '../../../../components'
import React from 'react'
import styles from './CategoryItem.style'
import Icon from "react-native-vector-icons/Ionicons";
const CategoryItem = ({ category }) => {
  

  return (
    <Pressable onPress={() => console.log(`Selecciono  ${category}`)}>
      <Card style={styles.cardContainer}>
        
        <Text style={[styles.text, { fontFamily: "Inter_300Light" }]}>
          <Icon name="ios-star" size={15} color="gold" /> {category}
        </Text>
      </Card>
    </Pressable>
  );
}

export default CategoryItem
