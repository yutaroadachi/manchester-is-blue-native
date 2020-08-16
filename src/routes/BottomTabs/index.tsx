import React from 'react';
import { ROUTE_NAME } from '../../constants/routeName';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack } from '../HomeStack';
import { PlayerStack } from '../PlayerStack';

type ParamList = {
  [ROUTE_NAME.HOME]: undefined;
  [ROUTE_NAME.PLAYERS]: undefined;
};

const Tab = createBottomTabNavigator<ParamList>();

export const BottomTabs = () => {
  return (
    <Tab.Navigator initialRouteName={ROUTE_NAME.HOME}>
      <Tab.Screen
        name={ROUTE_NAME.HOME}
        component={HomeStack}
        options={{ title: 'ホーム' }}
      />
      <Tab.Screen
        name={ROUTE_NAME.PLAYERS}
        component={PlayerStack}
        options={{ title: '選手一覧' }}
      />
    </Tab.Navigator>
  );
};
