import React from 'react';
import { ROUTES } from '../../constants/routes';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, GameDetail } from '../../components/screens';
import { COLOR_PALETTE } from '../../constants/colorPalette';

export type ParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.GAME_DETAIL]: undefined;
};

const Stack = createStackNavigator<ParamList>();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.HOME}
      screenOptions={{
        headerStyle: { backgroundColor: COLOR_PALETTE.PRIMARY },
        headerTintColor: COLOR_PALETTE.ACCENT,
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name={ROUTES.HOME}
        component={Home}
        options={{ title: 'ホーム' }}
      />
      <Stack.Screen
        name={ROUTES.GAME_DETAIL}
        component={GameDetail}
        options={{ title: '試合詳細' }}
      />
    </Stack.Navigator>
  );
};
