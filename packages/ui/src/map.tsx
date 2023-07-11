import MapView, { LatLng } from 'react-native-maps'
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
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  )
}
