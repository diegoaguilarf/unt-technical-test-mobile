import * as React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {Entry} from '../../types';

export interface CardProps {
  payload: Entry;
}

const Card: React.SFC<CardProps> = ({payload}) => {
  return (
    <View style={styles.card}>
      {payload.thumbnail ? (
        <Image style={styles.thumbnail} source={payload.thumbnail} />
      ) : (
        payload.images && <Image
          style={styles.thumbnail}
          source={{uri: payload.images['Poster Art'].url}}
        />
      )}
      <Text>{payload.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 250,
    margin: 6,
  },
  thumbnail: {
    width: '100%',
    height: 200,
  },
});

export default Card;
