import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { TextInput } from '@/components/ui/TextInput';

export default function App() {
  return (
    <View style={styles.container} className="">
      <Text>Open up App.tsx to start working on your app!</Text>
      <TextInput className="w-full flex grow" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
