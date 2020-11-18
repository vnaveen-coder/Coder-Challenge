import { createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import SearchScreens from './src/screens/SearchScreen';
import accelerometer from './src/screens/accelerometer';
import gyroscope from './src/screens/gyroscope';
import magnentometer from './src/screens/magnentometer';
import location from './src/screens/loaction';
import font from './src/screens/fonts/fonts_acce';
import fontx from './src/screens/fonts/font_gyro';
import fontz from './src/screens/fonts/font_magneo';

const navigator = createStackNavigator({
   Search: SearchScreens,
   myacceler: accelerometer,
   gyro: gyroscope,
   magne: magnentometer,
   fonte: font,
   fontxy:fontx,
   fontxz: fontz,
   loco:location,
}, {
  initialRouteName:'myacceler',
  defaultNavigationOptions: {
    title: "IMU's Sensors Data"
  }
}
);

export default createAppContainer(navigator);