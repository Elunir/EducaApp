/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
  card:{
    backgroundColor: 'white',
    marginLeft: 4,
    marginRight: 4,
    width: 140,
  },
  cardDetails:{
    flex: 1,
    justifyContent: 'space-between',
    padding: 8,
},
  imageCard:{
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    height: 114,
    width: 139,
  },
  lesson:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row'
  }
})
export default styles
