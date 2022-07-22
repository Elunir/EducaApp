import React from "react";
import { AutoImage, Text } from "../../components";
import styles from "../home/home-styles";
import { View } from "react-native";

export function RecentCardItem(props) {
  const progress = (props.item.classesCompleted / props.item.classesTotal) * 100;

  return (
    <View style={styles.card}>
      <AutoImage source={require("./math.png")} resizeMode="cover" style={styles.imageCard} />
      <View style={styles.cardDetails}>
        <Text text={props.item.subject} color={"black"} />
        <Text text={props.item.title} color={"black"} />
      </View>
      <View style={styles.classesBar}>
        <View style={styles.classesTotal}>
          <View
            style={[
              styles.classesCompleted,
              {
                width: progress,
              },
            ]}
          ></View>
        </View>
        <View>
          <Text
            color={"black"}
            text={`${props.item.classesCompleted}/${props.item.classesTotal}`} />
        </View>
      </View>
    </View>
  );
}
