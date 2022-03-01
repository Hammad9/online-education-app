import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
            <Image
            style={styles.iconStyle}
            source={require('../../assets/course.png')}
            
            />
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={() =>navigation.navigate("About") }
        >
        <Image
        style={styles.iconStyle}
        source={require('../../assets/about.png')}
        
        />
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={() =>navigation.navigate("Contact") }
        >
        <Image
            style={styles.iconStyle}
            source={require('../../assets/contact.png')}
            
            />
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={() =>navigation.navigate("UserData") }
        >
        <Image
        style={styles.iconStyle}
        source={require('../../assets/userdata.png')}
        
        />
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={() =>navigation.navigate("Student") }
        >
        <Image
        style={styles.iconStyle}
        source={require('../../assets/student.png')}
        
        />
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
    iconStyle:{
        width:"100%",
        height:40,
        aspectRatio:1,
    }
})