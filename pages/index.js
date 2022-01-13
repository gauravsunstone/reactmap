import React,{useState} from 'react';
import { Map, GoogleApiWrapper,InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from '../components/Map';
import { googleApiKey } from '../utils/config'

const mapStyles = {
  width: '50%',
  height: '70%'
};

export const MapContainer=(props)=> {
  const[showingInfoWindow,setShowingInfoWindow]= useState(false);
  const[activeMarker, setActiveMarker]= useState({});
  const[selectedPlace, setSelectedPlace]=useState({});

  const  onMarkerClick = (props, marker, e) =>{
  setShowingInfoWindow(true);
  setActiveMarker(marker);
  setSelectedPlace(props);
}

const onClose = props => {
  if (showingInfoWindow) {
    setShowingInfoWindow(false);
    setActiveMarker(null);
      }
};
  
    return (
      <CurrentLocation
      centerAroundCurrentLocation
      google={props.google}
    >
     {/* <Map
        google={props.google}
        zoom={4}
        style={mapStyles}
        initialCenter={
          {
            lat: 28.444017355216555, 
            lng: 77.05669473908813
          }
        }
      > */}

      <Marker
      onClick={onMarkerClick}
      name={'Current Location'}
    />
    <InfoWindow
      marker={activeMarker}
      visible={showingInfoWindow}
      onClose={onClose}
    >
      <div>
        <h4>{selectedPlace.name}</h4>
      </div>
    </InfoWindow>
    {/* </Map> */}
     </CurrentLocation>
  
    );
  
}
// Define api key in .env
export default GoogleApiWrapper({
  apiKey: googleApiKey
})(MapContainer);
