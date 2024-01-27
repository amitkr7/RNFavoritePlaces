import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import OutlinedButton from '../components/UI/OutlinedButton';
import { Colors } from '../constants/colors';
import { fetchPlaceDetails } from '../util/database';

const PlaceDetails = ({ route, navigation }) => {
  const [fectchedPlace, setFetchedPlace] = useState();

  const showOnMapHandler = () => {};

  const selectedPlaceId = route.params.placeId;
  useEffect(() => {
    const loadPlaceData = async () => {
      const place = await fetchPlaceDetails(selectedPlaceId);
      setFetchedPlace(place);
      navigation.setOptions({
        title: place.title,
      });
    };
    loadPlaceData();
  }, [selectedPlaceId]);

  if (!fectchedPlace) {
    return (
      <View style={styles.fallback}>
        <Text>Loading Place Data...</Text>
      </View>
    );
  }
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: fectchedPlace.imageUri }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{fectchedPlace.address}</Text>
        </View>
        <OutlinedButton icon='map' onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
  },
  fallback: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '35%',
    minHeight: 300,
    width: '100%',
  },
  locationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
