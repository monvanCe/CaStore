
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';

export default  ({ text, onPress, icon }) => {
    return (
        <TouchableOpacity style= {{alignItems:'center', justifyContent: 'center'}} onPress={onPress}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
                <Image
                    style={{
                        marginTop: '-7%',
                        marginLeft: '0.5%',
                        width: 24,
                        height: 24,
                        resizeMode: 'stretch',
                    }}
                    source={icon}
                />
            </View>
        </TouchableOpacity>
    );
}
 
const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#0002FC',
        width: 305,
        height: 44,
    },
    buttonText: {
        color: 'white',
        //fontWeight: '500',
        fontSize: 14,
        textAlign: 'center',
        letterSpacing: -0.8,
    }
});