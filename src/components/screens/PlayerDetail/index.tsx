import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamList } from '../../../routes/PlayerStack';
import { View, Text, Button } from 'react-native';
import { ROUTES } from '../../../constants/routes';

type Props = {
  navigation: StackNavigationProp<ParamList, typeof ROUTES.PLAYER_DETAIL>;
};

export const PlayerDetail = (props: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>選手詳細</Text>
      <Button
        title="選手一覧へ"
        onPress={() => props.navigation.navigate(ROUTES.PLAYERS)}
      />
    </View>
  );
};
