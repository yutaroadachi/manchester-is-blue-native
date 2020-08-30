import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { ParamList } from '../../../routes/HomeStack';
import { ROUTES } from '../../../constants/routes';

type Props = {
  navigation: StackNavigationProp<ParamList, typeof ROUTES.GAME_DETAIL>;
};

export const GameDetail = (props: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>試合詳細</Text>
      <Button
        title="ホームへ"
        onPress={() => props.navigation.navigate(ROUTES.HOME)}
      />
    </View>
  );
};
