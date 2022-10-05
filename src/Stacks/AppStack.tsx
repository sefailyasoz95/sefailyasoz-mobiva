import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import HomeScreen from '../Screens/App/HomeScreen';
import {AppStackParams} from '../Constants/AppStackParams';

const App = createStackNavigator<AppStackParams>();
const options: StackNavigationOptions = {
  headerShown: false,
};
const AppStack = () => {
  return (
    <App.Navigator screenOptions={options} initialRouteName="HomeScreen">
      <App.Screen name="HomeScreen" component={HomeScreen} />
    </App.Navigator>
  );
};

export default AppStack;
