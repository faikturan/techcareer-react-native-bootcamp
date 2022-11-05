import React from 'react'
import { View, Pressable, Text } from 'react-native'
import styles from "../../styles/";
import UserButton from "../../components/UserButton";

function User({ navigation }) {
  return (
    <View style={styles.userScreenContainer}>
    <UserButton 
        buttonText="Login"
        buttonIcon="account"
        navigation={navigation}
        screenName="Login"
    />

    </View>
  )
}

export default User;