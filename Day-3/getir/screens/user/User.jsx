import React from 'react'
import { View, Pressable, Text } from 'react-native'
import styles from "../../styles/";
import UserButton from "../../components/UserButton";

function User({ navigation }) {
  return (
    <View style={styles.userScreenContainer}>
        <View style={{ marginBottom: 40}}>
            <UserButton
            buttonText="Login"
            buttonIcon="account"
            navigation={navigation}
            screenName="SignIn" />
         

            <UserButton
            buttonText="Address"
            buttonIcon="map-marker-radius"
            navigation={navigation}
            screenName="SignIn" />

            <UserButton
            buttonText="Live Support"
            buttonIcon="chat-processing"
            navigation={navigation}
            screenName="SignIn" />

            <UserButton
            buttonText="Support"
            buttonIcon="help-circle-outline"
            navigation={navigation}
            screenName="SignIn" />
            

        </View>
    </View>
  )
}

export default User