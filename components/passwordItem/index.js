import React from 'react'
import { Text, StyleSheet, Pressable } from 'react-native'
import * as Clipboard from 'expo-clipboard'


export function PasswordItem({ password, removePassword }) {
    const handleCopy = async () => {
        await Clipboard.setStringAsync(password)
    }

    return (
        <Pressable onPress={handleCopy} onLongPress={() => removePassword(password)} style={styles.item} >
            <Text style={styles.itemText}>{password}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#0e0e0e',
        padding: 14,
        width: '100%',
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemText: {
        color: '#FFF'
    }
});