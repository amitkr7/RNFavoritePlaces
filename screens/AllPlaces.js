import React, { useEffect, useState } from 'react';
import PlacesList from '../components/Places/PlacesList';
import { useIsFocused } from '@react-navigation/native';
import { fetchplaces } from '../util/database';

const AllPlaces = () => {
  const [loadedPlaces, setLoadedplaces] = useState([]);

  const isFocused = useIsFocused();
  useEffect(() => {
    const loadPlaces = async () => {
      const places = await fetchplaces();
      console.log(places);
      setLoadedplaces(places);
    };
    if (isFocused) {
      loadPlaces();
    }
  }, [isFocused]);
  return <PlacesList places={loadedPlaces} />;
};

export default AllPlaces;
