import React from 'react'
import { useDispatch, } from 'react-redux'
import { logout } from './userSlice'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'

export default function Dashboard({ navigation }) {
  const dispatch = useDispatch()
  const onLogoutPressed = () => {
    dispatch(
      logout({})
    )
    navigation.reset({
      index: 0,
      routes: [{ name: 'LoginScreen' }],
    })
  }
  return (
    <Background>
      <Header>Let’s start</Header>
      <Button
        mode="outlined"
        onPress={onLogoutPressed}
      >
        Logout
      </Button>
    </Background>
  )
}
