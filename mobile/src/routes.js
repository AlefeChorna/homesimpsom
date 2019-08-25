import { 
  createAppContainer, 
  createStackNavigator, 
  createBottomTabNavigator 
} from 'react-navigation';

import Main from './pages/Main';
import Controllers from './pages/Controllers';
import Statistics from './pages/Statistics';
import Notifications from './pages/Notifications';

import { colors } from './styles';
import { fromLeft } from './helpers/transitions';

const Routes = createAppContainer(createStackNavigator(
  {
    Main: createBottomTabNavigator({
      Main,
      Controllers,
      Statistics,
      Notifications
    }, {
      tabBarOptions: {
        showIcon: true,
        showLabel: true,
        activeTintColor: colors.themeColor,
        inactiveTintColor: colors.darkTransparent,
        style: {
          display: true ? 'flex' : 'none',
          backgroundColor: colors.gray,
        }
      }
    }),
    // Routes Switch
  }, {
    initialRouteName: 'Main',
    transitionConfig: () => fromLeft(),
    headerMode: 'none'
  }
));

export default Routes;
