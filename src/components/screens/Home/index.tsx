import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamList } from '../../../routes/HomeStack';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { ROUTE_NAME } from '../../../constants/routeName';

type Props = {
  navigation: StackNavigationProp<ParamList, typeof ROUTE_NAME.HOME>;
};

export const Home = (props: Props) => {
  return (
    <View style={styles.container}>
      <Card onPress={() => props.navigation.navigate(ROUTE_NAME.GAME_DETAIL)}>
        <Card.Content>
          <Title>ホーム</Title>
          <Paragraph>hoge</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
