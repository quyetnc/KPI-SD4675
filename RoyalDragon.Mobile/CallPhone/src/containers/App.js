// In App.js in a new project
import React, { Component } from 'react';
import { View, Text, Platform, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerContainer from './drawer/DrawerContainer';
import HomeContainer from './home/HomeContainer';
import LoginContainer from './login/LoginContainer';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();
const Drawers = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContainer {...props} />}>
      <Drawer.Screen name="Drawer" component={HomeContainer} />
    </Drawer.Navigator>
  );
};

//Drawer navigation
class RootStack extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() { }

  render() {
    return (
        <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}>
          <Stack.Screen name="Login" component={LoginContainer} options={{}} />       
          <Stack.Screen name="Home" component={Drawer} options={{}} />

        </Stack.Navigator>
        <AlertAnimated />
      </NavigationContainer>
    );
  }
}

export default RootStack;
