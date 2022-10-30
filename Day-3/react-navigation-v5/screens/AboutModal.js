import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

class AboutModal extends Component {
    render() {
      const { goBack } = this.props.navigation;
        return (
       <View style={styles.container}>
        <Text style={styles.title}>About Modal!</Text>
        <Button
        title="Close"
        onPress={() => goBack()} />
       </View>
        );
    }
}


const styles = StyleSheet.create({
   container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
      fontSize: 34
    }
});

export default AboutModal;