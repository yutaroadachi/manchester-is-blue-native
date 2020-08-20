import React from 'react';
import { ROUTE_NAME } from '../../constants/routeName';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLOR_PALETTE } from '../../constants/colorPalette';
import { HomeStack } from '../HomeStack';
import { PlayerStack } from '../PlayerStack';
import { MaterialIcons } from '@expo/vector-icons';

type ParamList = {
  [ROUTE_NAME.HOME]: undefined;
  [ROUTE_NAME.PLAYERS]: undefined;
};

const Tab = createBottomTabNavigator<ParamList>();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTE_NAME.HOME}
      tabBarOptions={{
        activeTintColor: COLOR_PALETTE.ACCENT,
        style: { backgroundColor: COLOR_PALETTE.PRIMARY },
      }}
    >
      <Tab.Screen
        name={ROUTE_NAME.HOME}
        component={HomeStack}
        options={{
          title: 'ホーム',
          tabBarIcon: (props) => (
            <MaterialIcons name="home" size={props.size} color={props.color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTE_NAME.PLAYERS}
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
