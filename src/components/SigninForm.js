import React, {useState} from 'react'
import {TextInput, StyleSheet, SafeAreaView, Image, View, TouchableOpacity, Text} from 'react-native'


export default() => {

    const [username, onChangeText] = React.useState(null);

    const [password, setPassword] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye');

    const handlePasswordVisibility = () => {
        if (rightIcon === 'eye') {
          setRightIcon('eye-off');
          setPasswordVisibility(!passwordVisibility);
        } else if (rightIcon === 'eye-off') {
          setRightIcon('eye');
          setPasswordVisibility(!passwordVisibility);
        }
      };
    
    return (
        passwordVisibility,
        rightIcon,
        handlePasswordVisibility,
        <SafeAreaView>
            <View>
                <Text style={{paddingBottom:20, fontSize:12, fontWeight: '500', color: '#8F92A1'}}>
                    {'Username or Email'}
                </Text>

                <View style={{flexDirection: 'row' }}>
                    <Image style={{height:24, width: 24}} source={require('../assets/Avatar.png')} />
                    <TextInput
                        placeholderTextColor='#a8acbf'
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={username}
                        placeholder="Username or Email"
                    />
                </View>
            </View>

            <View style={{
                opacity: 0.2,
                marginVertical: 8,
                borderBottomColor: '#8F92A1',
                borderBottomWidth: StyleSheet.hairlineWidth,}}/>

            <View>
                <Text style={{paddingTop:35, fontSize:12, fontWeight: '500', color: '#8F92A1'}}>
                    {'Password'}
                </Text>
                <View style={{flexDirection: 'row', paddingTop:20}}>
                    <Image style={{height:24, width: 24}} source={require('../assets/Lock.png')}/>
                    <TextInput
                        placeholderTextColor='#a8acbf'
                        style={styles.input}
                        name="password"
                        placeholder="Enter password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        textContentType="newPassword"
                        secureTextEntry={passwordVisibility}
                        value={password}
                        enablesReturnKeyAutomatically
                        onChangeText={text => setPassword(text)}
                    />
                    <TouchableOpacity 
                        name={rightIcon} 
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

            <View style={{
                opacity: 0.2,
                marginVertical: 8,
                borderBottomColor: '#8F92A1',
                borderBottomWidth: StyleSheet.hairlineWidth,}}/>
        </SafeAreaView>
    );
};

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
