import React, { Component } from 'react'
import {
    Text, View, StyleSheet, TouchableOpacity,
    TextInput
} from 'react-native'
import Button from './Commons/button'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Header',
            text: ''
        }
    }
    render() {

        return (
            <View style={styles.view}>
                <Text style={styles.header}>{this.state.title}</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='enter your Text'
                    value={this.state.text}
                    onChangeText={(text) => { this.setState({ text }) }}
                />
                <Button
                    onPress={() => {
                        if (this.state.text == '') {
                            return null
                        }
                        return this.setState({ title: this.state.text })
                    }}
                    title='PressME'
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor:'#bac9e0',
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        
        marginBottom:250,
        
    },
    textInput:{
        borderWidth:1,
        borderRadius:5,
        marginBottom:15,
        width:200,


    }

})