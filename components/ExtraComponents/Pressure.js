import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'; 

const Pressure = ({weatherData}) => {

    useEffect(() =>{
        checkPressure(weatherData.current.pressure_in)
    },[weatherData.current.pressure_in])

    const [message,setMessage] = useState('')
    const checkPressure = (pressure) =>{
        switch(true){
         case pressure > 32.00:
            setMessage('Extremely High')
                break;
          case pressure > 31.50:
            setMessage('Very High')
                break;     
          case pressure > 31.00:
            setMessage('High')
                break;
         case pressure > 30.50:
            setMessage('Normal')
              break;   
         case pressure > 30.00:
            setMessage('Moderate')
                    break;
        case pressure > 29.50:
            setMessage('Low')
                  break;     
        case pressure > 28.00:
            setMessage('Very Low')
                  break;
        case pressure < 32.00:
            setMessage('Extremely Low')
                  break;   
        }
    }
  return (
    <View style = {styles.container}>
        <View style = {styles.topRow}>
           <Text style = {styles.title}>Pressure</Text>
           <MaterialIcons name="compress" size={20} color="white" />
        </View>
        <Text style = {styles.pressure}>{weatherData.current.pressure_in} inHg</Text>
        <Text style = {{color:"white",alignSelf:"center"}}>{message}</Text>
    </View>
  )
}

export default Pressure

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
        fontSize:30,
        fontWeight:"100",
        alignSelf:"center",
    },
})