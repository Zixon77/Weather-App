import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Humidity from './ExtraComponents/Humidity'
import Visibility from './ExtraComponents/Visibility'
import UVIndex from './ExtraComponents/UVIndex'
import Horizon from './ExtraComponents/Horizon'
import Wind from './ExtraComponents/Wind'
import Pressure from './ExtraComponents/Pressure'
import Percip from './ExtraComponents/Percip'

const ExtraInfo = ({weatherData}) => {
  return (
    <View style = {styles.mainContainer}> 
      <ScrollView showsVerticalScrollIndicator ={false}>
      <View style = {styles.container2}>
          <UVIndex weatherData={weatherData}/>
        </View>
        <View style = {styles.container1}>
          <Humidity weatherData={weatherData}/>
        </View>
        <View style = {styles.container1}>
          <Visibility weatherData={weatherData}></Visibility>
        </View>
        <View style = {styles.container1}>
          <Wind weatherData={weatherData} ></Wind>
        </View>
        <View style = {styles.container1}>
          <Horizon weatherData={weatherData}/>
        </View>
        <View style = {styles.container1}>
          <Percip weatherData={weatherData}/>
        </View>
        <View style = {styles.container1}>
          <Pressure weatherData={weatherData}/>
        </View>
      </ScrollView>
    </View>
  )
}

export default ExtraInfo

const styles = StyleSheet.create({
    mainContainer:{
        width:"50%",
        height:"93%",
        marginVertical:"3%",
        marginHorizontal:"5%",
        borderRadius:15,
    },
    container1:{
      backgroundColor:"rgba(0,0,0,0.2)",
      borderColor:"white",
        flex:1,
        borderRadius:15,
        marginVertical:"3%",
    },
    container2:{
      backgroundColor:"rgba(0,0,0,0.2)",
      borderColor:"white",
      flex:1,
        borderRadius:15,
        marginVertical:"3%",
 
    },


})