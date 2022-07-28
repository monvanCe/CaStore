import React from 'react'
import { View, StatusBar, Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './components/Text'
import Carousel from './components/Carousel101'

export default () => {
    return (
        <SafeAreaView>

            <StatusBar barStyle="dark-content" backgroundColor={'transparent'}/>

            <View style={{ flex: 1 }}>
                <Carousel/>

                <Text style={styles.btext}>
                    {'Welcome to CaStore !'}
                </Text>

                <Text style={styles.itext}>
                    {'With long experience in the audio industry,'}
                </Text>

                <Text style={styles.itext}>
                    {'we create the best quality products'}
                </Text>
            </View>
                
        </SafeAreaView>
    )
}
