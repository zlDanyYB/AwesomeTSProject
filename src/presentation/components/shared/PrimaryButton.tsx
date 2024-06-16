import React from 'react'
import { Pressable, Text, Platform, StyleSheet } from 'react-native'


interface Props{
    label: string;
    onPress?: () => void;
    onLongPress?: () => void;
}

export const PrimaryButton = ({ label, onPress, onLongPress}:Props) => {

  return (
    <Pressable
            onPress={()=> onPress && onPress ()}   
            onLongPress={()=> onLongPress && onLongPress ()}
            style={({pressed}) => [
                styles.button,
                pressed && styles.buttonPressed
            ]}
        >
            <Text style={{
                color:'#4169e1'
            }}> { label } </Text>
            </Pressable>
  )
}


const styles= StyleSheet.create({
    
    button: {
        backgroundColor: '#4169e1',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        color: 'white'
    },
    buttonPressed:{
        backgroundColor: '#ff0000'
    }
})