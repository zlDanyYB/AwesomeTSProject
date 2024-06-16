import { StyleSheet } from "react-native";


export const globalStyles = StyleSheet.create({
    
    centerContariner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6495ed'
    },
    title:{
        fontSize: 80,
        fontWeight: '300',
        color: '#daa520'
    },
    fab:{
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 20,
    }
})