import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Player, PlayerDetail } from '../../components/screens';
import { ROUTES } from '../../constants/routes';
import { THEME } from '../../constants/theme';

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
        headerStyle: { backgroundColor: THEME.PRIMARY },
        headerTintColor: THEME.ACCENT,
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
