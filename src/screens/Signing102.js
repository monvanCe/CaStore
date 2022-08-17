import React from 'react'
import { StatusBar, View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native'


//components
import ButtonFB from '../components/ButtonFB'
import Button from '../components/Button2'
import Location from '../components/Location'
import styles from '../components/Text'
import Form from '../components/SigninForm'

export const Signing = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <StatusBar barStyle="dark-content" backgroundColor={'white'}/> 
            <View style={{marginTop: '5.5%', flex:3.2, paddingHorizontal:46, }}>
                <View style={{flex:1}}>
                    <Location/>
                </View>
                <View style={{flex:1.3}}>
                        <Text style={[styles.mtext, {}]}>
                            {"Let's Sign You In"}
                        </Text>
                        <Text style={[styles.stext, {paddingTop: '3%'}]}>
                            {"Welcome back, you'have been missed!"}
                        </Text>
                </View>
                <View style={{flex:4}}>
                    <Form/>
                </View>
            </View>
            <View style={{flex:1}}>
                <View style={{flex:1}}>
                    <Button text='SIGN IN' icon={require('../assets/SignIn.png')}/>
                </View>
                <View style={{flex:0.8}}/>
                <View style={{flex:1, flexDirection:'row', paddingHorizontal:46, justifyContent: 'center' }}>
                    <Text style={{
                        textAlign: 'center', 
                        fontSize:12, fontWeight: '500',
                        color: '#8F92A1'}}>
                        {"Don't have an account?"}
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={{color: 'black', fontSize: 12, fontWeight: '500'}}>
                            {' Sign Up'}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    opacity: 0.2,
                    marginVertical: 8,
                    borderBottomColor: '#8F92A1',
                    borderBottomWidth: StyleSheet.hairlineWidth,}}/>
                <View style={{flex:2, alignItems: 'center', justifyContent: 'center'}}>
                    <ButtonFB text='Connect with Facebook' icon={require('../assets/FB.png')}/>
                </View>
            </View>
        </SafeAreaView>
    )
}   