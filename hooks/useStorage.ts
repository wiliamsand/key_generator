import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
    const getItem = async (key: string) => {
        try {
            const passwords = await AsyncStorage.getItem(key)
            return passwords ? JSON.parse(passwords) : []
        } catch (error) {
            console.log('Erro ao buscar os dados: ' + error)
            return []
        }
    }

    const saveItem = async (key: string, value: string) => {
        try {
            let passwords = await getItem(key)
            passwords.push(value)
            await AsyncStorage.setItem(key, JSON.stringify(passwords))
        } catch (error) {
            console.log('Erro ao salvar os dados: ' + error)
        }

    }

    const deleteItem = async (key: string, item: string) => {
        try {
            let passwords = await getItem(key)
            let filtered = passwords.filter((password: string) => password !== item)
            await AsyncStorage.setItem(key, JSON.stringify(filtered))
            return filtered
        } catch (error) {
            console.log('Erro ao deletar os dados: ' + error)
        }

    }

    return {
        saveItem,
        getItem,
        deleteItem
    }
}

export default useStorage;