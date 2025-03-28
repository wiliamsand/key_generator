import { StyleSheet, View, Text, FlatList } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native';
import useStorage from '@/hooks/useStorage'
import { PasswordItem } from '../../components/passwordItem'

export default function TabTwoScreen() {
  const { getItem, deleteItem } = useStorage()
  const [passwords, setPasswords] = useState([])
  const isFocused = useIsFocused()

  async function loadPasswords() {
    const passwords = await getItem('@pass')
    setPasswords(passwords)
  }

  useEffect(() => {
    if (isFocused) {
      loadPasswords()
    }
  }, [isFocused])

  const handleDeletePassword = async (password:string) => {
    const filtered = await deleteItem('@pass', password)
    setPasswords(filtered)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas senhas</Text>
      </View>

      <View style={styles.content}>
        <FlatList
          style={{ flex: 1, paddingTop: 14 }}
          data={passwords}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <PasswordItem password={item} removePassword={handleDeletePassword} />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#392de9',
    padding: 25,
    alignItems: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingLeft: 14,
    paddingRight: 14
  },
  item: {

  }
});
