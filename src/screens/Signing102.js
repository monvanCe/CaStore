import React from 'react'
import { StatusBar, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

//components
import Location from '../components/Location'
import styles from '../components/Text'

export const Signing = () => {
    return (
        <SafeAreaView>

            <StatusBar barStyle="dark-content" backgroundColor={'transparent'}/> 

            <View>

                <Location/>

                <Text style={[styles.mtext, {}]}>
                    {"Let's Sign You In"}
                </Text>

                <Text style={[styles.stext,{}]}>
                    {"Welcome back, you'have been missed!"}
                </Text>

            </View>

        </SafeAreaView>
    )
}   