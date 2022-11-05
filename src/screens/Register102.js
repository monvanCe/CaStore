import React, {useState} from 'react'
import {StatusBar, Text,View, SafeAreaView, Button} from 'react-native'

//components
import Location from '../components/Location'
import styles from '../components/Text'
import TextInput from '../components/TextInput'
import PasswordInput from '../components/PasswordInput'

//import redux
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import store from '../redux/store';

import { increment } from '../redux/reducer';
import { decrement } from '../redux/reducer';
import { update } from '../redux/reducer';

export const [text, onChangeText] = useState(null);

export const Register2 = () => {

    const dispatch = useDispatch()
    
    const counter = useSelector(state => state.counter)

    const countincrease = () => {
        dispatch(increment())
    }

    const countdecrease = () => {
        dispatch(decrement())
    }
    
    const countupdate = () => {
        dispatch(update())
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
                {counter}
            </Text>
            <Button title='decrease' onPress={countdecrease}/>
            <Button title='update' onPress={countupdate}/>
        </View>
    </SafeAreaView>
  )
}

export const Register = () => {
    return (
      <Provider store={store}>
          <Register2 />
      </Provider>
    );
  }
