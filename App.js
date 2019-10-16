import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ShowResult from './src/screens/ShowResult';
import TTest from './src/screens/TTest';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Search: ShowResult,
    tt:TTest,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'My First App for searching food',
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

export default createAppContainer(navigator);

