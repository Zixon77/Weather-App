import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 

const Percip = ({weatherData}) => {


  return (
    <View style = {styles.container}>
        <View style = {styles.topRow}>
           <Text style = {styles.title}>Precipitation</Text>
           <Ionicons name="rainy-outline" size={20} color="white" />
        </View>
        <Text style = {styles.pressure}>{weatherData.current.precip_in}″</Text>
    </View>
  )
}

export default Percip 

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
    pressure:{
        color:"white",
        fontSize:45,
        fontWeight:"100",
        alignSelf:"center",
    },
})