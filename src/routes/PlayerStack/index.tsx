import React from 'react';
import { ROUTE_NAME } from '../../constants/routeName';
import { createStackNavigator } from '@react-navigation/stack';
import { Player, PlayerDetail } from '../../components/screens';

export type ParamList = {
  [ROUTE_NAME.PLAYERS]: undefined;
  [ROUTE_NAME.PLAYER_DETAIL]: undefined;
};

const Stack = createStackNavigator<ParamList>();

export const PlayerStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTE_NAME.PLAYERS}>
      <Stack.Screen
        name={ROUTE_NAME.PLAYERS}
        component={Player}
        options={{ title: '選手一覧' }}
      />
      <Stack.Screen
        name={ROUTE_NAME.PLAYER_DETAIL}
        component={PlayerDetail}
        options={{ title: '選手詳細' }}
      />
    </Stack.Navigator>
  );
};