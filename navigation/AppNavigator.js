import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import PopularMoviesScreen from '../Screens/PopularMoviesScreen';
import FavoritesScreen from '../Screens/FavoritesScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string;

            if (route.name === 'Popular') {
              iconName = focused ? 'film' : 'film-outline';
            } else {
              iconName = focused ? 'heart' : 'heart-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FF4081',
          tabBarInactiveTintColor: 'gray',
          headerShown: true,
          headerStyle: { backgroundColor: '#fff' },
          headerTitleStyle: { fontWeight: 'bold' },
        })}
      >
        <Tab.Screen 
          name="Popular" 
          component={PopularMoviesScreen} 
          options={{ title: 'Popular Movies' }} 
        />
        <Tab.Screen 
          name="Favorites" 
          component={FavoritesScreen} 
          options={{ title: 'My Favorites' }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
