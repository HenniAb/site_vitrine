import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import { compose, withHandlers, withProps, withStateHandlers } from 'recompose';
import { Button, Form, FormGroup, Label, Input, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import axios from 'axios';
import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer';

const MapWithAMarkerClusterer = compose(
  withStateHandlers(() => ({
    isOpen: false
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen
    })
  }),
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC8mAlKJGssOE7iNrkKnKZJEi_bznEz-Zo&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div className="" style={ { height: '100%' } } />,
    containerElement: <div style={ { height: '600px' } } />,
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
    defaultZoom={ 10 }
    defaultCenter={ { lat: 43.4585287, lng: 5.450643 } }
  >
    <MarkerClusterer
      onClick={ props.onMarkerClustererClick }
      averageCenter
      enableRetinaIcons
      gridSize={ 60 }
    >
      { props.markers.map(marker => (
        <Marker
          key={ marker.id }
          position={ { lat: marker.latitude, lng: marker.longitude } }
          onClick={ () => (props.onToggleOpen(props.isOpen)) }
        >
          { props.isOpen && <InfoWindow
            onClick={ () => (props.onToggleOpen(props.isOpen)) }
          >
            <span style={ { color: 'black' } }>{ marker.name }</span>
          </InfoWindow> }
        </Marker>
      )) }
    </MarkerClusterer>
  </GoogleMap>)
);

