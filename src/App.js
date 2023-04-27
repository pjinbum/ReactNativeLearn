import React from 'react'
import  { StatusBar }  from 'react-native'
import styled from 'styled-components/native'
import User from './components/User'
import {UserProvider} from './context/ContextUser'
import Input from './components/Input'



const Container = styled.SafeAreaView`
 flex:1;
 background-color: #fff;
 justify-content: center;
 align-items: center; 
 `

const App = () => {
  return (
    <UserProvider>

       <Container>
          <StatusBar barStyle='light-content'></StatusBar>
          <User></User>
          <Input></Input>
       </Container>

    </UserProvider>
  
  )
}

export default App