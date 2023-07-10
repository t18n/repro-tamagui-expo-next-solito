import MapView, { Polyline, Circle, LatLng, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { useState } from 'react'

type MapProps = {
  polyLineCoordinates?: LatLng[]
  startLocation?: LatLng
  stopLocation?: LatLng
}

export const StyledMap = ({ polyLineCoordinates, startLocation, stopLocation }: MapProps) => {
  const [radius, setRadius] = useState(100)

  return (
    <MapView
      initialRegion={{
        latitude: 55.648873,
        longitude: 12.269583,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      style={{ width: '100%', height: '100%' }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      showsCompass={true}
      minZoomLevel={5}
      maxZoomLevel={20}
      showsMyLocationButton={true}
      onRegionChangeComplete={(region) => {
        setRadius(Math.round(((region.longitudeDelta + region.latitudeDelta) / 2) * 1000))
      }}
    >
      {polyLineCoordinates && startLocation && stopLocation && (
        <>
          <Circle
            center={polyLineCoordinates[0]}
            radius={radius === 0 ? 0.5 : radius}
            strokeWidth={2}
            fillColor="white"
            zIndex={2}
          />
          <Polyline
            coordinates={polyLineCoordinates}
            strokeColor="#1a73e8"
            strokeWidth={6}
            lineDashPattern={[5, 5]}
          />
        </>
      )}
    </MapView>
  )
}
