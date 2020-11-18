import React,{Component} from 'react';
import {View,Image, Text,StyleSheet,Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import GpsLoc from './fonts/font_gps';

const latitudeDelta=0.025
const longitudeDelta=0.025
export default class App extends Component{


    state={
        region:{
            latitudeDelta,
            longitudeDelta,
            latitude:17.6868,
            longitude:83.2185,
            
        }
    }
    onChangeValue=region =>{
        // alert(JSON.stringify(region))
        this.setState({
            region
        })
    }


    render(){
        return(
            <View style={styles.sensor}>
                <GpsLoc/>
                 <MapView
                 style={styles.mapStyle}
                 initialRegion = {this.state.region} 
                 showsUserLocation={true}
                 onRegionChangeComplete={this.onChangeValue}
                 />
                 <View style={{top:'50%',left:'50%',marginLeft:-24,marginTop:-48,position:'absolute'}}>
               {/* <Image style={{height:48,width:48}} source={require('/Users/naveen/React-Native/imudata/assets/pin.png')}/>  */}
     
                 </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    mapStyle: {
        flex:1,
      width: Dimensions.get('window').width/1.1,
      height: Dimensions.get('window').height
    },
    sensor: {
        flex:1,
        padding:19,
        paddingHorizontal: 9,
        backgroundColor:'#FFFFFF'
      },
    
  });