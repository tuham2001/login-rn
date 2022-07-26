import React from 'react'
import { Image, View } from 'react-native'
import { StyleSheet } from 'react-native'
import { theme } from '../core/theme'

export default function Loading() {
  return (
    // <View style={styles.bgLoading}>
    <Image style={styles.bgLoading} source={require('../assets/loading.gif')} alt='' />
    // </View>
  )
}
const styles = StyleSheet.create({
  bgLoading: {
    backgroundColor: 'white',
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 9,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
