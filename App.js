import { createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import accelerometer from './src/screens/accelerometer';

const navigator = createStackNavigator({
   myacceler: accelerometer
}, {
  initialRouteName:'myacceler',
  defaultNavigationOptions: {
    title: "IMU's Sensors Data"
  }
}
);

export default createAppContainer(navigator);