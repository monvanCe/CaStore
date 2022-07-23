import React from 'react'
import { View, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Text1 from './components/Text'
// import Statusbar from './components/Statusbar'

export default () => {
	return (
        <SafeAreaView>

            <StatusBar barStyle="dark-content" backgroundColor="transparent" />

            <View>
                <Text1 value= {'status bar deneme'}/>
            </View>

        </SafeAreaView>
	) 
}
