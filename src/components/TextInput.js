import React, {useState} from 'react'
import {Text, View, Image, TextInput, StyleSheet} from 'react-native'

export default ( {label, icon, placeholder} ) => {
    const [text, onChangeText] = useState(null);
    return (
    <View>
        <Text style={{fontSize:12, fontWeight: '500', color: '#8F92A1'}}>
            {label}
        </Text>

        <View style={{flexDirection: 'row',paddingTop:15 }}>
            <Image style={{height:24, width: 24}} source={icon} />
            <TextInput
                placeholderTextColor='#a8acbf'
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder={placeholder}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        color: 'black',
        height: 24,
        marginRight: 20,
        borderWidth: 0,
        padding: 0,
        paddingLeft: 15,
        fontWeight: '500'
    },
})
