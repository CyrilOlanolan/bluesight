import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { Button } from '@/components/ui/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button variant="primary" className="w-full" text="Primary" />
      <Button variant="negative" className="w-full" text="Negative" />
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
