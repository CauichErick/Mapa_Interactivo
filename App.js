import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const App = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);

  const markers = [
    {
      id: '1',
      title: 'Edicifio B',
      description: 'Esta es la ubicación 1',
      coordinate: {
        latitude: 21.049595728044885,
        longitude: -86.8469199676664,
      },
    },
    {
      id: '2',
      title: 'Edificio D',
      description: 'Esta es la ubicación 2',
      coordinate: {
        latitude: 21.050720761571668,
        longitude: -86.84766433166354,
      },
    },
    {
      id: '3',
      title: 'Edificio E',
      description: 'Esta es la ubicación 3',
      coordinate: {
        latitude: 21.050346082338574,
        longitude: -86.84785830120506,
      },
    },
    {
      id: '4',
      title: 'Edificio F',
      description: 'Esta es la ubicación 4',
      coordinate: {
        latitude: 21.049887204228746,
        longitude: -86.84779063743949,
      },
    },
    {
      id: '5',
      title: 'Edificio G',
      description: 'Esta es la ubicación 5',
      coordinate: {
        latitude: 21.04946410894912,
        longitude: -86.84784237380488,
      },
    },
    {
      id: '6',
      title: 'Edificio A',
      description: 'Esta es la ubicación 6',
      coordinate: {
        latitude: 21.05034993228529,
        longitude: -86.84633610505385,
      },
    },
    {
      id: '7',
      title: 'Ubicación 7',
      description: 'Esta es la ubicación 7',
      coordinate: {
        latitude: 21.05034993228529,
        longitude: -86.84633610505385,
      },
    },
    {
      id: '8',
      title: 'Edificio H',
      description: 'Esta es la ubicación 8',
      coordinate: {
        latitude: 21.05023228126873,
        longitude: -86.8455046203184,
      },
    },
    {
      id: '9',
      title: 'Edificio J',
      description: 'Esta es la ubicación 9',
      coordinate: {
        latitude: 21.04987096518084,
        longitude: -86.84546115726155,
      },
    },
    {
      id: '10',
      title: 'Edificio K',
      description: 'Esta es la ubicación 10',
      coordinate: {
        latitude: 21.04950647366373,
        longitude: -86.8455972424001,
      },
    },
    {
      id: '11',
      title: 'Edificio C',
      description: 'Esta es la ubicación 11',
      coordinate: {
        latitude: 21.049154673439286,
        longitude: -86.84622430934876,
      },
    },
    {
      id: '12',
      title: 'Edificio M',
      description: 'Esta es la ubicación 12',
      coordinate: {
        latitude: 21.048810608347406,
        longitude: 86.84648058370402,
      },
    },
    {
      id: '13',
      title: 'Oxxo UT',
      description: 'Esta es la ubicación 13',
      coordinate: {
        latitude: 21.049551554388792,
        longitude: -86.84627151107563,
      },
    },
    {
      id: '14',
      title: 'Edificio M',
      description: 'Esta es la ubicación 14',
      coordinate: {
        latitude: 21.048832413761655,
        longitude: -86.84638875401707,
      },
    },
    {
      id: '15',
      title: 'Aparcamiento',
      description: 'Esta es la ubicación 15',
      coordinate: {
        latitude: 21.050736080360245,
        longitude: -86.84610378166593,
      },
    }
  ];

  const fixedRegion = {
    latitude: 21.050216137617067,
    longitude: -86.84662860283886,
    latitudeDelta: 0.003,
    longitudeDelta: 0.003,
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permiso denegado', 'Necesitas habilitar los permisos de localización.');
        return;
      }

      await Location.getCurrentPositionAsync({});
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          region={fixedRegion}
          scrollEnabled={false}
          zoomEnabled={false}
          pitchEnabled={false}
          rotateEnabled={false}
          showsUserLocation={true}  // Para mostrar la ubicacion del usuario
        >
          {markers.map((marker) => (
            <Marker
              key={marker.id}
              coordinate={marker.coordinate}
              title={marker.title}
              description={marker.description}
              onPress={() => setSelectedMarker(marker)}
            />
          ))}
        </MapView>
      </View>

      {selectedMarker && (
        <View style={styles.infoBox}>
          <Text style={styles.title}>{selectedMarker.title}</Text>
          <Text style={styles.description}>{selectedMarker.description}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',  
  },
  mapContainer: {
    width: '100%',  
    height: '40%',  
  },
  map: {
    flex: 1,       
  },
  infoBox: {
    position: 'absolute',
    bottom: 50,
    left: 10,
    right: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    fontSize: 14,
  },
});

export default App;
