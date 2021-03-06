//import About from '../screens/about';
import About from '../screens/about';
import React from 'react';
import Header from '../shared/header';
import { createStackNavigator } from 'react-navigation-stack';
const screens = {
    About: {
      screen: About,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => <Header title='Sample App' navigation={navigation} />
        }
      },
    },
  }
// const screens = {
//   About: {
//     screen: About,
//     navigationOptions: {
//       title: 'About GameZone'
//     },
//   },
// }


const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});


export default AboutStack;
/*import React from 'react';
import Header from '../shared/header';
import About from '../screens/about';
import { createStackNavigator } from 'react-navigation-stack';

  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='GameZone' navigation={navigation} />
      }
    },
  },
}
 */