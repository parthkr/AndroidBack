import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    BackHandler,
    Image
} from 'react-native'
import { Actions } from 'react-native-router-flux';

export default class SecondScreen extends Component {

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
                <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 30 }}>SCREEN</Text>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 30 }}>2</Text>
                </View>
                <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'flex-end' }}>
                    <TouchableOpacity onPress={() => Actions.thirdScreen()}>
                        <Text style={{ color: 'black', fontSize: 20 }}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}