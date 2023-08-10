import React , {useEffect} from 'react'
import {View , Text , StyleSheet } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {  Feather } from '@expo/vector-icons';
import  order from './order';
import  cart from './cart';
import  reservation from './reservation';
import  profile from './profile';
import  about from './about';

const Tab = createMaterialBottomTabNavigator();

const Home = ({navigation , route}) => {


   return (
      <Tab.Navigator
         initialRouteName="about"
           activeColor="black"
           inactiveColor="white"
           barStyle={{ backgroundColor: 'red' }}
      >
          <Tab.Screen name="About" component={about}
             options={{
               tabBarIcon: ({ color }) => (
                 <Feather name="home" color={color} size={22}  />
               ),
             }}
             />
          <Tab.Screen name="Search" component={order}
             options={{
                tabBarIcon: ({ color }) => (
                  <Feather name="search" color={color} size={22}  />
                ),
              }}
          />
          <Tab.Screen name="Cart" component={cart}
             options={{
                tabBarIcon: ({ color }) => (
                  <Feather name="shopping-cart" color={color} size={22}  />
                ),
              }}
          />
          <Tab.Screen name="Reserve" component={reservation}
             options={{
                tabBarIcon: ({ color }) => (
                  <Feather name="calendar" color={color} size={22}  />
                ),
              }}
          />
          <Tab.Screen name="Profile" component={profile}
             options={{
                tabBarIcon: ({ color }) => (
                  <Feather name="user" color={color} size={22}  />
                ),
              }}
          />
      </Tab.Navigator>
   )
}
styles= StyleSheet.create({
   cont : {
      alignItems : 'center',
      justifyContent : 'center',
      flex : 1
   }
})
export default Home ;