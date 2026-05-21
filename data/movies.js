export interface Movie {
  id: number;
  title: string;
  poster: string;
  likes: number;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Godzilla: King of the Monsters",
    poster: "https://image.tmdb.org/t/p/w500/9QdB9FTO9p1y7f0Q9f8f7f8f8f8f8.jpg",
    likes: 3823,
  },
  {
    id: 2,
    title: "The Little Things",
    poster: "https://image.tmdb.org/t/p/w500/8b5f1z1z1z1z1z1z1z1z1z1z1z1.jpg", 
    likes: 660,
  },
  {
    id: 3,
    title: "Breach",
    poster: "https://image.tmdb.org/t/p/w500/5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b.jpg",
    likes: 327,
  },
  {
    id: 4,
    title: "Cherry",
    poster: "https://image.tmdb.org/t/p/w500/6b6b6b6b6b6b6b6b6b6b6b6b6b6b6b6b.jpg",
    likes: 385,
  },
  {
    id: 5,
    title: "Wonder Woman 1984",
    poster: "https://image.tmdb.org/t/p/w500/8g8g8g8g8g8g8g8g8g8g8g8g8g8g8g.jpg",
    likes: 4509,
  },
  {
    id: 6,
    title: "Outside the Wire",
    poster: "https://image.tmdb.org/t/p/w500/9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h.jpg",
    likes: 910,
  },
];
