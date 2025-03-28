import { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import Slider from '@react-native-community/slider'
import ModalPassword from '@/components/modal'
import * as Clipboard from 'expo-clipboard'

export default function Index() {
  const [size, setSize] = useState(18)
  const [password, setPassword] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

  async function generatePassword() {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()_+'
    let password = ''

    for (let i = 0; i < size; i++) {
      const randomPos = Math.floor(Math.random() * charset.length)
      password += charset[randomPos]
    }

    setPassword(password)
    setModalVisible(true)
    await Clipboard.setStringAsync(password)
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.caracteres}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ width: '100%', height: 50 }}
          step={1}
          minimumValue={6}
          maximumValue={36}
          value={size}
          onValueChange={(value) => setSize(value)}
        />
      </View>

      <TouchableOpacity style={styles.btn} onPress={generatePassword}>
        <Text style={styles.btnText}>Gerar senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassword password={password} handleClose={() => setModalVisible(false)} />
      </Modal>

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginBottom: 50,
    width: 200,
    height: 200
  },
  caracteres: {
    fontWeight: 'bold',
    fontSize: 25
  },
  area: {
    marginTop: 15,
    marginBottom: 40,
    width: '80%'
  },
  btn: {
    backgroundColor: '#392de9',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7
  },
  btnText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  }
})