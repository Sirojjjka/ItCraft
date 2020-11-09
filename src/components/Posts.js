import React,{ useState, useEffect } from 'react';
import { View, ScrollView, TextInput, Text, StyleSheet, Image } from 'react-native';
import styled from 'styled-components';
import Post from './Post';

const Cards =  ({ posts, user }) => {
  let [search, setSearch] = useState("");
  let [filtered, setFilter] = useState([]);

  useEffect(()=>{
    setFilter(
    posts.filter(item=>{
      return item.title.toLowerCase().includes(search.toLowerCase());
    })
  )&
  setFilter(
    posts.filter(item=>{
      return item.body.toLowerCase().includes(search.toLowerCase());
    })
  )
  }, [search, posts])

  return <View>
   <Text style={{position:'absolute', top:36, left:16, fontSize:16, lineHeight:24 }}>{user.name} Posts</Text>
      <View >

      <Input placeholder='       Search' onChangeText={e=>setSearch(e)} value={search}/>
      <Image
        source={require('../images/Search.png')}
        style={styles.ImageStyle}
    />
      </View>
        <Box>
          {filtered.map(post=><Post post={post} key= {post.id} user={user} />)}
        </Box>
        </View>
}

const styles = StyleSheet.create({
ImageStyle: {
    position:'absolute',
    height: 17.5,
    width: 17.5,
    top:100,
    left:20
}
})

const Input = styled.TextInput`
position:absolute;
left:16px;
right:16px;
top:88px;
width:328px;
height:40px;
background-color:#dcdcdc;
box-shadow: 0px 4px 8px rgba(62, 38, 42, 0.24);
border-radius: 4px;
`;
const Box = styled.ScrollView`
margin-top:150px;
`;

export default Cards
