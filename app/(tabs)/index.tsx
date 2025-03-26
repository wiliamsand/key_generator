import { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Slider from '@react-native-community/slider'

export default function Index() {
  const [size, setSize] = useState(18)

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

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Gerar senha</Text>
      </TouchableOpacity>
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
    marginBottom: 50
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