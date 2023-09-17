import { FlatList, View ,Text} from 'react-native'

import { CategoryItem } from './components'
import { Header } from '../../components'
import React from 'react'
import data from '../../data/data'
import styles from './Home.style'

const Home = () => {
  return (
    <View style={styles.container}>

      <Header title={'Ferreteria'} subtitle={'Categorias'} />
      <FlatList
        data={data}
        keyExtractor={category => category}
        renderItem={({ item }) => <CategoryItem category={item} />}
      />
    </View>
  )
}

export default Home
