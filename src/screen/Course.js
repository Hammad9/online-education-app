import { FlatList, StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import Courses from '../api/CourseApi'

const Course = ({navgation}) => {

  // CouseData Function define
  const courseCard = ({ item }) => {
    return (

      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <View style={styles.mainHeader}>
            <Image
              style={styles.imageContainer}
              source={item.image}
              resizeMode="contain"
            />
            <Text style={styles.titleStyle}>{item.title}</Text>
            <Text style={styles.desc}>{item.description}</Text>
            
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonStyle}
                onPress={()=>navgation.navigate('CourseDetails',{
                  courseId:item.id,
                })}
              >
                <Text style={styles.buttonText}>Course Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View>
      <Text>My name is Hammad</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={Courses}
        renderItem={courseCard}

      />

    </View>
  )
}

export default Course

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  mainContainer: {
    paddingHorizontal: 20,
  },
  courseContainer: {
    padding: 30,
    backgroundColor: "rgba(255, 255, 255, 0.90)",
    textAlign: "center",
    borderRadius: 5,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
  },
  mainHeader: {
    fontSize: 22,
    color: "#344055",
    textTransform: "uppercase",
    // fontWeight: 500,
    paddingBottom: 15,
    textAlign: "center",
    fontFamily: "Nunito_600SemiBold",
  },
  desc: {
    textAlign: "left",
    fontFamily: "JosefinSans_400Regular",
    paddingBottom: 15,
    lineHeight: 20,
    fontSize: 16,
    color: "#7d7d7d",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonStyle: {
    backgroundColor: "#809fff",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#eee",
    fontFamily: "JosefinSans_500Medium",
    textTransform: "capitalize",
  },
});