import React, { useEffect } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { FAB, Appbar } from 'react-native-paper';
import {
  getBooksAction,
  switchGridAction,
} from '../store/actions/bookAction';
import BookCard from '../components/BookCard';
import { navigate } from '../navigation/NavigationService';
import {strings} from '../resources'

const HomeScreen = (props) => {
  const dispatch = useDispatch();
  const { data, numColumn } = useSelector((state) => {
    return state.book;
  });
  useEffect(() => {
    dispatch(getBooksAction());
  }, [dispatch]);
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title={strings.dashBoard} />
      </Appbar.Header>
      {data && data.books && (
        <FlatList
          style={styles.flatList}
          key={numColumn === 1 ? 'vertical' : 'horizontal'}
          data={data.books}
          renderItem={({ item }) => (
            <BookCard
              book={item}
              isSingleCard={numColumn === 1}
              onClickCard={(book) => {
                navigate('BookDetailScreen', { book });
              }}
            />
          )}
          keyExtractor={(item) => `id_${item.isbn}`}
          numColumns={numColumn}
        />
      )}
      <FAB
        style={styles.fab}
        label={numColumn === 1 ? 'Grid' : 'List'}
        icon={numColumn === 1 ? 'border-all' : 'currency-eth'}
        onPress={() => {
          dispatch(switchGridAction());
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: { margin: 8 },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default HomeScreen;
