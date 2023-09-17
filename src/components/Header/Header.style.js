import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 80,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  text_title: {
    fontSize: 22,
    color: "white",
  },
  text_subtitle: {
    fontSize: 18,
    color: "white",
  },
});
