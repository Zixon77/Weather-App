import { FlatList, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'


const Hourly = ({weatherData},props) => {


  function convertEpochTime(epochTIme){
    const unixSeconds = epochTIme;
    const unixMilliSeconds = unixSeconds * 1000;
    const myDate = new Date(unixMilliSeconds);

    const fixedTime = myDate.toLocaleTimeString()
    let newTemp;

    if(!fixedTime.includes('10')){
    newTemp = fixedTime.replaceAll(/[:0]/g ,'')
    }else{
      const sign = fixedTime.match(/([APap][Mm])$/)[1];
      newTemp = fixedTime.slice(0,2) + " "+sign
    }

    return newTemp
  }

  const date = new Date()
  let newTime = date.toLocaleTimeString()
  const amPm = newTime.match(/([APap][Mm])$/)[1];

  let temp = newTime.indexOf(':')
  let result = newTime.slice(0,temp) + " " + amPm

  function round(num){
    const newTemp = Math.round(num)
    return newTemp
 }


  return (
    <>
    <Text style = {styles.fl}>
      Feels Like: {round(weatherData.current.feelslike_f)}°
       </Text>
    <View style = {styles.container}>
      <FlatList
        showsHorizontalScrollIndicator = {false}
        horizontal
        data={weatherData.forecast.forecastday[0].hour}
   
        renderItem={({item}) =>
        <View style = {styles.hourlyContainer}>
          {result == convertEpochTime(item.time_epoch) ?
          <Text style = {styles.timeNow}>Now</Text>
          :<Text style = {styles.time}>{convertEpochTime(item.time_epoch)}</Text>  }
            {result == convertEpochTime(item.time_epoch) ?
           <Image
             source = {{uri:`https:${weatherData.current.condition.icon}`}}
             style = {styles.icon}
             resizeMode='contain'
             />:
             <Image
             source = {{uri:`https:${item.condition.icon}`}}
             style = {styles.icon}
             resizeMode='contain'
             />
             }
            {result == convertEpochTime(item.time_epoch) ?
            <Text style = {styles.hourlyText}>{round(weatherData.current.temp_f)}°</Text> 
            :  <Text style = {styles.hourlyText}>
                {round(item.temp_f)}°
            </Text>}
         </View>
        }
      />
    </View>
    </>
  )
}

export default Hourly

const styles = StyleSheet.create({
    container:{
      backgroundColor:"rgba(0,0,0,0.2)",
      height:"15%",
      borderRadius:15,

      borderColor:"white",
      flexDirection:"column",
    },
    fl:{
      color:"white",
      marginLeft:"3%",
      marginBottom:"1%",
      fontWeight:'bold',
    },
    hourlyContainer:{
     alignSelf:"center",
     
    },
    time:{
      color:"white",
      marginHorizontal:10
    },
    timeNow:{
      color:"white",
      marginHorizontal:10,
      fontWeight:"bold"
    },
    hourlyText:{
      marginHorizontal:15,
      color:"white",
      fontSize:15,
      fontWeight:'bold',
      alignSelf:"center"
    },
    icon:{
      width:"100%",
      height:"50%",

    }
})
