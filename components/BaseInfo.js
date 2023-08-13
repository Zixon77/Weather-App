import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const BaseInfo = ({weatherData},props) => {

    const currentIcon ="https:" + weatherData.current.condition.icon
    function round(num){
       const newTemp = Math.round(num)
       return newTemp
    }

    return (
        <View style = {styles.container}>
            <View style = {styles.conditionContainer}>
              <Text style = {styles.name}>{weatherData.location.name}</Text>
              <Text style = {styles.text}>{weatherData.current.condition.text}</Text>
            </View>
        <View style = {{flexDirection:"row"}}>
            <View style = {styles.currentInfo}>
                  <Text style = {styles.currentTemp}>
                    {round(weatherData.current.temp_f)}°
                    </Text> 
                  <Image source={{uri:currentIcon}} style = {styles.icon}/>
            </View>
             <View style = {styles.highLowContainer}>
                 <Text style = {styles.highLow}>
                       High: {round(weatherData.forecast.forecastday[0].day.maxtemp_f)}°
                  </Text>
                  <Text style = {styles.highLow}>
                      Low: {round(weatherData.forecast.forecastday[0].day.mintemp_f)}°
                  </Text>
              </View>
         </View>
        </View> 
      )
}

export default BaseInfo

const styles = StyleSheet.create({
    container:{

    },
    conditionContainer:{
        flexDirection:"column",
        margin:5
    },
    name:{
        color:"white",
        fontSize:32,
        fontWeight:"bold"
    },
    text:{
        color:"white",
  
    },
    currentInfo:  {
        flexDirection:"row",

    },
    currentTemp:{
        color:"white",
        fontSize:80,
        fontWeight:'100',
    },
    icon:{
        width:105,
        height:105,
        justifyContent:"center",
    },
    highLowContainer:{
        flexDirection:"column",
        padding:"1%",
        left:'75%',
        top:"20%",
        position:"absolute",
    },
    highLow:{
        color:"white",
        fontWeight:"200",
        fontSize:20,
    }
})