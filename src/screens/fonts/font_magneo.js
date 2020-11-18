import React from 'react';
import { Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

export default props => {
  let [fontsLoaded] = useFonts({
    'RibeyeMarrow': require('./../../../assets/fonts/RibeyeMarrow-Regular.otf'),
  });

  
    if (!fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View>
          <Text style={{fontFamily:'RibeyeMarrow',marginTop: 30,
    paddingVertical: 2,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#FFE05D",
    color: "#20232a",
    textAlign: "center",
    fontSize: 28
      }}>Magnetometer</Text>
        </View>
      );
}
};