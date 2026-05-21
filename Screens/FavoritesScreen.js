import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import { RootState } from '../redux/store';

const FavoritesScreen = () => {
  const favorites = useSelector((state: RootState) => state.favorites.favorites);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites ({favorites.length})</Text>

      {favorites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No favorite movies yet</Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <MovieCard movie={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8', paddingTop: 10 },
  title: { fontSize: 24, fontWeight: 'bold', padding: 16 },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { fontSize: 18, color: '#888' },
});

export default FavoritesScreen;
