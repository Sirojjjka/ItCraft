import React, {useState, useEffect} from 'react';
import Card from './Card';
import styled from 'styled-components';
import {View, ScrollView, TextInput, Text  } from 'react-native';

const Cards = ({ users, navigation, posts }) => {
  let [search, setSearch] = useState("");
  let [filtered, setFilter] = useState([]);

  useEffect(()=>{
    setFilter(
    users.filter(item=>{
      return item.name.toLowerCase().includes(search.toLowerCase());
    })
  )&&
  setFilter(
    users.filter(item=>{
      return item.email.toLowerCase().includes(search.toLowerCase());
    })
  )
  }, [search, users])

  return <View> 
    <Text style={{position:'absolute', top:36, left:16, fontSize:16, lineHeight:24 }}>Autors</Text>
    <Input placeholder=' Search' onChangeText={text => setSearch(text)} value={search}/>
    <Box>
    {filtered.map(user => <Card user={user} key = {user.id} navigation = {navigation} posts = {posts} users={users} />)}
    </Box>
  </View>
}


const Box = styled.ScrollView`
margin-top:156px;
`;

const Input = styled.TextInput`
position:absolute;
width:328px;
height:40px;
background-color:#dcdcdc;
box-shadow: 0px 4px 8px rgba(62, 38, 42, 0.24);
border-radius: 4px;
left:16px;
right:16px;
top:88px;
`;

export default Cards;
