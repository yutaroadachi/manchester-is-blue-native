import React from 'react';
import { ROUTES } from '../../constants/routes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { THEME } from '../../constants/theme';
import { HomeStack } from '../HomeStack';
import { PlayerStack } from '../PlayerStack';
import { MaterialIcons } from '@expo/vector-icons';

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
