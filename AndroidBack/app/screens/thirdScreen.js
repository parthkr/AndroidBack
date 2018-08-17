import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    BackHandler,
    Image
} from 'react-native'
import { Actions } from 'react-native-router-flux';

export default class ThirdScreen extends Component {

    render() {
        return (
            <View style={{ flex: 1, margin: 10 }}>
                <View style={{ flex: 0.1, height: 80, width: 80, }}>
                    <TouchableOpacity style={{width:60, height:50}} onPress={() => Actions.pop()}>
                        <Image
                            source={require('../assets/icons/back.png')}
                            style={{ height: 20, width: 20 }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 0.9, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 30 }}>SCREEN</Text>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 30 }}>3</Text>
                </View>
            </View>
        )
    }
}