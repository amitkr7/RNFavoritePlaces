import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import PlacesList from '../components/Places/PlacesList';
import { useIsFocused } from '@react-navigation/native';

const AllPlaces = ({ route }) => {
  const [loadedPlaces, setLoadedplaces] = useState([]);

  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused && route.params) {
      setLoadedplaces((currPlaces) => [...currPlaces, route.params.place]);
    }
  }, [isFocused, route]);
  return <PlacesList places={loadedPlaces} />;
};

export default AllPlaces;
