import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import Cards from './Cards'

const DataFetch = ({navigation}) => {
  
  let [users,setUsers] = useState([]);
  let [posts,setPosts] = useState([]);

  const urlUser = 'https://jsonplaceholder.typicode.com/users';
  const urlPost = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(async () => {
    await axios.get(urlUser).then(({ data }) => 
      setUsers(data)
    )
  }, [])

  useEffect(async () => {
    await axios.get(urlPost).then(({data}) => {
      setPosts(data)
    })
  }, [])

 
  return(
    <Cards users={users} navigation = {navigation} posts = {posts}/>
  )
    }
  

export default DataFetch;
