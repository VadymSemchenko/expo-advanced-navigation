import React, { Component } from 'react';
import { View, Text } from 'react-native';

class WelcomeScreen extends Component {
    render() {
        console.log('WELCOME');
        return (
            <View>
                <Text>
                    WelcomeScreen
                </Text>
            </View>
        );
    }
};

export default WelcomeScreen;