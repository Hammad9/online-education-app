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
import AppLoading from 'expo-app-loading';


// Font Family 
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from '@expo-google-fonts/josefin-sans'

import {
  Nunito_600SemiBold,
  Nunito_700Bold,

} from '@expo-google-fonts/nunito'
import CourseDetails from './src/screen/CourseDetails';


const Stack = createNativeStackNavigator();





const App = () => {
    // For Check What font is loaded or not  this is hooks for font 
    let [fontsLoaded] = useFonts({
      JosefinSans_400Regular,
      JosefinSans_500Medium,
      Nunito_600SemiBold,
      Nunito_700Bold,
    });
    if (!fontsLoaded) {
      <AppLoading />
    }

    return (
      // Below Header show false is in object 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {/* Home Screens */}
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}
            options={{
              headerTitleStyle: {
                fontSize: 25,
              },

              headerTitleAlign: 'center',
            }}
          />

          {/* About Screens */}
          <Stack.Screen name="About" component={About}
            options={{
              headerTitleStyle: {
                fontSize: 25,
              },

              headerTitleAlign: 'center',
            }}
          />
          {/* contact Screens */}
          <Stack.Screen name="Contact" component={Contact}
            options={{
              headerTitleStyle: {
                fontSize: 25,
              },

              headerTitleAlign: 'center',
            }}
          />
          {/* UserData Screens */}
          <Stack.Screen name="UserData" component={UserData}
            options={{
              headerTitleStyle: {
                fontSize: 25,
              },

              headerTitleAlign: 'center',
            }}
          />
          {/* Course Screens */}
          <Stack.Screen name="Course" component={Course}
            options={{
              headerTitleStyle: {
                fontSize: 25,
              },
              headerTitle: 'Courses',
              headerTitleAlign: 'center',
            }}
          />
          {/* Studetn Screens */}
          <Stack.Screen name="Student" component={Student}
            options={{
              headerTitleStyle: {
                fontSize: 25,
              },
              headerTitleAlign: 'center',
            }}
          />
          {/* Course Details */}
          <Stack.Screen name="CourseDetails" component={CourseDetails}
            options={{
              headerTitleStyle: {
                fontSize: 25,
              },
              headerTitleAlign: 'center',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  export default App
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
    }
  })
