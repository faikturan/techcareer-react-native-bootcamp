import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import LoginForm from "./LoginForm";

import FlatListExample from "../components/FlatListExample";

class Login extends Component {
    render() {
        return (
          <View style={styles.container}>
              <Text>Merhaba</Text>
              <FlatListExample />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingVertical: 80
    }
})

export default Login;