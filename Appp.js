import React, { useState ,useEffect} from 'react'
import { View, Text } from 'react-native'
import Geolocation from '@react-native-community/geolocation'

const Appp = () => {

Geolocation.getCurrentPosition(data=>console.log(data))

    console.log("Geolocation")
    return (
        <View>
            <Text>hello</Text>
        </View>
    )
}

export default Appp
