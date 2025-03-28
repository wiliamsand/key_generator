import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { useState } from "react";
import * as Clipboard from 'expo-clipboard'
import useStorage from '@/hooks/useStorage'

interface ModalPasswordProps {
    password: string,
    handleClose: () => void
}

export default function ModalPassword({ password, handleClose }: ModalPasswordProps) {
    const [message, setMessage] = useState("");
    const { saveItem } = useStorage()

    const showMessage = (msg: string) => {
        setMessage(msg);

        // Esconde a mensagem após 3 segundos
        setTimeout(() => {
            setMessage("");
        }, 3000);
    };

    async function handleCopy() {
        await Clipboard.setStringAsync(password)
        showMessage("Senha copiada!")
    }

    async function handleSavePassword() {
        saveItem('@pass', password)
        showMessage("Senha salva!")
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha gerada</Text>

                {message !== "" && (
                    <View style={styles.toast}>
                        <Text style={styles.toastText}>{message}</Text>
                    </View>
                )}

                <Pressable style={styles.pressPassword} onPress={handleCopy}>
                    <Text style={styles.text}>{password}</Text>
                </Pressable>

                <View style={styles.vwButtons}>
                    <TouchableOpacity style={styles.btn} onPress={handleClose}>
                        <Text style={styles.textBtn}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.btn, styles.btnSave]} onPress={handleSavePassword}>
                        <Text style={[styles.textBtn, styles.btnSaveText]}>Salvar senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(24, 24, 24, 0.6)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        backgroundColor: '#FFF',
        width: '80%',
        borderRadius: 8,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000'
    },
    pressPassword: {
        backgroundColor: '#0e0e0e',
        width: '100%',
        borderRadius: 8,
        padding: 12
    },
    text: {
        color: '#FFF',
        textAlign: 'center'
    },
    vwButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 14
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        padding: 12
    },
    btnSave: {
        backgroundColor: '#392de9',
        borderRadius: 8
    },
    btnSaveText: {
        color: '#FFF',
        fontWeight: 'bold'
    },
    textBtn: {
        color: '#000',
        fontWeight: 'bold'
    },
    toast: {
        position: "absolute",
        backgroundColor: "black",
        justifyContent: "center",
        borderRadius: 10,
        padding: 10,
        bottom: 400,
    },
    toastText: {
        color: "white",
        fontSize: 14,
    }
})