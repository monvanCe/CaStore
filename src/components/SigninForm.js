import React from 'react'
import {TextInput, StyleSheet, SafeAreaView, Image, View, TouchableOpacity, Text} from 'react-native'


export default() => {
    const [username, onChangeText] = React.useState(null);
    const [password, onChangeNumber] = React.useState(null);
    
    return (
        <SafeAreaView>
            <View>
                <Text>
                    Username or Email
                </Text>
                <View style={{flexDirection: 'row' }}>
                    <Image style={{height:24, width: 24}} source={require('../assets/Avatar.png')} />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={username}
                        placeholder="Username or Email"
                    />
                </View>
            </View>

            <View style={{marginVertical: 8,
                borderBottomColor: '#737373',
                borderBottomWidth: StyleSheet.hairlineWidth,}}/>

            <View>
                <Text>
                    Password
                </Text>
                <View style={{flexDirection: 'row'}}>
                    <Image style={{height:24, width: 24}} source={require('../assets/Lock.png')}/>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={password}
                        placeholder="Password"
                        keyboardType="numeric"
                    />
                    <TouchableOpacity style={{position: 'absolute', right:0}}>
                        <Image style={{height:24,width:24}} source={require('../assets/Eye.png')}/>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{marginVertical: 8,
                borderBottomColor: '#737373',
                borderBottomWidth: StyleSheet.hairlineWidth,}}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 24,
        marginRight: 20,
        borderWidth: 0,
        padding: 0,
        fontWeight: '500'
    },
})
