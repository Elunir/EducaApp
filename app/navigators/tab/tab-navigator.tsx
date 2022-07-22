import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeScreen, LoginScreen, PaymentMethodScreen } from "../../screens"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

export type TabNavigatorParamList = {
  home: undefined
  paymentMethod: undefined
  login: undefined
}

const Tab = createBottomTabNavigator<TabNavigatorParamList>()
export const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="paymentMethod"
        component={PaymentMethodScreen}
        options={{
          tabBarLabel: "Payment Screen",
          tabBarIcon: ({ color, size }) => <Icon name="wallet" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  )
}
