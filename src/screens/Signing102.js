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
        <SafeAreaView>

            <StatusBar barStyle="dark-content" backgroundColor={'transparent'}/> 

            <View style={{paddingHorizontal:46, marginTop: '4.5%'}}>

                <Location style={{ }} />

                <Text style={[styles.mtext, {}]}>
                    {"Let's Sign You In"}
                </Text>

                <Text style={[styles.stext,{}]}>
                    {"Welcome back, you'have been missed!"}
                </Text>

                <Form/>
            </View>

            <View>

                <Button text='SIGN IN' icon={require('../assets/SignIn.png')}/>

                <Text style={{paddingHorizontal:46}}>
                    Don't have an account? Sign up
                </Text>

                <View style={{marginVertical: 8,
                borderBottomColor: '#737373',
                borderBottomWidth: StyleSheet.hairlineWidth,}}/>

                <ButtonFB text='Connect with Facebook' icon={require('../assets/FB.png')}/>

            </View>

        </SafeAreaView>
    )
}   