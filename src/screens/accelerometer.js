import React, { useState, useEffect } from 'react';
import { Text,View, StyleSheet,TouchableOpacity } from 'react-native';
import {
    Accelerometer,
} from 'expo-sensors';
import Gyroscope from './gyroscope'
import Magnetometer from './magnentometer';
import Location from './loaction';
import SubTitle from './fonts/fonts_acce';

export default function App() {
    const [data, setData] = useState({});
  
    useEffect(() => {
      _toggle();
    }, []);
  
    useEffect(() => {
      return () => {
        _unsubscribe();
      };
    }, []);
  
    const _toggle = () => {
      if (App._subscription) {
        _unsubscribe();
      } else {
        _subscribe();
      }
    };
  
    const _slow = () => {
      Accelerometer.setUpdateInterval(1000);
    };
  
    const _fast = () => {
      Accelerometer.setUpdateInterval(16);
    };
  
    const _subscribe = () => {
      App._subscription = Accelerometer.addListener(accelerometerData => {
        setData(accelerometerData);
      });
    };
  
    const _unsubscribe = () => {
      App._subscription && App._subscription.remove();
      App._subscription = null;
    };
  
    let { x, y, z } = data;
  return (

    <View style={styles.sensor} >
      <SubTitle>Accelerometer</SubTitle>

      <Text style={styles.text}>x: {round(x)} y: {round(y)} z: {round(z)}
</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={_toggle} style={styles.button}>
          <Text>Toggle</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_slow} style={[styles.button, styles.middleButton]}>
          <Text>Slow</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_fast} style={styles.button}>
          <Text>Fast</Text>
        </TouchableOpacity>
      </View>
      <Gyroscope/>
      <Magnetometer/>
      <Location/>
    </View>
  );
} 


  
  function round(n) {
    if (!n) {
      return 0;
    }
  
    return Math.floor(n * 100) / 100;
  }

  const styles = StyleSheet.create({
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'stretch',
      marginTop: 15,
    },
    button: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#C4C4C4',
      padding: 10,
    },
    middleButton: {
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderColor: '#ccc',
    },
    sensor: {
      flex:1,
      padding:10,
      paddingHorizontal: 10,
      backgroundColor:'#FFFFFF'
    },
    text: {
      textAlign: 'center',
      color:'#000000',
      fontSize:20,
    }
  });