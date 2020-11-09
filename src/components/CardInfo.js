import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';
import axios from 'axios';
import Posts from './Posts';

export default ({route}) => {
  return(
    <View>
    <Posts posts={route.params.posts} user={route.params.user}/>
    </View>
  )
}