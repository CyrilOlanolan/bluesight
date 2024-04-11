import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import SampleComponent from '@/components/ui/SampleComponent';

export default function App() {
  return (
    <View style={styles.container} className="">
      <Text>Open up App.tsx to start working on your app!</Text>
      <SampleComponent />
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
