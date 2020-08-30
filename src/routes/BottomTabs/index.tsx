import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeStack } from '../HomeStack';
import { PlayerStack } from '../PlayerStack';
import { ROUTES } from '../../constants/routes';
import { THEME } from '../../constants/theme';

type ParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.PLAYERS]: undefined;
};

const Tab = createBottomTabNavigator<ParamList>();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.HOME}
      tabBarOptions={{
        activeTintColor: THEME.ACCENT,
        style: { backgroundColor: THEME.PRIMARY },
      }}
    >
      <Tab.Screen
        name={ROUTES.HOME}
        component={HomeStack}
        options={{
          title: 'ホーム',
          tabBarIcon: (props) => (
            <MaterialIcons name="home" size={props.size} color={props.color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.PLAYERS}
        component={PlayerStack}
        options={{
          title: '選手一覧',
          tabBarIcon: (props) => (
            <MaterialIcons
              name="people"
              size={props.size}
              color={props.color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
