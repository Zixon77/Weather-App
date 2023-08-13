  import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,ImageBackground, SafeAreaView,Modal} from 'react-native';
import SearchBar from './components/SearchBar';
import BaseInfo from './components/BaseInfo';
import Hourly from './components/Hourly';
import Daily from './components/Daily';
import ExtraInfo from './components/ExtraInfo';
import FadeIn from './components/Animations/FadeIn';
import {API_KEY} from '@env'

export default function App() {
  const [weatherData,setWeatherData] = useState();
  const [dayNight, setDayNight] = useState(1)
  const[background,setBackground]= useState(require('./assets/states/clear_sky.jpg'))

  const [city,setCity] = useState('')
  const [submitted, setSubmitted] = useState(false);
  const [cityData,setCityData] = useState(null);

  useEffect(() =>{
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=Pittsburgh&days=5&aqi=yes&alerts=yes`)
    .then(res=>res.json())
    .then(data=>setWeatherData(data))
  },[])
  console.log(weatherData)

  useEffect(() => {
    if(cityData){
      setDayNight(cityData.current.is_day)
      getImageSource()
      setCity('');
      setWeatherData(cityData);
    }
  }, [cityData]);

  useEffect(() =>{
    if(cityData){
     setDayNight(cityData.current.is_day)
      getImageSource()
    }
    if(weatherData){
      setDayNight(weatherData.current.is_day)
       getImageSource()
     }
  },[dayNight,weatherData])

  const getImageSource = () => {
    if (dayNight == 0) {
      setBackground(require('./assets/states/clear_night.jpg'))
    } else  {
      setBackground(require('./assets/states/clear_sky.jpg'));
    }
  }; 
  
  const [key, setKey] = useState(0);

  const handleTextInputSubmit = async () => {
    console.log('searching')
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=01fa96af0aa14ff895f25057231707&q=${city}&days=5&aqi=yes&alerts=yes`);
      const data = await response.json();
      setCityData(data);
      console.log(data); // Make sure data is received correctly
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
    setKey((prevKey) => prevKey + 1);
  };


  return (
    <View style={styles.container}>
      <StatusBar style='light'/>
      <ImageBackground style = {styles.image} source={background} resizeMode="cover">
         <SafeAreaView style = {styles.SAV}/>
         <FadeIn duration={1500} key={key}>
            {weatherData ?
              <SearchBar
                style = {styles.searchBar}
                value = {city}
                onChangeText={text => setCity(text)}
                onSubmitEditing = {handleTextInputSubmit}
                /> : null}
                {weatherData ?
                <View style = {styles.topHalf}>
                    <BaseInfo weatherData = {weatherData} />
                    <Hourly weatherData={weatherData}/> 
                      <View style = {styles.bottomHalf}>
                        <Daily weatherData={weatherData}/>
                        <ExtraInfo weatherData = {weatherData}/>
                      </View>
                </View>
                : null}
          </FadeIn>
      </ImageBackground>
     </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  SAV:{
   
  },
  image:{
    flex:1,
    flexDirection:"column",
  },
  searchBar:{
    //borderWidth:1,
 //  borderColor:"red",
    flex:1
  },
  topHalf:{
 //   borderWidth:1,
  //  borderColor:"green",
   flex:9,
   paddingHorizontal:20,
   flexDirection:"column",

  },
  baseInfo:{
   
  },
  hourly:{

  },
  bottomHalf:{
  //  borderWidth:1,
  //  borderColor:"orange",
    flexDirection:"row",
    flex:1
  }
});
