/* eslint-disable react-native/no-inline-styles */
import React from "react"
import { AutoImage, Text } from "../../components"
import styles from "./NewsCardItem-styles"
import { View } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

export function NewsCardItem(props) {
  const progress = (props.item.classesCompleted / props.item.classesTotal) * 100

  return (
    <View style={styles.card}>
      <AutoImage source={require("./math.png")} resizeMode="cover" style={styles.imageCard} />
      <View style={styles.cardDetails}>
        <View>
          <Text fontSize={13} text={props.item.subject} color="black" fontWeight="bold" />
          <Text fontSize={14} text={props.item.title} color="black" />
        </View>
        <View style={styles.postDetails}>
          <View style={styles.postDetails}>
            <Icon name="clock-time-four-outline" size={14} color="gray" />
            <Text fontSize={14} text={props.item.postTime} color="black" />
          </View>
          <View style={styles.postDetails}>
            <Icon name="message-text-outline" size={14} color="gray" />
            <Text fontSize={14} text={props.item.totalComments} color="black" />
          </View>
        </View>
      </View>
    </View>
  )
}
