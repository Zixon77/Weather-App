import { StyleSheet, Text, TextInput, View,FlatList } from 'react-native'
import React, { useEffect } from 'react'

const SearchBar = (props) => {

  useEffect(() =>{
 

  },[])

  return (
    <View style = {[styles.container,props.style]}>
        <TextInput 
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder='Enter City' 
        onSubmitEditing={props.onSubmitEditing}
        returnKeyType='done'
        placeholderTextColor={"lightgray"}
         style = {styles.textInput} />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
    },
    textInput:{
        fontSize:15,
        backgroundColor:"white",
        borderRadius:30,
        shadowColor: '#000',
        shadowOffset: { height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 3, 
        width:"90%",
        padding:"3%",
        alignSelf:"center"
    },
})