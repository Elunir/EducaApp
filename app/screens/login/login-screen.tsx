import React, { FC } from "react"
import { Platform, StatusBar, TouchableOpacity, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { navigate, NavigatorParamList } from "../../navigators"
import { AutoImage, Button, Text, TextField } from "../../components"
import styles from "./login-styles"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import Icon from "react-native-vector-icons/Ionicons"

export const LoginScreen: FC<StackScreenProps<NavigatorParamList, "login">> = observer(() => {
  const appLogo = require("../assets/images/logo.png")
  const [showPassword, setShowPassword] = React.useState(false)

  const handleLogin = () => {
    navigate("register");
  };

  return (
    <KeyboardAwareScrollView style={styles.screen}>
      <StatusBar barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"} />
      <View style={styles.container}>
        <AutoImage source={appLogo} style={styles.logo} resizeMode="contain" />
        <View style={styles.alignItemCenter}>
          <Text style={styles.title} text="Welcome Back," fontSize={24} color="black" />
          <Text text="Angela Christina" fontSize={24} color="black" />
        </View>
        <View style={[styles.modal, styles.shadowProp]}>
          <Text style={styles.modalTitle} text="Login" color="black" fontSize={16} />
          <TextField
            label="Username/Email"
            labelColor={"gray"}
            placeholder="christina.angela123"
            style={styles.textField}
            inputStyle={styles.textInput}
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
          <TouchableOpacity style={styles.forgotPassword}>
            <Text text="Forgot Password?" color="black" />
          </TouchableOpacity>
          <Button style={styles.submitButton} onPress={()=> handleLogin()}>
            <Text text="Login" color="white" fontWeight="bold" />
          </Button>
          <View style={styles.alignItemCenter}>
            <TouchableOpacity style={styles.registerNow}>
              <Text text="Don't have an account?" color="black" />
              <Text text=" Register" color="#51C3FE" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
})
