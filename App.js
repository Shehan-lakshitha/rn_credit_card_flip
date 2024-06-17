import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import AddCard from './src/screen/AddCard';

export default function App() {
  return (
    <View>
      <AddCard />
      <StatusBar style="auto" />
    </View>
  );
}

