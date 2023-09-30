import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import StackNavigator from './StackNavigator';
import { FitnessProvider } from './Context';

export default function App() {
  return (
    <FitnessProvider>
      <StackNavigator />;
    </FitnessProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
