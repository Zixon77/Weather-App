import { FlatList, StyleSheet, Text, View ,Image,Modal, TouchableOpacity} from 'react-native'
import React, { useState ,useEffect} from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import DailyModal from './Daily/DailyModal';

const Daily = ({weatherData}) => {

function dayToDate(date){
    const inputDate = new Date(date);
    const daysOfWeek = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
    const dayIndex = inputDate.getDay();
    const dayName = daysOfWeek[dayIndex];
    return dayName
}

function round(num){
    const newTemp = Math.round(num)
    return newTemp
 }

 const d= new Date();
 const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 const dayIndex = d.getDay();
 let todayName = daysOfWeek[dayIndex];


 const [showModal,setShowModal] = useState(false)
 const date = ' '

 /*
    <Modal animationType='slide' visible = {showModal} transparent >
                <DailyModal data = {item.day} onClose  = { () =>setShowModal(false)} />
            </Modal>
            */
  return (

    <View style = {styles.container}>

      <FlatList
      showsVerticalScrollIndicator = {false}
      data={weatherData.forecast.forecastday}
      renderItem={({item}) =>
      <TouchableOpacity activeOpacity={0.45} onPress={ () =>setShowModal(true)} >
      <View style = {styles.mainContainer}>
         <View style = {styles.forecastItem}> 
         {todayName == dayToDate(item.date)?
            <Text style = {styles.forecastDay}>
                Today
             </Text> : 
              <Text style = {styles.forecastDay}>
                {dayToDate(item.date)}
             </Text>}
             <Text style = {styles.text}>
                {item.day.condition.text}
               </Text>
            <Image
                source = {{uri:`https:${item.day.condition.icon}`}}
                style = {styles.forecastImage}
                resizeMode='contain'
            />
            <View style = {{flexDirection:"row",alignSelf:'center'}}>
            <Text style = {styles.info}>
                H::{round(item.day.maxtemp_f)}°
                </Text>
            <Text style = {styles.info}>
                L:{round(item.day.mintemp_f)}°
                </Text>
            </View>
        </View> 
       </View> 
       </TouchableOpacity>}
      keyExtractor={item =>item.date}
      />
    </View>
  )
}

export default Daily

const styles = StyleSheet.create({
    container:{
        backgroundColor:"rgba(0,0,0,0.2)",
        borderRadius:15,
        height:"93%",
        width:"45%",
        marginVertical:"3%",
        borderColor:"white",
 
    },
    mainContainer:{
        borderBottomWidth:1,
        borderBottomColor:"white",
    },
    forecastItem:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        margin:"5%",
    },
    forecastDay:{
        color:"white",
        fontWeight:"bold",
        fontSize:15
    },
    text:{
        color:"white",
        fontSize:12
    },
    forecastImage:{
        width:60,
        height:60,
        alignSelf:'center',
    },
    forecastTemp:{
        color:"white",
    },
    infoContainer:{
        flexDirection:"column",
        flexDirection:"column",
        justifyContent:"center",
      
    },
    info:{
        color:"white",
        fontSize:15,
       margin:"3%"
    },

})