import React from 'react';
import { ROUTES } from '../../constants/routes';
import { createStackNavigator } from '@react-navigation/stack';
import { Player, PlayerDetail } from '../../components/screens';
import { COLOR_PALETTE } from '../../constants/colorPalette';

export type ParamList = {
  [ROUTES.PLAYERS]: undefined;
  [ROUTES.PLAYER_DETAIL]: undefined;
};

const Stack = createStackNavigator<ParamList>();

export const PlayerStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.PLAYERS}
      screenOptions={{
        headerStyle: { backgroundColor: COLOR_PALETTE.PRIMARY },
        headerTintColor: COLOR_PALETTE.ACCENT,
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name={ROUTES.PLAYERS}
        component={Player}
        options={{ title: '選手一覧' }}
      />
      <Stack.Screen
        name={ROUTES.PLAYER_DETAIL}
        component={PlayerDetail}
        options={{ title: '選手詳細' }}
      />
    </Stack.Navigator>
  );
};
