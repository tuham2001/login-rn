import React from 'react'
import { useDispatch, } from 'react-redux'
import { logout } from '../../redux/userSlice'
import Background from '../../components/Background'
import Header from '../../components/Header'
import Button from '../../components/Button'
import { logoutThunk } from '../../redux/user/userThunk'
import { logoutRedux } from '../../redux/user/userRedux'

export default function Dashboard({ navigation }) {
  const dispatch = useDispatch()
  const onLogoutPressed = () => {
    dispatch(
      logoutThunk({})
    )
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
