import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { Appbar, IconButton } from 'react-native-paper';
import { goBack } from '../navigation/NavigationService';
import {strings} from '../resources'
import {deviceHeight,deviceWidth} from '../utils'

const BookDetailScreen = ({ route }) => {
  const { book } = route.params;
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            goBack();
          }}
        />
        <Appbar.Content title={strings.bookDetails} />
      </Appbar.Header>
      <View style={styles.content}>
        <Image
          style={styles.logo}
          source={{
            uri: book.thumbnailUrl,
          }}
        />
        <View style={styles.row}>
          <IconButton icon="airballoon" size={15} />
          <Text
            style={styles.titleStyle}>{ strings.title+`: ${book.title}`}</Text>
        </View>
        <View style={styles.row}>
          <IconButton icon="book" size={15} />
          <Text
            style={
              styles.titleStyle
            }>{strings.description+`: ${book.shortDescription}`}</Text>
        </View>
        <View style={styles.row}>
          <IconButton icon="tag" size={15} />
          <Text style={styles.titleStyle}>
            {strings.status+`: ${book.isAvailable ? strings.available : strings.notavailable}`}
          </Text>
        </View>
        {!book.isAvailable ? <View style={styles.row}>
          <IconButton icon="tag" size={15} />
          <Text style={styles.titleStyle}>
            {strings.dueDays+`: ${book.dueDate}`}
          </Text>
        </View> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 },
  logo: {
    aspectRatio: 16 / 9,
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    width: '100%',
    fontSize: 30,
    position: 'absolute',
    bottom: 0,
  },
  titleStyle: {
    marginTop: 4,
    fontSize: 20,
    flex:1
  },
});


export default BookDetailScreen;
