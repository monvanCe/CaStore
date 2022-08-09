import React from 'react'
import { StatusBar, View, Text, SafeAreaView, StyleSheet } from 'react-native'


//components
import ButtonFB from '../components/ButtonFB'
import Button from '../components/Button2'
import Location from '../components/Location'
import styles from '../components/Text'
import Form from '../components/SigninForm'

export const Signing = () => {
    return (
        <SafeAreaView style={{flex: 1}}>

            <StatusBar barStyle="dark-content" backgroundColor={'transparent'}/> 

            <View style={{paddingHorizontal:46, marginTop: '4.5%', flex:3.1}}>

                <Location style={{ }} />

                <View style={{flex: 0.19}}/>

                <Text style={[styles.mtext, {}]}>
                    {"Let's Sign You In"}
                </Text>

                <View style={{flex:0.075}}/>

                <Text style={[styles.stext,{}]}>
                    {"Welcome back, you'have been missed!"}
                </Text>

                <View style={{flex:0.15}}/>

                <Form/>
            </View>

            <View style={{flex:1}}>

                <Button text='SIGN IN' icon={require('../assets/SignIn.png')}/>

                <Text style={{paddingHorizontal:46, textAlign: 'center', fontSize:12, fontWeight: '500', color: '#8F92A1', paddingTop: 20}}>
                    {"Don't have an account?"}
                    <Text style={{color: 'black'}}>
                        {'Sign Up'}
                    </Text>
                </Text>

                <View style={{
                opacity: 0.2,
                paddingTop: 21,
                marginVertical: 8,
                borderBottomColor: '#8F92A1',
                borderBottomWidth: StyleSheet.hairlineWidth,}}/>

                <ButtonFB text='Connect with Facebook' icon={require('../assets/FB.png')}/>

            </View>

        </SafeAreaView>
    )
}   