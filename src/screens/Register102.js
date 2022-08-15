import React from 'react'
import {StatusBar, Text,View, SafeAreaView} from 'react-native'

//components
import Location from '../components/Location'
import styles from '../components/Text'
import TextInput from '../components/TextInput'
import PasswordInput from '../components/PasswordInput'

export const Register = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1, paddingHorizontal: 46}}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'white'}/>
        <View>
            <Location/>
        </View>
        <View>
            <Text style={styles.mtext}>
                {'Getting Started'}
            </Text>
            <Text style={styles.stext}>
                {'Create an account to continue!'}
            </Text>
        </View>
        <View>
            <TextInput label={'Email'} icon={require('../assets/mail.png')} placeholder={'Enter an email'}/>
            <TextInput label={'Username'} icon={require('../assets/Avatar.png')} placeholder={'Enter an username'}/>
            <PasswordInput label={'Password'} icon={require('../assets/Lock.png')} placeholder={'Enter a password'}/>
        </View>
    </SafeAreaView>
  )
}
