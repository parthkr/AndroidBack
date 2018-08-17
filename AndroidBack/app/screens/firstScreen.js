import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    BackHandler
} from 'react-native'
import { Actions } from 'react-native-router-flux';

export default class FirstScreen extends Component {

    render() {
        return (
            <View style={{ flex: 1, margin: 10 }}>
                <View style={{ flex: 0.9, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 30 }}>SCREEN</Text>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 30 }}>1</Text>
                </View>
                <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'flex-end' }}>
                    <TouchableOpacity onPress={() => Actions.secondScreen()}>
                        <Text style={{ color: 'black', fontSize: 20 }}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}