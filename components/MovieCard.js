// src/components/MovieCard.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { toggleFavorite } from '../redux/favoritesSlice';
import { Movie } from '../data/movies';
import { RootState } from '../redux/store';

interface Props {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.favorites);
  const isFavorite = favorites.some((m: Movie) => m.id === movie.id);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{movie.title}</Text>

      <View style={styles.bottomRow}>
        <View style={styles.likes}>
          <Icon name="thumbs-up" size={24} color="#4CAF50" />
          <Text style={styles.count}>{movie.likes}</Text>
        </View>

        <TouchableOpacity 
          onPress={() => dispatch(toggleFavorite(movie))}
          style={styles.heartButton}
        >
          <Icon 
            name={isFavorite ? "heart" : "heart-outline"} 
            size={28} 
            color={isFavorite ? "#FF4081" : "#888"} 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginVertical: 8,
    padding: 18,
    borderRadius: 12,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#111',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  count: {
    marginLeft: 8,
    fontSize: 17,
    color: '#333',
  },
  heartButton: {
    padding: 4,
  },
});

export default MovieCard;
