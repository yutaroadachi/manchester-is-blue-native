import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamList } from '../../../routes/HomeStack';
import { View, Text, Button } from 'react-native';
import { ROUTE_NAME } from '../../../constants/routeName';

type Props = {
  navigation: StackNavigationProp<ParamList, typeof ROUTE_NAME.HOME>;
};

export const Home = (props: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ホーム</Text>
      <Button
        title="試合詳細へ"
        onPress={() => props.navigation.navigate(ROUTE_NAME.GAME_DETAIL)}
      />
    </View>
  );
};
