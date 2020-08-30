import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamList } from '../../../routes/PlayerStack';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { ROUTE_NAME } from '../../../constants/routeName';
import { COLOR_PALETTE } from '../../../constants/colorPalette';

type Props = {
  navigation: Navigation;
};

type Navigation = StackNavigationProp<ParamList, typeof ROUTE_NAME.PLAYERS>;

type Player = {
  firstName: string;
  lastName?: string;
  uniformNumber?: number;
  position: Position;
};

type Position =
  | 'ゴールキーパー'
  | 'ディフェンダー'
  | 'ミッドフィルダー'
  | 'フォワード'
  | '監督'
  | 'アシスタントコーチ';

type CardsByPositionProps = {
  position: Position;
  players: Player[];
  navigation: Navigation;
};

const players: Player[] = [
  {
    firstName: 'エデルソン',
    lastName: '',
    uniformNumber: 31,
    position: 'ゴールキーパー',
  },
  {
    firstName: 'スコット',
    lastName: 'カーソン',
    uniformNumber: 33,

    position: 'ゴールキーパー',
  },
  {
    firstName: 'アリジャネ',
    lastName: 'ムリッチ',
    uniformNumber: 49,
    position: 'ゴールキーパー',
  },
  {
    firstName: 'ラヒーム',
    lastName: 'スターリング',
    uniformNumber: 7,

    position: 'フォワード',
  },
  {
    firstName: 'ガブリエル',
    lastName: 'ジェズス',
    uniformNumber: 9,
    position: 'フォワード',
  },
  {
    firstName: 'セルヒオ',
    lastName: 'アグエロ',
    uniformNumber: 10,

    position: 'フォワード',
  },
  {
    firstName: 'フェラン',
    lastName: 'トーレス',
    uniformNumber: 21,
    position: 'フォワード',
  },
];

export const Player = (props: Props) => {
  return (
    <View style={styles.container}>
      <CardsByPosition
        position="ゴールキーパー"
        players={players.filter(
          (player) => player.position === 'ゴールキーパー'
        )}
        navigation={props.navigation}
      />
      <CardsByPosition
        position="フォワード"
        players={players.filter((player) => player.position === 'フォワード')}
        navigation={props.navigation}
      />
    </View>
  );
};

const CardsByPosition = ({
  position,
  players,
  navigation,
}: CardsByPositionProps) => {
  return (
    <>
      <Title style={{ color: COLOR_PALETTE.ACCENT }}>{position}</Title>
      {players.length > 0 && (
        <View style={styles.cards}>
          {players.map((player, index) => (
            <Card
              key={index}
              style={styles.card}
              onPress={() => navigation.navigate(ROUTE_NAME.PLAYER_DETAIL)}
            >
              <View style={styles.cardHeader}>
                <MaterialIcons
                  name="person"
                  size={64}
                  color={COLOR_PALETTE.PRIMARY}
                />
                {player.uniformNumber && (
                  <Text style={styles.uniformNumber}>
                    {player.uniformNumber}
                  </Text>
                )}
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.name}>{player.firstName}</Text>
                <Text style={styles.name}>{player.lastName}</Text>
              </View>
            </Card>
          ))}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  card: {
    width: '32%',
    marginBottom: 8,
  },
  cardHeader: {
    alignItems: 'center',
    backgroundColor: 'aliceblue',
  },
  cardContent: {
    justifyContent: 'center',
    padding: 16,
  },
  uniformNumber: {
    fontSize: 32,
    fontWeight: '600',
    color: COLOR_PALETTE.PRIMARY,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: COLOR_PALETTE.ACCENT,
  },
});
