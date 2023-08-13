import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons'; 

const Visibility = ({weatherData}) => {

  const [condition,setCondition] = useState('')
    const miles = weatherData.current.vis_miles

    useEffect(() =>{
    switch(miles){
        case miles <=1:
            setCondition("Dense fog")
            break;
         case 2:
            setCondition("Thick fog")
              break;
        case 3:
            setCondition("Thick fog")
            break;
         case 4:
            setCondition("Moderate fog")
            break;
        case 5:
            setCondition('Light fog')
            break;
        case 6:
            setCondition("Thin fog")
            break;
        case 7:
            setCondition('Haze')
            break;
         case 8:
            setCondition('Clear')
            break;
        case 9:
            setCondition("Very clear")
            break;
         case 10:
            setCondition("Exceptioanlly Clear")
            break;
         case 11:
            setCondition('Pure air')
            break;
    }
    },[])
  return (
    <View style = {styles.container}> 
    <View style = {styles.topRow}>
     <Text style = {styles.title}>Visibility</Text>
      <Feather name="eye" size={20} color="white" />
    </View>
      <Text style = {styles.vis}> {miles} mi </Text>
      <Text style = {styles.condition}>{condition}</Text>
    </View>
  )
}

export default Visibility

const styles = StyleSheet.create({
    container:{
        margin:"3%",
        alignSelf:"center"
    },
    topRow:{
        flexDirection:'row',
    },
    title:{
        fontSize:17,
        fontWeight:'bold',
        color:"white",
        alignSelf:"center",
        marginHorizontal:"5%",
     
    },
    vis:{
        fontSize:40,
        color:"white",
        fontWeight:"100",
        alignSelf:"center",
        
    },
    condition:{
        color:"white",
        alignSelf:"center"
    }
})