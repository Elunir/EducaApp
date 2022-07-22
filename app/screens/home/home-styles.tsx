/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
  card:{
    backgroundColor: 'white',
    borderColor: '#E0E0E0',
    borderRadius: 6,
    borderWidth: 1,
    height: 188,
    marginLeft: 4,
    marginRight: 4,
    width: 180,
  },
  cardDetails:{
    padding: 8
  },
  classesBar:{
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
  },
  classesCompleted:{
    backgroundColor: '#51C3FE',
    borderRadius: 10,
    height: 6,
  },
  classesTotal:{
    backgroundColor: '#F4FAFD',
    borderRadius: 10,
    height: 6,
    width: 120,
  },
  header: {
    marginTop: 8,
  },
  headerContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginTop: 8
  },
  imageCard:{
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    height: 83,
    width: 180,

  },
  notificationAlert: {
    position: "absolute",
    right: 0,
  },
  searchbar:{
    backgroundColor: '#F5F5F5',
    borderColor: '#E0E0E0',
    borderRadius: 6,
    borderWidth: 1,
    elevation: 0,
    height: 58,
    marginHorizontal: 16,
    marginTop: 20
  },
  section:{
    backgroundColor: 'blue'
  },
  sectionList:{
    marginHorizontal: 8,
  },
  sectionTitle:{
    marginLeft: 4,
    marginVertical: 16,
  },
  sectionTwoMargin:{
     marginHorizontal: 16
  },
  selectedCategory:{
    borderBottomColor: '#51C3FE',
    borderBottomWidth: 3,
    borderRadius: 10,
  },
  seperatorMargin:{
    marginTop: 16,
  },
})
export default styles
