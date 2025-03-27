import { StyleSheet, View, Text } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text>Teste</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
