import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import styled from 'styled-components';

const Post = ({ post, user, filtered }) => {
     if(post.userId==user.id) {return <Box>
       <View>
      <Text style={{fontSize:16, marginTop:12, marginLeft:16 }}>{post.title}</Text>
      <Text style={{fontSize:12, marginTop:8, marginLeft:16 }}>{post.body}</Text>
      </View>
      </Box>
} else { return null }
  };

  export default Post;

  const Box = styled.View`
  margin-bottom:24px;
  margin-left:13px;
  height:160px;
  width:335px;
  border-width: 1px;
  border-radius: 4px;
  border-color: #ddd;
  `;