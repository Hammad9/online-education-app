import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useNavigationState } from '@react-navigation/native'
import Course from '../screen/Course';

const Menu = () => {

    const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
        <TouchableOpacity
            style={styles.button}
            onPress={() =>navigation.navigate("Course") }
        >
            <Text>Course</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={() =>navigation.navigate("About") }
        >
            <Text>About</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={() =>navigation.navigate("Contact") }
        >
            <Text>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={() =>navigation.navigate("UserData") }
        >
            <Text>UserData</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={() =>navigation.navigate("Student") }
        >
            <Text>Student</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
    menuContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
    },
    
})