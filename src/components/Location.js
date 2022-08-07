import React from 'react'
import { View,Image,Text } from 'react-native'

export default () => {
    return (
        <View style={{flexDirection: 'row',}} >
            <Image
                style={{}}
                source={require('../assets/Location.png')}
            />
            <Text style={{fontSize:12, fontWeight: '700', alignItems: 'center'}}>Hanoi, Vietnam</Text>
        </View>
    )
}