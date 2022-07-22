/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
  card:{
    backgroundColor: 'white',
    flexDirection: 'row',
    marginVertical: 8,
    width: 230
  },
  cardDetails:{
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 16,
  },
  imageCard:{
    borderRadius: 10,
    height: 114,
    width: 140,
  },
  postDetails:{
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})
export default styles
