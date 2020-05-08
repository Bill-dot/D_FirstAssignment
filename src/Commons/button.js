import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Button = ({ onPress, title }) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.view}>
                <Text style={styles.text}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    view:{
        borderRadius:2,
        borderWidth:3,
        borderColor:'#0051cc',
        backgroundColor:'white',
        paddingVertical:10,
        paddingHorizontal:15,
        justifyContent:"center",
        alignItems:'center'

    },
    text:{
        color:'#0051cc',
        fontWeight:'bold'
    }


})

export default Button