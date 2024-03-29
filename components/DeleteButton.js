import React from 'react';
import { Text, StyleSheet, TouchableOpacity} from 'react-native';

const DeleteButton =({onPress,}) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.button}>
            <Text style={styles.text}> 
                삭제
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width : 60, 
        height : 60, 
        backgroundColor: '#FE5746',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#FFFFFF'
    }
})

export default DeleteButton;