import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import { movies } from '../data/movies';
import { RootState } from '../redux/store';

const PopularMoviesScreen = () => {
  const favoritesCount = useSelector((state: RootState) => 
    state.favorites.favorites.length
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Popular Movies</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{favoritesCount}</Text>
        </View>
      </View>

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MovieCard movie={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: { fontSize: 22, fontWeight: 'bold' },
  badge: {
    backgroundColor: '#FF4081',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  badgeText: { color: '#fff', fontWeight: 'bold' },
  list: { padding: 8 },
});

export default PopularMoviesScreen;
