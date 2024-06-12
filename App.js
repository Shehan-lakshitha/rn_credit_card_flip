import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddCard from './src/screens/AddCard';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <AddCard />
    </View>
  );
}