export default class media extends PureComponent {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      regexpForm: /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/,
      popoverOpen: false

    };
  }

  componentWillMount() {
    this.setState({
      markers: [
        {
          /* La joliette */
          name: 'Keep Cool - La joliette',
          adress: '77 Rue Peyssonnel, 13003 Marseille, France',
          id: 1,
          mark: false,
          longitude: 5.3684443,
          latitude: 43.310907
        },
        {
          /* Aix La rotonde */
          name: 'Keep Cool - Aix La Rotonde',
          adress: '4 Avenue des Belges, 13100 Aix-en-Provence, France',
          id: 2,
          mark: false,
          longitude: 5.3587796,
          latitude: 43.5068474
        },
        {
          /* Fuveau */
          name: 'Keep Cool - Fuveau',
          adress: 'ZI Rousset, D6, 13790 Peynier, France',
          id: 3,
          mark: false,
          longitude: 5.6100064,
          latitude: 43.4636031
        }
      ],
      userCity: '',
      userEmail: ''
    });
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  handleChange = (event) => {
    if (event.target.name === 'userCity') {
      this.setState({ userCity: event.target.value });
    } else if (event.target.name === 'userEmail') {
      this.setState({ userEmail: event.target.value });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.userCity || !this.state.userEmail) {
      alert('Veuillez remplir les champs manquants avant de soumettre votre formulaire.'); // eslint-disable-line no-alert
      return false;
    }
    if (!this.state.userCity.match(this.state.regexpForm)) {
      this.toggle();
      return false;
    }
    const user = {
      city: this.state.userCity,
      email: this.state.userEmail
    };
    console.log(user);
    /*
    axios({
      headers: {
        Accept: 'application/json',
        AccessControlAllowOrigin: 'http://localhost:8080/salles',
        ContentType: 'application/json',
        AccessControlAllowCredentials: true
      },
      baseURL: 'http://163.5.84.201:5540/notification',
      timeout: 1000,
      method: 'post',
      data: {
        city: this.state.userCity,
        email: this.state.userEmail
      }
    }).then((response) => {
      console.log('La requête a bien été envoyé');
      console.log(response);
    })
      .catch((error) => {
        console.log('La requête n\'a pas aboutis');
        console.log(error);
      });
      */
    axios.post('http://163.5.84.201:5540/notification', { user })
      .then((response) => {
        console.log('La requête a bien été envoyé');
        console.log(response);
      })
      .catch((error) => {
        console.log('La requête n\'a pas aboutis');
        console.log(error);
      });
    return true;
  };

  render() {
    return (
      <Container
        fluid
        style={ {
          paddingLeft: '0',
          paddingRight: '0',
          backgroundImage: 'linear-gradient(60deg, #355c7d, #6c5b7b, #c06c84)',
          overflow: 'hidden'
        } }
      >
        <Row style={ {
          paddingTop: '90px',
          color: 'white'
        } }
        >
          <Col>
            <h4
              style={ { textAlign: 'center' } }
            >Trouvez votre salle de sport équipée de la solution Centrale Fitness
              proche de chez vous !</h4>
          </Col>
        </Row>
        <Row style={ { padding: '30px 15px' } }>
          <Col
            xl={ 9 }
            lg={ 9 }
            md={ 9 }
            sm={ 0 }
            xs={ 0 }
            className="rowGmap"
          >
            <MapWithAMarkerClusterer markers={ this.state.markers } />
          </Col>
          <Col
            xl={ 3 }
            lg={ 3 }
            md={ 3 }
            sm={ 12 }
            xs={ 12 }
            style={ { background: 'rgba(72, 88, 103, 0.6)', borderRadius: '4px', paddingRight: '15px' } }
          >
            <Row>
              <Col>
                <h4 style={ { textAlign: 'center', color: 'white', padding: '20px 0 0 0' } }>Nos Salles</h4>
                <hr
                  style={ { color: 'white', borderTop: '1px solid rgba(255, 255, 255, 0.7)' } }
                />
              </Col>
            </Row>
            { this.state.markers.map(marker => (
              <Row key={ 'markerRow'.concat(marker.id) }>
                <Col key={ 'markerCol'.concat(marker.id) } style={ { color: 'white' } }>
                  <Row>
                    <Col>
                      <span style={ { fontWeight: 'bold' } }>{ marker.name }</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col style={ { paddingTop: '10px', fontFamily: 'Open Sans, sans-serif' } }>
                      <span>{ marker.adress }</span>
                    </Col>
                  </Row>
                  <hr
                    style={ { color: 'white', borderTop: '1px solid rgba(255, 255, 255, 0.7)' } }
                  />
                </Col>
              </Row>
            )) }
          </Col>
        </Row>
        <Row>
          <Col>
            <hr
              style={ {
                width: '80%',
                padding: '0 0 30px 0',
                color: 'white',
                borderTop: '1px solid rgba(255, 255, 255, 0.7)'
              } }
            />
            <h4 style={ { paddingBottom: '30px', textAlign: 'center', color: 'white' } }>Tenez vous informé des
              nouvelles salles
              équipées de la solution
              Centrale Fitness !</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form
              style={ { maxWidth: '350px', margin: 'auto', paddingBottom: '60px', color: 'white' } }
              onSubmit={ this.handleSubmit }
            >
              <Row>
                <Col>
                  <FormGroup
                    style={ { display: 'inline-flex', width: '100%' } }
                  >
                    <Label for="Email" style={ { margin: 'auto 0', paddingRight: '10px' } }>Email</Label>
                    <Input
                      type="email"
                      name="userEmail"
                      id="Email"
                      placeholder="Veuillez entrer votre adresse email"
                      onChange={ this.handleChange }
                      style={ { width: '100%', maxWidth: '300px', fontFamily: 'Raleway, sans-serif' } }
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup
                    style={ { display: 'inline-flex', width: '100%' } }
                  >
                    <Label for="City" style={ { margin: 'auto 0', paddingRight: '18px' } }>Ville</Label>
                    <Input
                      type="text"
                      name="userCity"
                      id="City"
                      placeholder="Veuillez entrer votre ville"
                      onChange={ this.handleChange }
                      style={ { width: '100%', maxWidth: '300px', fontFamily: 'Raleway, sans-serif' } }
                    />
                    <Popover placement="right" isOpen={ this.state.popoverOpen } target="City" toggle={ this.toggle }>
                      <PopoverHeader style={ { backgroundColor: '#ff7c50' } }>Erreur</PopoverHeader>
                      <PopoverBody>Veuillez inscrire un nom de ville sans caractère(s) spéciaux</PopoverBody>
                    </Popover>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button style={ { marginLeft: '48px' } }>Envoyer</Button>
                </Col>
              </Row>
              { /* <div className="g-recaptcha" data-sitekey="your_site_key">test</div> */ }
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
