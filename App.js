import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Screens/HomeScreen';
import Donation from './Screens/Donation';
import Register from './Screens/Register';

import * as firebase from "firebase";
import { firebaseConfig } from "./config";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/*DrawerNavigation*/}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home-outline' : 'home';
            } else if (route.name == 'Donation') {
              iconName = focused ? 'card-outline' : 'card';
            } else if (route.name == 'Register') {
              iconName = focused ? 'add-circle-outline' : 'add-circle';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        //add tab bar options for active/inactive tint color
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'brown',
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Donation" component={Donation} />
        <Tab.Screen name="Register" component={Register} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
