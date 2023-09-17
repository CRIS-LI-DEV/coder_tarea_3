import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary, 
    shadowColor: "#000", 
    shadowOffset: { height: 10, width: 5 }, 
    elevation: 4, 
    shadowOpacity: 1, 
    shadowRadius: 10, 
  },
});
