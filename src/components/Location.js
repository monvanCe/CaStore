import React from 'react'

export default () => {
    return (
        <View style={{flexDirection: 'row',}} >
            <Image
                style={{}}
                source={require('../assets/Location.png')}
            />
            <Text style={{fontSize:12, fontWeight: '700',}}>Hanoi, Vietnam</Text>
        </View>
    )
}