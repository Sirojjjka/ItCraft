import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components';


const Card = ({ user, navigation, posts, users }) => (
  <TouchableOpacity onPress={()=> {navigation.navigate("Image",{posts, user})
  }}>
    <Box>
      <Image style = {{ marginLeft:16 }} source={require('../images/Avatar.png')}/>
      <View style = {{ marginLeft:16 }} >
      <Text style = {{ fontSize:16 }} >{user.name}</Text>
      <Text style = {{ marginTop:2, fontSize:12 }} >{user.email}</Text>
      </View>
      <Text style = {{ position:'absolute', top:5, right:55 }} >posts</Text>
      <Image style = {{ position:'absolute', top:7, right:23 }} source={require('../images/Vector.png')}/>
      </Box>
  </TouchableOpacity>
);



  const Box = styled.View`
  display:flex;
  flex-direction:row;
  height:72px
  `;
  export default Card;
