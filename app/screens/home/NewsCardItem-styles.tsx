/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
  card:{
    backgroundColor: 'white',
    flexDirection: 'row',
    marginVertical: 8,
    maxWidth: 220,
    minWidth: 220,
    width: 220
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
  postDetail:{
    alignItems: 'center',
    flexDirection: 'row',
  },
  postDetails:{
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 220
  }
})
export default styles
