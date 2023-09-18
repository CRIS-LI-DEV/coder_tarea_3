import React, { useState } from "react";
import { View, Text, FlatList, Switch } from "react-native";
import { CategoryItem } from "./components";
import { Header } from "../../components";
import data from "../../data/data";
import styles from "./Home.style";
import {
  useFonts,
  Inter_900Black,
  Inter_300Light,
} from "@expo-google-fonts/inter";


const Home = () => {
  let [fontsLoaded] = useFonts({ Inter_900Black, Inter_300Light });
  const [isEnabled, setIsEnabled] = useState(false);

  if (!fontsLoaded) {
    return null;
  }
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      <Header title={"Ferreteria"} subtitle={"Categorias"} />
      <View style={styles.switchContainer}>
        <Text style={[styles.mostrar, { fontFamily: "Inter_300Light" }]}>
          Mostrar Categorías:
        </Text>

        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={styles.suich}
        />
      </View>
      {isEnabled ? (
        <FlatList
          data={data}
          keyExtractor={(category) => category}
          renderItem={({ item }) => <CategoryItem category={item} />}
        />
      ) : (
        <Text style={[styles.desa, { fontFamily: "Inter_300Light" }]}>
          Categorías deshabilitadas.
        </Text>
      )}
    </View>
  );
};

export default Home;
