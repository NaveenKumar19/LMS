import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Card} from 'react-native-paper';
import {strings} from '../resources'

const BookCard = ({
  book,
  isSingleCard = true,
  onClickCard,
  onLongPress = () => {},
}) => {
  return (
    <Card
      onLongPress={onLongPress}
      onPress={() => {
        onClickCard(book);
      }}
      style={styles.container}>
      <Card.Cover source={{uri: book.thumbnailUrl}} />

      <Card.Content>
        <View style={styles.row}>
          <Text style={isSingleCard ? styles.titleStyle : styles.subtitle}>
            {strings.title+': '+book.title}
          </Text>
        </View>
      </Card.Content>
      {isSingleCard && (
        <Card.Content>
          <View style={styles.row}>
            <Text style={styles.subtitle}>{strings.author+': '+book.authors}</Text>
          </View>
        </Card.Content>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, marginStart: 8, marginTop: 8},
  row: {flexDirection: 'row', alignItems: 'center'},
  logo: {
    resizeMode: 'cover',
    aspectRatio: 16 / 9,
  },
  titleStyle: {
    marginTop: 8,
    fontSize: 20,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 15,
  },
});

export default BookCard;
