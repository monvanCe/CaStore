import React from 'react';
import {Text, View} from 'react-native';

export default ({value}) => {
    return (
        <View>
            <Text style = {{fontSize:25,fontWeight:'bold',color:'pink'}}>
                {value}
            </Text>
        </View>
    ) 
}