import React from 'react'
import { View, StatusBar, Text, Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

import styles from './components/Text'
import Button from './components/Button'


export default () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView>

            <StatusBar barStyle="dark-content" backgroundColor={'transparent'}/>

            <View>
                <Image
                    style={{
                        marginTop: '4%',
                        width: '100%',
                        height: '63.6%',
                        resizeMode: 'stretch',
                    }}
                    source={require('./assets/Onboardin101-Carousel2.png')}
                />

                <Text style={[styles.mtext, {textAlign: 'center', marginTop: '12%'}]}>
                    {'Welcome to CaStore !'}
                </Text>

                <Text style={[styles.stext, {textAlign: 'center', marginTop: '3%'}]}>
                    {'With long experience in the audio industry,'}
                </Text>

                <Text style={[styles.stext, {textAlign: 'center', marginTop: '0.5%', marginBottom: '8%'}]}>
                    {'we create the best quality products'}
                </Text>

                <Button text='Get Started' icon={require('./assets/LongArrow.png')} onPress= {()=>navigation.navigate("Signing")}/>
            </View>
                
        </SafeAreaView>
    )
}
