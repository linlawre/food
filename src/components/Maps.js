import React from 'react';
import { StyleSheet, View  } from 'react-native';
import MapView , {Marker} from 'react-native-maps';

const Maps = ({result}) => {
      
  return (
    <View style={styles.contanier}>

        <MapView 
          style={styles.map} 
          initialRegion={{
          latitude: result.coordinates.latitude,
          longitude:  result.coordinates.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          }}>
        <Marker  
          coordinate=
          {{
          latitude: result.coordinates.latitude,
          longitude: result.coordinates.longitude
          }}
          title={result.name}
        />
        </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
    contanier:{
      ...StyleSheet.absoluteFillObject
    },
    map:{
      ...StyleSheet.absoluteFillObject
    }
});

export default Maps;


