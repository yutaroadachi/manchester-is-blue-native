import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamList } from '../../../routes/HomeStack';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { ROUTE_NAME } from '../../../constants/routeName';

type Props = {
  navigation: StackNavigationProp<ParamList, typeof ROUTE_NAME.HOME>;
};

const games = [
  {
    kind: 'プレミアリーグ',
    section: '第2節',
    opponent: 'ウルブズ',
    date: '2020/9/19(土)',
    time: '23:00',
    score: '0-3',
    isHome: false,
  },
  {
    kind: 'プレミアリーグ',
    section: '第3節',
    opponent: 'レスター',
    date: '2020/9/26(土)',
    time: '23:00',
    score: '',
    isHome: true,
  },
  {
    kind: 'プレミアリーグ',
    section: '第4節',
    opponent: 'リーズ',
    date: '2020/10/3(土)',
    time: '23:00',
    score: '',
    isHome: false,
  },
  {
    kind: 'プレミアリーグ',
    section: '第5節',
    opponent: 'アーセナル',
    date: '2020/10/17(土)',
    time: '23:00',
    score: '',
    isHome: true,
  },
  {
    kind: 'プレミアリーグ',
    section: '第6節',
    opponent: 'ウェスト・ハム',
    date: '2020/10/24(土)',
    time: '23:00',
    score: '',
    isHome: false,
  },
  {
    kind: 'プレミアリーグ',
    section: '第7節',
    opponent: 'シェフィールド',
    date: '2020/11/1(日)',
    time: '00:00',
    score: '',
    isHome: false,
  },
  {
    kind: 'プレミアリーグ',
    section: '第8節',
    opponent: 'リバプール',
    date: '2020/11/8(日)',
    time: '00:00',
    score: '',
    isHome: true,
  },
];

export const Home = (props: Props) => {
  return (
    <ScrollView style={styles.container}>
      {games.map((game, i) => {
        return (
          <Card
            key={i}
            style={{ marginBottom: 16 }}
            onPress={() => props.navigation.navigate(ROUTE_NAME.GAME_DETAIL)}
          >
            <Card.Content>
              <Text style={{ marginBottom: 16 }}>
                {game.kind} {game.section} {game.date}
              </Text>
              <View style={styles.main}>
                <Text style={[styles.teamName, { textAlign: 'right' }]}>
                  {game.isHome ? 'シティ' : game.opponent}
                </Text>
                <View style={styles.timeOrScoreContainer}>
                  <Text style={styles.timeOrScore}>
                    {game.score ? game.score : game.time}
                  </Text>
                </View>
                <Text style={[styles.teamName, { textAlign: 'left' }]}>
                  {game.isHome ? game.opponent : 'シティ'}
                </Text>
              </View>
            </Card.Content>
          </Card>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  teamName: {
    width: '39%',
    fontSize: 16,
    fontWeight: '600',
  },
  timeOrScoreContainer: {
    width: '22%',
    paddingHorizontal: 8,
  },
  timeOrScore: {
    textAlign: 'center',
    backgroundColor: '#ededed',
    padding: 8,
  },
});
