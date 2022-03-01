import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Menu from '../component/Menu';


export default function Home() {
  const description="Lorem ipsum dolor,  impedit molestias similique dolorum sit tempora nesciunt error et iure officia deserunt ullam dolore, mollitia fugiat. Dolores, consequatur!"
  return (
    <View style={styles.mainContainer}>
        <View style={styles.homeTop}>
            <Image
            style={styles.imageHeader}
            resizeMode='contain'
            source={require('../../assets/student.jpg')}
            
            />
            <Text style={styles.header}>Welcome To </Text>
            <Text style={[styles.header,{
              fontSize:20,
              color:'blue',
              marginTop:0,
            }]}>Hammad Channel</Text>

            <Text style={styles.para}>{description}</Text>

        </View>
        <View style={styles.mainMenu}>
            <View style={styles.line}></View>
            <Menu />
            <View style={[styles.line,{
                marginVertical:20,
            }]}></View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height:'100%',
    justifyContent:'space-between',   //yeah by default colum wise hota hai lakin aisa karnay say yeah row wise behave karay ga
    paddingHorizontal:20,
    textAlign:'center',
  },  
  imageHeader:{
    height:undefined,
    width:"100%",
    aspectRatio:1,
    marginTop:50,
    borderRadius:10,
  },
  homeTop:{
    display:"flex",
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:10,
  },
  header:{
    textTransform:'uppercase',
    fontSize:30,
    color:'#344055',
    fontFamily:'Nunito_700Bold'
  },
  para:{
      marginTop:30,
      lineHeight:26,
      paddingBottom:50,
      textAlign:'left',
      fontFamily:"Nunito_600SemiBold",
  },
  mainMenu:{

  },
  line:{
    marginBottom:20,
    borderWidth:0.5,
    borderColor:'grey',
  }
})
