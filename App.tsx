import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { THEME } from './src/constants/theme';
import { Routes } from './src/routes';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: THEME.PRIMARY,
    accent: THEME.ACCENT,
    background: THEME.BACKGROUND,
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Routes />
      <StatusBar style="auto" />
    </PaperProvider>
  );
}
