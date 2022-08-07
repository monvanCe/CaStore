import React from 'react'
import { View,Image,Text } from 'react-native'

export default () => {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center'}} >
            <Image
                style={{width: 24, height: 24}}
                source={require('../assets/Location.png')}
            />
            <Text style={{fontSize:12, fontWeight: '700', color: 'black', justifyContent: 'center', marginLeft: '1.5%' }}>Hanoi, Vietnam</Text>
        </View>
    )
}