import React, {useState} from 'react'
import {Text, View, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native'

export default ({label,icon,placeholder}) => {
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility)};
  
  return (
    <View>
        <Text style={{fontSize:12, fontWeight: '500', color: '#8F92A1'}}>
            {label}
        </Text>
        <View style={{flexDirection: 'row', paddingTop:15}}>
            <Image style={{height:24, width: 24}} source={icon}/>
            <TextInput
                placeholderTextColor='#a8acbf'
                style={styles.input}
                name="password"
                placeholder={placeholder}
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="newPassword"
                secureTextEntry={passwordVisibility}
                value={password}
                enablesReturnKeyAutomatically
                onChangeText={setPassword}
            />
            <TouchableOpacity 
                style={{position: 'absolute', 
                right:0, 
                bottom:0}} 
                onPress={handlePasswordVisibility}>
                    <Image 
                    style={{height:24,width:24}} 
                    source={require('../assets/Eye.png')}/>
            </TouchableOpacity>
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