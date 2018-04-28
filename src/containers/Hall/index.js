import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { compose, withHandlers, withProps } from 'recompose';
import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer';

const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC8mAlKJGssOE7iNrkKnKZJEi_bznEz-Zo&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={ { height: '100%' } } />,
    containerElement: <div style={ { height: '400px' } } />,
    mapElement: <div style={ { height: '100%' } } />
  }),
  withHandlers({
    onMarkerClustererClick: () => {
      return (markerClusterer) => {
        const clickedMarkers = markerClusterer.getMarkers();
        console.log(clickedMarkers);
      };
    }
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  (<GoogleMap
    defaultZoom={ 3 }
    defaultCenter={ { lat: 25.0391667, lng: 121.525 } }
  >
    <MarkerClusterer
      onClick={ props.onMarkerClustererClick }
      averageCenter
      enableRetinaIcons
      gridSize={ 60 }
    >
      { props.markers.map(marker => (
        <Marker
          key={ marker.photo_id }
          position={ { lat: marker.latitude, lng: marker.longitude } }
        />
      )) }
    </MarkerClusterer>
  </GoogleMap>)
);

export default class media extends PureComponent {
  componentWillMount() {
    this.setState({
      markers: [
        {
          photo_id: 27932,
          photo_title: 'Atardecer en Embalse',
          photo_url: 'http://www.panoramio.com/photo/27932',
          photo_file_url: 'http://mw2.google.com/mw-panoramio/photos/medium/27932.jpg',
          longitude: -64.404945,
          latitude: -32.202924,
          width: 500,
          height: 375,
          upload_date: '25 June 2006',
          owner_id: 4483,
          owner_name: 'Miguel Coranti',
          owner_url: 'http://www.panoramio.com/user/4483'
        },
        {
          photo_id: 7593894,
          photo_title: '桂林名胜百景——遇龙河',
          photo_url: 'http://www.panoramio.com/photo/7593894',
          photo_file_url: 'http://mw2.google.com/mw-panoramio/photos/medium/7593894.jpg',
          longitude: 110.424957,
          latitude: 24.781747,
          width: 500,
          height: 375,
          upload_date: '04 February 2008',
          owner_id: 161470,
          owner_name: 'John Su',
          owner_url: 'http://www.panoramio.com/user/161470'
        }
      ]
    });
  }

  render() {
    return (
      <Container fluid>
        <Row style={ {
          padding: '90px 0 90px 0',
          background: 'linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)'
        } }
        >
          <Col>
            <MapWithAMarkerClusterer markers={ this.state.markers } />
          </Col>
        </Row>
      </Container>
    );
  }
}
