import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screen/Home'
import About from './src/screen/About';
import Contact from './src/screen/Contact';
import Course from './src/screen/Course';
import UserData from './src/screen/UserData';
import Student from './src/screen/Student';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      {/* Home Screens */}
      
      <Stack.Screen name="Home" component={Home} />
      
      {/* About Screens */}
      <Stack.Screen name="About" component={About} />
      {/* contact Screens */}
      <Stack.Screen name="Contact" component={Contact} />
      {/* UserData Screens */}
      <Stack.Screen name="UserData" component={UserData} />
      {/* Course Screens */}
      <Stack.Screen name="Course" component={Course} />
      {/* Studetn Screens */}
      <Stack.Screen name="Student" component={Student} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
const styles = StyleSheet.create({
  container:{
    display:'flex',
  }
})
