import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'; 

const DailyModal = ({data,...props}) => {

  const [fullDate,setFullDate] = useState()
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  useEffect(() => {
    const currentDate = new Date();
    const day = days[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();
    const formattedDate = `${day}, ${month} ${date} ${year}`;
    setFullDate(formattedDate);
  }, []);
 
  const [weatherData,setWeatherData] = useState();

  return (
    
      <View style = {styles.modalContainer}>
          <View style = {styles.modalContent}>
            <TouchableOpacity onPress={props.onClose} style = {styles.x} >
                <Ionicons name="md-close" size={35} color="white" />
              </TouchableOpacity>
              <View style = {styles.topRow}>
                <Text style = {styles.date}>{data.maxtemp_f}</Text>
              </View>
              
          </View>
      </View>
  )
}

export default DailyModal

const styles = StyleSheet.create({ 
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',

        borderRadius: 10,
      },
      modalContent: {
        width: '100%', 
        height:"95%",
        backgroundColor:"#262626", 
        justifyContent: 'center',
        alignItems: 'center',
      },
      topRow:{
        borderBottomWidth:1,
        borderBottomColor:"white",
        flexDirection:"row",
        justifyContent: 'center',
        alignItems: 'center',
        width:"75%",
      },
      date:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        margin:'3%'
      },
      x:{
        right:'42%'
      }
})