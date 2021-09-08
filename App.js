import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AboutUs from './src/AboutUs';
import Home from './src/Home';
import Settingss from './src/Settingss';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About Us" component={AboutUs} />
        <Drawer.Screen name="Settings" component={Settingss} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}