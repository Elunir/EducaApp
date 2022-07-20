/* eslint-disable react-native/no-inline-styles */
import React, { FC } from "react"
import { Platform, StatusBar, TouchableOpacity, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { navigate, NavigatorParamList } from "../../navigators"
import { AutoImage, Button, Text, TextField } from "../../components"
import styles from "./register-styles"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import Icon from "react-native-vector-icons/Ionicons"

export const RegisterScreen: FC<StackScreenProps<NavigatorParamList, "login">> = observer(() => {
  const appLogo = require("../assets/images/logo.png")
  const [showPassword, setShowPassword] = React.useState(false)

  const handleLogin = () => {
    navigate("login");
  };

  const handleRegister = () => {
    navigate("home");
  };


  return (
    <KeyboardAwareScrollView style={styles.screen}>
      <StatusBar barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"} />
      <View style={styles.container}>
        <AutoImage source={appLogo} style={styles.logo} resizeMode="contain" />
        <View style={styles.alignItemCenter}>
          <Text
            text="Hi, Let’s Make a
Journey with Us"
            fontSize={24}
            color="black"
          />
        </View>
        <View style={[styles.modal, styles.shadowProp]}>
          <Text style={styles.modalTitle} text="Register" color="black" fontSize={16} />
          <TextField
            label="Email"
            labelColor={"gray"}
            placeholder="christina.angela123"
            style={styles.textField}
            inputStyle={styles.textInput}
            keyboardType="email-address"
          />
          <View>
            <TextField
              label="Password"
              labelColor={"gray"}
              placeholder="********"
              style={styles.textField}
              inputStyle={styles.textInput}
              secureTextEntry={!showPassword}
            />
            {showPassword ? (
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Icon name="eye" size={28} color={"gray"} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Icon name="eye-off" size={28} color={"gray"} />
              </TouchableOpacity>
            )}
          </View>
          <TextField
            label="Phone Number"
            labelColor={"gray"}
            placeholder="christina.angela123"
            style={[styles.textField, { marginTop: -28 }]}
            inputStyle={styles.textInput}
            keyboardType="email-address"
          />
          <View style={styles.registerAs}>
            <Text style={{ marginBottom: 14}} text="Register as a?" color={"black"} />
            <View style={styles.radioGroup}>
              <View style={styles.radioGroup}>
                <Icon name="radio-button-on" size={24} color="#51C3FE" />
                <Text text="Student" color={"black"} />
              </View>
              <View style={[styles.radioGroup, { marginLeft: 16}]}>
                <Icon name="radio-button-off" size={24} color="#51C3FE" />
                <Text text="Teacher" color={"black"} />
              </View>
            </View>
          </View>
          <Button style={styles.submitButton} onPress={() =>{handleRegister()}}>
            <Text text="Register" color="white" fontWeight="bold" />
          </Button>
          <View style={styles.alignItemCenter}>
            <TouchableOpacity style={styles.registerNow} onPress={()=>{handleLogin()}}>
              <Text text="Have an account?" color="black" />
              <Text text=" Login" color="#51C3FE" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
})
