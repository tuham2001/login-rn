import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import Background from '../../components/Background'
import Header from '../../components/Header'
import Button from '../../components/Button'
import Logo from '../../components/Logo'
import TextInput from '../../components/TextInput'
import { login } from '../../redux/user/userThunk'
export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch()
  const validationSchema = yup.object().shape({
    username: yup.string().required("Username is not empty").min(2, "Password longer than 2 characters"),
    password: yup.string().min(5).required("Password is not empty").min(6, "Password longer than 6 characters"),
  });
  const { values, handleChange, handleBlur, handleSubmit, touched, errors, setFieldValue } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: () => {
      dispatch(
        login({
          name: values.username,
          password: values.password,
          loggedIn: true,
        })
      )
    },
    validationSchema,
  });
  return (
    <Background>
      <Logo />
      <Header>Welcome back.</Header>
      <TextInput
        label="name"
        placeholder="Name"
        value={values.username}
        onChangeText={handleChange('username')}
        autoCapitalize="none"
        autoCompleteType="name"
        errorText={errors.username}
        onBlur={handleBlur('username')}
        touched={touched.username}
      />
      <TextInput
        label="password"
        placeholder="Password"
        returnKeyType="done"
        value={values.password}
        onChangeText={handleChange('password')}
        secureTextEntry
        errorText={errors.password}
        onBlur={handleBlur('password')}
        touched={touched.password}
      />
      <Button title='Submit' mode="contained" onPress={handleSubmit}>
        Login
      </Button>
    </Background>
  )
}
