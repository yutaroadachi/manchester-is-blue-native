import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamList } from '../../../routes/PlayerStack';
import { View, Text, Button } from 'react-native';
import { ROUTE_NAME } from '../../../constants/routeName';

type Props = {
  navigation: StackNavigationProp<ParamList, typeof ROUTE_NAME.PLAYERS>;
};

export const Player = (props: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>選手一覧</Text>
      <Button
        title="選手詳細へ"
        onPress={() => props.navigation.navigate(ROUTE_NAME.PLAYER_DETAIL)}
      />
    </View>
  );
};
