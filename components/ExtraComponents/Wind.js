import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 


function decodeWindDirection(direction) {
    const directions = {
        "N": "North",
        "NNE": "North-Northeast",
        "NE": "Northeast",
        "ENE": "East-Northeast",
        "E": "East",
        "ESE": "East-Southeast",
        "SE": "Southeast",
        "SSE": "South-Southeast",
        "S": "South",
        "SSW": "South-Southwest",
        "SW": "Southwest",
        "WSW": "West-Southwest",
        "W": "West",
        "WNW": "West-Northwest",
        "NW": "Northwest",
        "NNW": "North-Northwest"
    };

    return directions[direction] || "Unknown";
}

// Example usage
const windDirection = "SSW";
const meaning = decodeWindDirection(windDirection);
console.log(`The wind direction ${windDirection} means: ${meaning}`);

const Wind = ({weatherData}) => {
  return (
    <View style = {styles.container}>
        <View style = {styles.topRow}>
          <Text style = {styles.title}>Wind</Text>
          <Feather name="wind" size={20} color="white" />
        </View>
        <View style = {styles.row}>
          <SimpleLineIcons name="speedometer" size={20} color="white" />
         <Text  style = {styles.info}>Speed:</Text>
          <Text style = {styles.info}>{weatherData.current.wind_mph}mph</Text>
        </View>
        <View style = {styles.row}>
             <Entypo name="direction" size={20} color="white" />
             <Text  style = {styles.info}>Direction:</Text>
          <Text style = {styles.info}>{weatherData.current.wind_dir}</Text>
        </View>
        <View style = {styles.row}>
          <MaterialIcons name="rotate-90-degrees-ccw" size={20} color="white" />
          <Text style = {styles.info}>Degree:</Text>
          <Text style = {styles.info}>{weatherData.current.wind_degree}°</Text>
        </View>
    </View>
  )
}

export default Wind

const styles = StyleSheet.create({
    container:{
        margin:"3%",
        alignSelf:"center"
    },
    topRow:{
      flexDirection:'row',
      alignSelf:"center",
    },
    title:{
        fontWeight:'bold',
        color:"white",
        fontSize:17,
        alignSelf:"center",
        marginHorizontal:"5%"
    },
    humidity:{
        color:"white",
        fontSize:45,
        fontWeight:"100",
        alignSelf:"center"
    },
    row:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"space-between",

        justifyContent:"center"
    },
    info:{
        color:"white",
        margin:"5%"
    }
})