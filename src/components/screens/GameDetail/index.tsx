import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamList } from '../../../routes/HomeStack';
import { View, Text, Button } from 'react-native';
import { ROUTE_NAME } from '../../../constants/routeName';

type Props = {
  navigation: StackNavigationProp<ParamList, typeof ROUTE_NAME.GAME_DETAIL>;
};

export const GameDetail = (props: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>試合詳細</Text>
      <Button
        title="ホームへ"
        onPress={() => props.navigation.navigate(ROUTE_NAME.HOME)}
      />
    </View>
  );
};
