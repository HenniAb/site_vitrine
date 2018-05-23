import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Button, Form, FormGroup, Label, Input, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import Img from 'react-image';
import axios from 'axios/index';
import Letter from '../../assets/images/contacts/004-envelope.png';
import Phone from '../../assets/images/contacts/001-phone-number.png';

export default class myValues extends PureComponent {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      regexpForm: /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/,
      popoverFirstNameOpen: false,
      popoverLastNameOpen: false

    };
  }
  componentWillMount() {
    this.setState({
      userEmail: null,
      userFirstName: null,
      userLastName: null
    });
  }

  toggle = (popoverOpen) => {
    if (popoverOpen === 'firstName') {
      this.setState({
        popoverFirstNameOpen: !this.state.popoverFirstNameOpen
      });
    } else if (popoverOpen === 'lastName') {
      this.setState({
        popoverLastNameOpen: !this.state.popoverLastNameOpen
      });
    }
  };

  handleChange = (event) => {
    if (event.target.name === 'userEmail') {
      this.setState({ userEmail: event.target.value });
      /* console.log(event.target.value);
      console.log('modification variable userEmail'); */
    } else if (event.target.name === 'userFirstName') {
      this.setState({ userFirstName: event.target.value });
      /* console.log(event.target.value);
      console.log('modification variable userFirstName'); */
    } else if (event.target.name === 'userLastName') {
      this.setState({ userLastName: event.target.value });
      /* console.log(event.target.value);
      console.log('modification variable userLastName'); */
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.userFirstName || !this.state.userLastName || !this.state.userEmail) {
      alert('Veuillez remplir les champs manquants avant de soumettre votre formulaire.'); // eslint-disable-line no-alert
      return false;
    }
    if (!this.state.userFirstName.match(this.state.regexpForm)) {
      this.toggle('firstName');
      return false;
    } else if (!this.state.userLastName.match(this.state.regexpForm)) {
      this.toggle('lastName');
      return false;
    }
    const user = {
      firstname: this.state.userFirstName,
      lastname: this.state.userLastName,
      email: this.state.userEmail
    };
    console.log(user);
    axios.post('http://163.5.84.201:5540/newsletter', { user })
      .then((response) => {
        /* alert('Votre formulaire a bien été envoyé'); */
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    return true;
  };

  render() {
    return (<Container
      fluid
      style={ {
        padding: '90px 15px 30px 15px',
        backgroundImage: 'linear-gradient(to left bottom, #FF5889, #FFBD68)'
      } }
    >
      <Row>
        <Col style={ { textAlign: 'center', paddingBottom: '30px', color: 'white' } }>
          <h2>Centrale Fitness reste à votre écoute !</h2>
        </Col>
      </Row>
      <Row>
        <Col style={ { textAlign: 'center', paddingBottom: '30px', color: 'white' } }>
          <h3>Restez informé des nouveautés de Centrale
            Fitness
            avec notre service de Newsletter</h3>
          <hr className="my-2" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <Form
                style={ {
                  maxWidth: '700px',
                  margin: 'auto',
                  paddingBottom: '90px',
                  fontFamily: 'Raleway, sans-serif'
                } }
                onSubmit={ this.handleSubmit }
              >
                <Row>
                  <Col style={ { color: 'white' } }>
                    <FormGroup>
                      <Label for="Email">Email</Label>
                      <Input
                        type="email"
                        name="userEmail"
                        id="Email"
                        placeholder="Veuillez entrer votre adresse email"
                        onChange={ this.handleChange }
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Row>
                    <Col
                      xl={ 6 }
                      lg={ 6 }
                      md={ 6 }
                      sm={ 12 }
                      xs={ 12 }
                      style={ { color: 'white' } }
                    >
                      <Label for="firstName">Prénom</Label>
                      <Input
                        type="text"
                        name="userFirstName"
                        id="firstName"
                        placeholder="Votre prénom"
                        onChange={ this.handleChange }
                      />
                      <Popover
                        placement="right"
                        isOpen={ this.state.popoverFirstNameOpen }
                        target="firstName"
                        toggle={() => this.toggle('firstName') }
                      >
                        <PopoverHeader style={ { backgroundColor: '#ff7c50' } }>Erreur</PopoverHeader>
                        <PopoverBody>Veuillez inscrire votre prénom sans caractères spéciaux.</PopoverBody>
                      </Popover>

                    </Col>
                    <Col
                      xl={ 6 }
                      lg={ 6 }
                      md={ 6 }
                      sm={ 12 }
                      xs={ 12 }
                      style={ { color: 'white' } }
                    >
                      <Label for="lastName">Nom</Label>
                      <Input
                        type="text"
                        name="userLastName"
                        id="lastName"
                        placeholder="Votre nom de famille"
                        onChange={ this.handleChange }
                      />
                      <Popover
                        placement="right"
                        isOpen={ this.state.popoverLastNameOpen }
                        target="lastName"
                        toggle={() => this.toggle('lastName') }
                      >
                        <PopoverHeader style={ { backgroundColor: '#ff7c50' } }>Erreur</PopoverHeader>
                        <PopoverBody>Veuillez inscrire votre nom sans caractères spéciaux.</PopoverBody>
                      </Popover>
                    </Col>
                  </Row>
                </FormGroup>
                { /* <div className="g-recaptcha" data-sitekey="your_site_key">test</div> */ }
                <br />
                <Button>Envoyer</Button>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col
              style={ { textAlign: 'center', color: 'white' } }
            >
              <h3>Afin de vous fournir les meilleures réponses à vos questions Centrale Fitness met à votre
                disposition plusieurs services.
              </h3>
            </Col>
          </Row>
          <hr className="my-2" />
          <Row style={ { paddingTop: '50px', textAlign: 'center' } }>
            <Col xl={ 6 } lg={ 6 } md={ 6 } sm={ 12 } xs={ 12 } offset={ { sm: 0, xs: 0, md: 0, xl: 0, lg: 0 } }>
              <Col>
                <Img width={ '30%' } src={ Letter } />
              </Col>
              <Col style={ { color: 'white' } }>
                <h4 style={ { marginTop: '15px' } }>Par mail:</h4>
                <h4 style={ { marginBottom: '100px' } }>centrale-fitness<span
                  style={ { fontFamily: 'Circular,Helvetica,Arial,sans-serif' } }
                >@</span>outlook.fr</h4>
              </Col>
            </Col>
            <Col
              style={ { textAlign: 'center' } }
              xl={ 6 }
              lg={ 6 }
              md={ 6 }
              sm={ 12 }
              xs={ 12 }
              offset={ { sm: 0, xs: 0, md: 0, xl: 0, lg: 0 } }
            >
              <Col>
                <Img width={ '30%' } src={ Phone } />
              </Col>
              <Col style={ { color: 'white' } }>
                <h4 style={ { margin: '15px 0 15px 0' } }>Par téléphone:</h4>
                <h4 style={ { fontFamily: 'Circular,Helvetica,Arial,sans-serif' } }>+000-000-000</h4>
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>);
  }
}
