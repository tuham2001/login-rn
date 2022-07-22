import React from 'react'
import { useDispatch, } from 'react-redux'
import Background from '../../components/Background'
import Header from '../../components/Header'
import Button from '../../components/Button'
import Logo from '../../components/Logo'
import { logout } from '../../redux/user/userThunk'

export default function Dashboard({ navigation }) {
  const dispatch = useDispatch()
  const onLogoutPressed = () => {
    dispatch(
      logout({})
    )
  }
  return (
    <Background>
      <Logo />
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
