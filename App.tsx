import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { COLOR_PALETTE } from './src/constants/colorPalette';
import { Routes } from './src/routes';
import { StatusBar } from 'expo-status-bar';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLOR_PALETTE.MAIN,
    accent: COLOR_PALETTE.ACCENT,
    background: COLOR_PALETTE.BASE,
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
