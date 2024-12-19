import React, { useEffect } from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Splash({navigation}: any) {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Login');
          }, 3000);
      
          return () => clearTimeout(timer);
    },[navigation])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 20,
        }}>
        Splash Screen
      </Text>
    </View>
  );
}

export default Splash;
