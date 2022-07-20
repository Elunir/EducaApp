/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  alignItemCenter: {
    alignItems: "center",
    justifyContent: "center",

  },
  container: {},
  eyeIcon: {
    bottom: 52,
    left: "88%",
    position: "relative",
  },
  forgotPassword: {
    alignSelf: "flex-end",
    bottom: 28,
    marginRight: 16
  },
  logo: {
    alignSelf: "center",
    width: "50%",
  },
  modal: {
    backgroundColor: "white",
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
    height: "70%",
    marginTop: 24,
  },
  modalTitle: {
    fontColor: "#000",
    fontSize: 24,
    marginLeft: 16,
    marginTop: 28,
  },
  radioGroup:{
    alignItems: "center",
    flexDirection: "row",
  },
  registerAs:{
    marginHorizontal: 16,
    marginVertical: 8
  },
  registerNow:{
    flexDirection: "row",
    marginVertical: 24,
  },
  screen: {
    backgroundColor: "#fdfdfd",
  },
  shadowProp: {
    elevation: 30,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: -30 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
  },
  submitButton:{
    backgroundColor: "#51C3FE",
    height: 54,
    marginHorizontal: 48,
    marginTop: 16
  },
  textField: {
    borderColor: "#fdfdfd",
    borderRadius: 4,
    borderWidth: 1,
    padding: 16,
  },
  textInput: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    color: "black",
  },
  title: {
    marginBottom: 10,
  }
})
export default styles
