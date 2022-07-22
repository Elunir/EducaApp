import React from "react"
import { AutoImage, Text } from "../../components"
import styles from "../home/CardItem-styles"
import { View } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"


export function CardItem(props) {
  const progress = (props.item.classesCompleted / props.item.classesTotal) * 100

  return (
    <View style={styles.card}>
      <AutoImage source={require("./math.png")} resizeMode="cover" style={styles.imageCard} />
      <View style={styles.cardDetails}>
        <Text fontSize={14} text={props.item.title} color="black" />
        <View style={styles.lesson}>
          <Text text={`${props.item.lesson} lessons`} color="black" fontSize={12}/>
          <View style={styles.row}>
          <Icon name="clock-time-four-outline" size={14} color="gray" />
            <Text text={`${props.item.time}`} color="black" fontSize={12}/>
          </View>
        </View>
      </View>
    </View>
  )
}
