import React from 'react';
import { ROUTE_NAME } from '../../constants/routeName';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, GameDetail } from '../../components/screens';
import { COLOR_PALETTE } from '../../constants/colorPalette';

export type ParamList = {
  [ROUTE_NAME.HOME]: undefined;
  [ROUTE_NAME.GAME_DETAIL]: undefined;
};

const Stack = createStackNavigator<ParamList>();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTE_NAME.HOME}
      screenOptions={{
        headerStyle: { backgroundColor: COLOR_PALETTE.MAIN },
        headerTintColor: COLOR_PALETTE.ACCENT,
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name={ROUTE_NAME.HOME}
        component={Home}
        options={{ title: 'ホーム' }}
      />
      <Stack.Screen
        name={ROUTE_NAME.GAME_DETAIL}
        component={GameDetail}
        options={{ title: '試合詳細' }}
      />
    </Stack.Navigator>
  );
};
