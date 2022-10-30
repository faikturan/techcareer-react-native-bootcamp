import React from 'react'
import { Image } from 'react-native';

function Header() {
  return (
    <Image
    source={require('../assets/logo.png')}
    style={{ transform: [{ scale: 0.25 }]}} />
  )
}

export default Header;