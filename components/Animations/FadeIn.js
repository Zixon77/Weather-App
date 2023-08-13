import React, { useState, useEffect, useMemo } from 'react';
import { Animated,StyleSheet } from 'react-native';



const FadeIn = ({ duration = 1000, children, key }) => {
    const [fadeAnim] = useState(new Animated.Value(0)); // Initial opacity: 0

    const fadeDuration = useMemo(() => {
      fadeAnim.setValue(0); // Reset the animation when the key (city) changes
      return duration;
    }, [fadeAnim, key, duration]);
  
    useEffect(() => {
      // Start the fade-in animation when the component mounts
      Animated.timing(fadeAnim, {
        toValue: 1,            // Final opacity: 1
        duration: fadeDuration, // Use the specified duration or the default
        useNativeDriver: true, // Use the native driver for better performance
      }).start();
    }, [fadeAnim, fadeDuration]);
  

  return (
    <Animated.View style={{ opacity: fadeAnim, flex: 1 }}>
    {children}
  </Animated.View>
  )
}

export default FadeIn

const styles = StyleSheet.create({})