import { StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Map = () => {
  const region = {
    latitude: 37.78,
    longitude: -122.43,
    latituteDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return <MapView style={styles.map} initialRegion={region}></MapView>;
};

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
