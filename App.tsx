import React from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { StatusBar } from 'react-native';
import LoadingScreen from './src/components/Loading';
import { Routes } from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/AppRoutes';
import { BooksProvider } from './src/screens/BooksContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <LoadingScreen />;
  }

  return (
    <GluestackUIProvider config={config}>
      <StatusBar backgroundColor="#121214" barStyle="light-content" translucent />
      <BooksProvider>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </BooksProvider>
    </GluestackUIProvider>
  );
}
