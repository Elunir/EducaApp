import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Screen, Text } from "../../components"
import styles from "../home/home-styles"
import { FlatList, SectionList, TouchableOpacity, View } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { Searchbar } from "react-native-paper"
import { RecentCardItem } from "./RecentCardItem"
import { CardItem } from "./CardItem"
import { NewsCardItem } from "./NewsCardItem"

export const HomeScreen: FC<StackScreenProps<NavigatorParamList, "home">> = observer(
  function HomeScreen() {
    const [searchQuery, setSearchQuery] = React.useState("")
    const [Category, setCategory] = React.useState("Recommended")

    const onChangeSearch = (query) => setSearchQuery(query)

    const data = [
      {
        title: "Recent learning",
        data: [
          {
            id: 1,
            image: "./math.png",
            title: "High School Algebra I: Help and Review",
            subject: "Mathematics",
            classesTotal: 10,
            classesCompleted: 5,
          },
          {
            id: 2,
            image: "./math.png",
            title: "Enlargement to Trigonometry",
            subject: "Mathematics",
            classesTotal: 10,
            classesCompleted: 5,
          },
          {
            id: 3,
            image: "./math.png",
            title: "High School Algebra II: Help and Review",
            subject: "Mathematics",
            classesTotal: 10,
            classesCompleted: 5,
          },
        ],
      },
    ]

    const dataTwo = [
      {
        title: "Recommended",
        data: [
          {
            id: 1,
            image: "./math.png",
            title: "High School Algebra I: Help and Review",
            lesson: 12,
            time: "12h 30m",
          },
          {
            id: 2,
            image: "./math.png",
            title: "Enlargement to Trigonometry",
            lesson: 12,
            time: "12h 30m",
          },
          {
            id: 3,
            image: "./math.png",
            title: "High School Algebra II: Help and Review",
            lesson: 12,
            time: "12h 30m",
          },
        ],
      },
      {
        title: "Algebra",
        data: [
          {
            id: 1,
            image: "./math.png",
            title: "Bacterial Biology Overview",
            lesson: 12,
            time: "12h 30m",
          },
          {
            id: 2,
            image: "./math.png",
            title: "Mendelian Genetics & Mechanisms of Her...",
            lesson: 12,
            time: "12h 30m",
          },
          {
            id: 3,
            image: "./math.png",
            title: "Metabolic Biochemistry for High School",
            lesson: 12,
            time: "12h 30m",
          },
        ],
      },
    ]

    const dataThree = [
      {
        title: "News",
        data: [
          {
            id: 1,
            image: "./math.png",
            title: "High School Algebra I: Help and Review",
            subject: "Mathematics",
            postTime: "1 hour ago",
            totalComments: 5,
          },
          {
            id: 2,
            image: "./math.png",
            title: "Enlargement to Trigonometry",
            subject: "Mathematics",
            postTime: "24 August 2022",
            totalComments: 5,
          },
          {
            id: 3,
            image: "./math.png",
            title: "High School Algebra II: Help and Review",
            subject: "Mathematics",
            postTime: "24 August 2022",
            totalComments: 5,
          },
        ],
      },
    ]

    return (
      <Screen preset="scroll">
        <View style={styles.headerContainer}>
          <View>
            <Text
              style={styles.header}
              text="Hi, Christina"
              color={"black"}
              fontSize={24}
              fontWeight="600"
            />
            <Text
              style={styles.header}
              text="What do you want to learn today?"
              color={"gray"}
              fontSize={14}
            />
          </View>
          <TouchableOpacity>
            <Icon name="bell" color="gray" size={32} />
            <View style={styles.notificationAlert}>
              <Icon name="circle" color="white" size={14} />
              <Icon style={styles.notificationAlert} name="circle" color="#51C3FE" size={12} />
            </View>
          </TouchableOpacity>
        </View>
        <Searchbar
          style={styles.searchbar}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <View>
          <SectionList
            sections={data}
            style={styles.sectionList}
            renderSectionHeader={({ section }) => (
              <>
                <Text
                  style={styles.sectionTitle}
                  text={section.title}
                  color="black"
                  fontSize={16}
                />
                <FlatList
                  data={section.data}
                  renderItem={({ item }) => <RecentCardItem item={item} />}
                  keyExtractor={(item) => item.id.toString()}
                  horizontal
                />
              </>
            )}
            renderItem={() => {
              return null
            }}
            keyExtractor={(item, index) => String(item.id) + index}
          />

          <FlatList
            data={dataTwo}
            style={styles.seperatorMargin}
            horizontal
            renderItem={({ item }) => (
              <>
                <TouchableOpacity
                  style={styles.sectionTwoMargin}
                  onPress={() => {
                    setCategory(item.title)
                  }}
                >
                  <Text style={styles.sectionTitle} text={item.title} color="black" fontSize={16} />
                  <View style={Category === item.title ? styles.selectedCategory : undefined} />
                </TouchableOpacity>
              </>
            )}
          />
          <SectionList
            sections={dataTwo}
            renderSectionHeader={({ section }) => {
              return (
                section.title === Category && (
                  <FlatList
                    data={section.data}
                    horizontal
                    style={styles.sectionTitle}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <CardItem item={item} />}
                  />
                )
              )
            }}
            renderItem={() => {
              return null
            }}
            keyExtractor={(item) => item.id.toString()}
          />

          <SectionList
            sections={dataThree}
            style={styles.sectionList}
            keyExtractor={(item) => item.id.toString()}
            renderSectionHeader={({ section }) => {
              return (
                <View>
                  <Text
                    style={styles.sectionTitle}
                    text={section.title}
                    color="black"
                    fontSize={16}
                  />
                  <FlatList
                    data={section.data}
                    renderItem={({ item }) => <NewsCardItem item={item} />}
                    keyExtractor={(item) => item.id.toString()}
                  />
                </View>
              )
            }}
            renderItem={() => null}
          />
        </View>
      </Screen>
    )
  },
)
