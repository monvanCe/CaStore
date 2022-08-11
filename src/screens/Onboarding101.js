// libraries
import React from 'react'
import { View, StatusBar, Text, Image, SafeAreaView} from 'react-native'


// components
import styles from '../components/Text'
import Button from '../components/Button'

export const Onboarding = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1}}>

            <StatusBar barStyle="dark-content" backgroundColor={'pink'}/>

            <View style={{flex:2, paddingTop: 17}}>
                <Image
                    style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'stretch',
                    }}
                    source={require('../assets/Onboardin101-Carousel2.png')}
                />
            </View>

            <View style={{flex: 0.9, justifyContent: 'space-between', paddingVertical: 40, marginTop: '7%'}}>
                <Text style={[styles.mtext, {textAlign: 'center', paddingTop: 7}]}>
                    {'Welcome to CaStore !'}
                </Text>

                <View style={{paddingBottom: 25}}>
                    <Text style={[styles.stext, {textAlign: 'center'}]}>
                        {'With long experience in the audio industry,'}
                    </Text>

                    <Text style={[styles.stext, {textAlign: 'center',paddingTop: 6}]}>
                        {'we create the best quality products'}
                    </Text>
                </View>

                <Button text='Get Started' icon={require('../assets/LongArrow.png')} onPress={() => navigation.navigate('Signing')} />
            </View>
                
        </SafeAreaView>
    )
}