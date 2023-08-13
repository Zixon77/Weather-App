import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const Horizon = ({weatherData}) => {
  return (
    <View style = {styles.container}>
        <View style = {styles.topRow}>
            <Text style = {styles.title}>Daylight Horizon</Text>
            <MaterialCommunityIcons name="weather-hazy" size={20} color="white" />
        </View>
        <View style = {{flexDirection:"row",margin:"2%",alignItems:"center"}}>
            <Feather name="sunrise" size={27} color="white" />
            <Text  style = {styles.time}>Sunrise:</Text>
            <Text style = {styles.time}>
            {weatherData.forecast.forecastday[0].astro.sunrise}
            </Text>
        </View>
        <View style = {{flexDirection:"row",margin:"2%",alignItems:"center"}}>
            <Feather name="sunset" size={27} color="white" />
            <Text  style = {styles.time}>Sunset:</Text>
            <Text  style = {styles.time}>
            {weatherData.forecast.forecastday[0].astro.sunset}
            </Text>
        </View>


    </View>
  )
}

export default Horizon

const styles = StyleSheet.create({
    container:{
        margin:"3%",
        alignSelf:"center",
        justifyContent:'center',
        alignItems:"center",
    },
    topRow:{
      flexDirection:'row',
      alignSelf:"center",
      marginBottom:'3%',
    },
    title:{
        fontWeight:'bold',
        color:"white",
        fontSize:17,
        alignSelf:"center",
        marginHorizontal:"5%"
    },
    time:{
        color:"white",
   
        marginHorizontal:"5%"
    }

})