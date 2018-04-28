import React, { PureComponent } from 'react';
import {
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import { Container, Row, Col } from 'react-grid-system';


const MapWithAMarker = withGoogleMap(() =>
    (<GoogleMap
      defaultZoom={ 8 }
      defaultCenter={ { lat: 43.3108913, lng: 5.3676683 } }
    >
      <Marker
        position={ { lat: 43.3108913, lng: 5.3676683 } }
      />
    </GoogleMap>)
  )
;

export default class media extends PureComponent {
  render() {
    return (
      <Container fluid>
        <Row style={ {
          padding: '90px 0 90px 0',
          background: 'linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)'
        } }
        >
          <Col>
            <MapWithAMarker
              loadingElement={ <div style={ { height: '100%' } } /> }
              containerElement={ <div style={ { height: '400px' } } /> }
              mapElement={ <div style={ { height: '100%' } } /> }
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
