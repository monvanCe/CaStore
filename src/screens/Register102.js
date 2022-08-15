import React from 'react'
import {StatusBar, Text,View, SafeAreaView} from 'react-native'

//components
import Location from '../components/Location'
import Styles from '../components/Text'

export const Register = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1, paddingHorizontal: 46}}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'white'}/>
        <View>
            <Location/>
        </View>
        <View>
            <Text style={Styles.mtext}>
                {'Getting Started'}
            </Text>
            <Text style={Styles.stext}>
                {'Create an account to continue!'}
            </Text>
        </View>
        <View>
            
        </View>
    </SafeAreaView>
  )
}
