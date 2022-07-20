import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginThunk } from './userSlice'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { nameValidator } from '../helpers/nameValidator'
import { passwordValidator } from '../helpers/passwordValidator'
export default function LoginScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const dispatch = useDispatch()
  const onLoginPressed = () => {
    const nameError = nameValidator(name.value)
    const passwordError = passwordValidator(password.value)
    if (nameError || passwordError) {
      setName({ ...name, error: nameError })
      setPassword({ ...password, error: passwordError })
      return
    }
    dispatch(
      loginThunk({
        name: name.value,
        password: password.value,
        loggedIn: true,
      })
    )
    if (name.value && password.value && name.value === 'pro' && password.value === '123123') {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Dashboard' }],
      })
    } else {
      alert('Name or password incorrect')
    }
  }

  return (
    <Background>
      <Header>Welcome back.</Header>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
        autoCapitalize="none"
        autoCompleteType="name"
        textContentType="nameAddress"
        keyboardType="name-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
    </Background>
  )
}
