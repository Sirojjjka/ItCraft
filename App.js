import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import { StyleSheet, Text, View} from 'react-native';
import DataFetch from './src/components/DataFetch';
import CardInfo from './src/components/CardInfo';

const Stack = createStackNavigator();

  export default function App() {
    return (
      <View style = {{ flex:1 }}>
  <NavigationContainer >
  <Stack.Navigator screenOptions={{
  headerShown:false
  }} >
        <Stack.Screen name = 'List' component = {DataFetch} />
        <Stack.Screen name = 'Image' component = {CardInfo} />
        </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }