
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';

export default  ({ text, onPress, icon }) => {
    return (
        <TouchableOpacity style= {{alignItems:'center'}} onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
                <Image
                    style={{
                        marginTop: '-4.5%',
                        marginLeft: '90%',
                        width: 22.14,
                        height: 8.99,
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
        backgroundColor: '#FFDB47',
        width: 305,
        height: 44,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 12,
        textAlign: 'center',
        letterSpacing: 1,
    }
});