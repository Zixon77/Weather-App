import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProgressBar from 'react-native-progress/Bar';
import { Entypo } from '@expo/vector-icons'; 


const Humidity = ({weatherData}) => {
  return (
    <View style = {styles.container} >
      <View style = {styles.topRow}>
        <Text style = {styles.title}>Humidity</Text>
        <Entypo name="water" size={20} color="white" />
      </View>
      <Text style = {styles.humidity}>{weatherData.current.humidity}%</Text>
      <View style = {styles.progressContainer}>
        <Text style = {styles.progressText}>0</Text>
        <ProgressBar
            progress={weatherData.current.humidity /100}
            width={115}
            color="white"
            height={15}
        />
         <Text style = {styles.progressText}>100</Text>
      </View>
    </View>
  )
}

export default Humidity

const styles = StyleSheet.create({
    container:{
        margin:"3%",
        alignSelf:"center"
    },
    topRow:{
      flexDirection:'row',
      alignSelf:"center"
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
    progressContainer:{
        flexDirection:"row",
        flex:1,
    },
    progressText:{
        color:"white",
        marginHorizontal:"3%",
    }
})