import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';


const UVIndex = ({weatherData}) => {
    const colors = ['#00FF00', '#FFFF00', '#FFA500', '#FF0000', '#800080', '#0099ff',];
    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")
    const [uvColor,setUvColor] = useState("")

    const uv = weatherData.current.uv


    useEffect(() =>{
        switch(true){
            case uv <=2:
                setTitle("Low");
                setUvColor('#00FF00')
                setDesc('Minimal sunburn risk. You can stay outside without extra protection unless you have very sensitive skin.')
              // Update for UV between  0 and 2 (inclusive)
                break;
            case uv <=5:
                setTitle("Moderate");
                setUvColor('#FFFF00')
                setDesc("Moderate risk of harm from the sun. Seek shade, wear protective clothing, and use sunscreen.");
                  // Update for UV between 3 and 5 (inclusive)
                break;
            case uv  <=7:
                setTitle("High");
                setUvColor("#ff6600")
                setDesc(" High risk of harm from the sun. Avoid peak hours, wear protective clothing, and apply sunscreen. Be cautious around reflective surfaces.");
                 // Update for UV between 6 and 7 (inclusive)
                break;
            case uv <=10:
                setTitle("Very High");
                setUvColor('#FF0000')
                setDesc("Very high risk of harm from the sun. Avoid outdoor activities during peak hours, wear protective clothing, and use sunscreen.");
                 // Update for UV between 8 and 10 (inclusive)
                break;
            case uv >=11:
                setTitle("Extreme");
                setUvColor('#800080')
                setDesc("Extremely high risk of harm from the sun. Stay indoors during peak hours, wear protective clothing and sunglasses, use sunscreen, and seek shade.");
                  // Update for UV >= 11
                break;
              default:
                 setTitle("");
                 setDesc("");
                  break;
        }
    },[])
  return (
    <View style = {styles.container}>
        <View style = {styles.topRow}>
          <Text style = {styles.title}>UV Index</Text>
         <Feather name="sun" size={20} color="white" />
        </View>
          <Text style = {[styles.uv,{color:uvColor}]}>{uv}</Text>
          <LinearGradient
            colors={colors}
            style={styles.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
        />
       <View style = {styles.info}>
            <Text style = {styles.title2}>{title}</Text>
            <Text style = {styles.desc}>{desc}</Text>
        </View>
    </View>
  )
}

/*
 <LinearGradient
            colors={colors}
            style={styles.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
        />
            <View style = {styles.info}>
                <Text style = {styles.title2}>{title}</Text>
                <Text style = {styles.desc}>{desc}</Text>
            </View>*/

export default UVIndex

const styles = StyleSheet.create({
    container:{
        margin:"7%",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        flex:1,
        
    },
    title:{
        fontWeight:'bold',
        color:"white",
        fontSize:17,
        alignSelf:"center",
        marginHorizontal:'5%'
    },
    topRow:{
        flexDirection:'row',
        alignSelf:"center",
      },
    uv:{
        color:"white",
        fontSize:45,
        fontWeight:"100",
    },
    gradient:{
        borderRadius:30,
        width:"90%",
        height:"5%"
    },
    info:{
        margin:'5%'
    },
    title2:{
        color:"white",
        fontWeight:'bold'
    },
    desc:{
        color:"white",
    }

})