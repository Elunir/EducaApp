/* eslint-disable react-native/no-color-literals */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-native/no-inline-styles */
import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { AutoImage, Button, Screen, Text } from "../../components"
import { TouchableOpacity, View } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import styles from "./payment-method-styles"

export const PaymentMethodScreen: FC<StackScreenProps<NavigatorParamList, "paymentMethod">> =
  observer(function PaymentMethodScreen() {
    const [paymentMethod, setPaymentMethod] = useState("Credit Card")

    return (
      <Screen>
        <View style={styles.headerContainer}>
          <View style={styles.step}>
            <Icon name="clipboard-list" size={28} color="#51C3FE" />
            <Text preset="header" text="Review" color="#51C3FE" />
          </View>
          <View style={styles.dotSeperator} />
          <View style={styles.step}>
            <Icon name="wallet" size={28} color="#51C3FE" />
            <Text preset="header" text="Payment Method" color="#51C3FE" />
          </View>
          <View
            style={[
              styles.dotSeperator,
              {
                borderColor: "gray",
              },
            ]}
          />
          <View style={styles.step}>
            <Icon name="cash" size={28} color="gray" />
            <Text preset="header" text="Payment" color="gray" />
          </View>
        </View>

        <View style={styles.paymentMethodFullContainer}>
          <View style={styles.paymentMethod}>
            <Text text="Payment Method" color="black" fontWeight="600" />

            <TouchableOpacity
              style={[
                styles.paymentMethodCard,
                {
                  borderColor: paymentMethod === "Credit Card" ? "#51C3FE" : "#e0e0e0",
                },
              ]}
              onPress={() => setPaymentMethod("Credit Card")}
            >
              <View style={styles.radioGroup}>
                <Icon
                  name={paymentMethod === "Credit Card" ? "radiobox-marked" : "radiobox-blank"}
                  size={24}
                  color="#51C3FE"
                />
                <Text style={{ marginLeft: 8 }} text="Credit Card" color="black" fontWeight="600" />
              </View>
              <AutoImage
                style={styles.creditCardImage}
                source={require("../payment-method/VisaMasterCard.png")}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.paymentMethodCard,
                {
                  borderColor: paymentMethod === "Paypal" ? "#51C3FE" : "#e0e0e0",
                },
              ]}
              onPress={() => setPaymentMethod("Paypal")}
            >
              <View style={styles.radioGroup}>
                <Icon
                  name={paymentMethod === "Paypal" ? "radiobox-marked" : "radiobox-blank"}
                  size={24}
                  color="#51C3FE"
                />
                <Text style={{ marginLeft: 8 }} text="Paypal" color="black" fontWeight="600" />
              </View>
              <AutoImage
                style={styles.creditCardImage}
                source={require("../payment-method/Paypal.png")}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.paymentMethodCard,
                {
                  borderColor: paymentMethod === "Apple Pay" ? "#51C3FE" : "#e0e0e0",
                },
              ]}
              onPress={() => setPaymentMethod("Apple Pay")}
            >
              <View style={styles.radioGroup}>
                <Icon
                  name={paymentMethod === "Apple Pay" ? "radiobox-marked" : "radiobox-blank"}
                  size={24}
                  color="#51C3FE"
                />
                <Text style={{ marginLeft: 8 }} text="Apple Pay" color="black" fontWeight="600" />
              </View>
              <AutoImage
                style={styles.creditCardImage}
                source={require("../payment-method/ApplePay.png")}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.paymentMethodFooterContainer}>
            <View style={styles.paymentMethodFooter}>
              <View>
                <Text text="Payment Date" color="black" fontWeight="bold" />
                <Text text="01/09/2020" color="black" fontWeight="600" />
              </View>
              <View>
                <Text text="Price" color="black" fontWeight="bold" />
                <Text text="$240" color="black" fontWeight="600" />
              </View>
              <View>
                <Text text="Discount" color="black" fontWeight="bold" />
                <View style={styles.discount}>
                  <Text text="-$120" color="black" fontWeight="600" />
                  <Text text=" (50%)" color="#51C3FE" fontWeight="600" />
                </View>
              </View>
            </View>
            <View style={styles.checkout}>
              <Text text="Total Price" color="black" fontWeight="bold" />
              <View
                style={[
                  styles.dotSeperator,
                  {
                    borderColor: "gray",
                  },
                ]}
              />
              <Text text="$120" color="black" fontWeight="600" />
              <Button style={styles.checkoutButton}>
                <Text text="Checkout" color="white" fontWeight="bold" />
              </Button>
            </View>
          </View>
        </View>
      </Screen>
    )
  })
