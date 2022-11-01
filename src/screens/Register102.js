import React, {useState} from 'react'
import {StatusBar, Text,View, SafeAreaView, Button} from 'react-native'

//components
import Location from '../components/Location'
import styles from '../components/Text'
import TextInput from '../components/TextInput'
import PasswordInput from '../components/PasswordInput'
import { useSelector } from 'react-redux'
import { dataSelector } from '../redux/selector'

export const Register = () => {
    const data = useSelector(dataSelector)

    const [text, onChangeText] = useState(null);

    const countincrease = () => {
        
    }

    const countdecrease = () => {
        
    }
    
    const countupdate = () => {
        
    }
    
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1, paddingHorizontal: 35}}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'white'}/>
        <View style={{flex:1}}>
            <Location/>
        </View>
        <View style={{flex:1}}>
            <Text style={styles.mtext}>
                {'Getting Started'}
            </Text>
            <Text style={styles.stext}>
                {'Create an account to continue!'}
            </Text>
        </View>
        <View style={{justifyContent: 'space-between', flex: 2}}>
            <TextInput label={'Email'} icon={require('../assets/mail.png')} placeholder={'Enter an email'} text={text} onChangeText={onChangeText} />
            <TextInput label={'Username'} icon={require('../assets/Avatar.png')} placeholder={'Enter an username'}/>
            <PasswordInput label={'Password'} icon={require('../assets/Lock.png')} placeholder={'Enter a password'}/>
        </View>
        <View style={{flex:1, justifyContent: 'center'}}>
            <Button title='increase' onPress={countincrease}/>
            <Text style={{textAlign: 'center', fontSize: 25}}>
                {data}
            </Text>
            <Button title='decrease' onPress={countdecrease}/>
            <Button title='update' onPress={countupdate}/>
        </View>
    </SafeAreaView>
  )
}
