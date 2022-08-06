import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import Location from './components/Location'

export default function Signing() {
    return (
        
        <SafeAreaView>
            <StatusBar barStyle="dark-content" backgroundColor={'transparent'}/>
                
            <Location/>
        </SafeAreaView>
    )
}