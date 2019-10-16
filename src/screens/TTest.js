import React from 'react';
import { StyleSheet, View  } from 'react-native';
import MapView from 'react-native-maps';

const Maps = () => {
      
  return (
    <View style={styles.contanier}>

        <MapView 
          style={styles.map} 
          initialRegion={{
          latitude: 34.070178,
          longitude:  -118.444747,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          }}>
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


