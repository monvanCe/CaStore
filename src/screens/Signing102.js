import React from 'react'
import { StatusBar, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

//components
import ButtonFB from '../components/ButtonFB'
import Button from '../components/Button2'
import Location from '../components/Location'
import styles from '../components/Text'

export const Signing = () => {
    return (
        <SafeAreaView>

            <StatusBar barStyle="dark-content" backgroundColor={'transparent'}/> 

            <View style={{paddingHorizontal:20, marginTop: '4.5%'}}>

                <Location style={{ }} />

                <Text style={[styles.mtext, {}]}>
                    {"Let's Sign You In"}
                </Text>

                <Text style={[styles.stext,{}]}>
                    {"Welcome back, you'have been missed!"}
                </Text>

            </View>

            <View>

                <Button text='SIGN IN' icon={require('../assets/SignIn.png')}/>
                <ButtonFB text='Connect with Facebook' icon={require('../assets/FB.png')}/>

            </View>

        </SafeAreaView>
    )
}   