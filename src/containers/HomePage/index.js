import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-scroll';
import { Button, Form, FormGroup, Label, Input, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import axios from 'axios/index';

import SVGInline from 'react-svg-inline';
import logo from 'src/assets/images/logoCf.svg';

import cycle from 'src/assets/images/iconesHomepage/car.png';
import module from 'src/assets/images/iconesHomepage/moduleIcone.png';
import eventLogo from 'src/assets/images/iconesHomepage/001-placeholder.png';
import newsletterLogo from 'src/assets/images/iconesHomepage/002-newsletter.png';
import cellPhone from 'src/assets/images/iphone_1.png';
import engine from 'src/assets/images/module.png';
import project from 'src/assets/images/iconesHomepage/003-web-management.svg';
import newsletter from 'src/assets/images/iconesHomepage/002-newsletter.svg';

export default class myBody extends PureComponent {
  constructor(props) {
    super(props);
    this.setLinkHovered = this.setLinkHovered.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isHovered1: false,
      isHovered2: false,
      isHovered3: false,
      isHovered4: false,
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

  setLinkHovered(nb) {
    if (nb === '1') {
      this.setState({
        isHovered1: !this.state.isHovered1
      });
    } else if (nb === '2') {
      this.setState({
        isHovered2: !this.state.isHovered2
      });
    } else if (nb === '3') {
      this.setState({
        isHovered3: !this.state.isHovered3
      });
    } else if (nb === '4') {
      this.setState({
        isHovered4: !this.state.isHovered4
      });
    }
  }

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


  render() {
    const containerCss = {
      color: '#F7F9F9',
      display: 'block',
      padding: '0',
      textAlign: 'center',
      verticalAlign: 'middle',
      cursor: 'default',
      overflow: 'hidden'
    };
    const h2Css1 = {
      letterSpacing: '-0.02em !important',
      fontSize: '40px',
      fontFamily: 'BjornLight',
      padding: '0 15px'
    };
    return (
      <Container fluid style={ containerCss }>
        <Row className="rowHomepage">
          <Col>
            <Row style={ { paddingTop: '56px', textAlign: 'center' } }>
              <Col
                className="firstRowHomepage"
                style={ { padding: '0', minHeight: '400px' } }
              >
                <Row>
                  <Col
                    style={ { marginTop: '10px' } }
                    className="alignItemsBg"
                  >
                    <SVGInline
                      alt="logo_of_header"
                      fill={ 'white' }
                      height={ '20vh' }
                      svg={ logo }
                    />
                  </Col>
                </Row>
                <Row>
                  <Col className="alignItemsBg">
                    <h2 style={ h2Css1 }>Centrale Fitness</h2>
                  </Col>
                </Row>
                <Row>
                  <Col className="alignItemsBg">
                    <h3 style={ { width: '90%', margin: 'auto', padding: '0 15px' } }>La solution innovante pour vous
                      motiver au sport tout en vous sensibilisant à la consommation d'énergie</h3>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="secondRowHomepage">
              <Col
                xl={ 3 }
                lg={ 3 }
                md={ 3 }
                sm={ 6 }
                xs={ 12 }
                offset={ { sm: 0, xs: 0, md: 0, xl: 0, lg: 0 } }
                className="homepageIcones_1"
                style={ { padding: '15px 0' } }
              >
                <Link
                  className="test6"
                  to="anchor1"
                  activeClass="active"
                  isDynamic={ true }
                  spy={ true }
                  smooth={ true }
                  duration={ 500 }
                >
                  <Row style={ { width: '50%', margin: 'auto', cursor: 'pointer' } }>
                    <Col className="secondRowHomepage_firstCol_1">
                      <img
                        alt="icone_cycle"
                        style={ { width: '4.2rem', height: 'auto' } }
                        src={ cycle }
                      />
                    </Col>
                  </Row>
                  <Row style={ { width: '75%', margin: 'auto', cursor: 'pointer' } }>
                    <Col className="secondRowHomepage_secondCol_1">
                      <h4 style={ { fontSize: '1.4rem' } }>Notre solution</h4>
                    </Col>
                  </Row>
                  <Row style={ { width: '50%', margin: 'auto', cursor: 'pointer' } }>
                    <Col className="secondRowHomepage_thirdCol_1" />
                  </Row>
                </Link>
              </Col>
              <Col
                xl={ 3 }
                lg={ 3 }
                md={ 3 }
                sm={ 6 }
                xs={ 12 }
                offset={ { sm: 0, xs: 0, md: 0, xl: 0, lg: 0 } }
                className="homepageIcones_2"
                style={ { padding: '15px 0' } }
              >
                <Link
                  style={ { top: '15px' } }
                  className="test6"
                  to="anchor2"
                  activeClass="active"
                  isDynamic={ true }
                  spy={ true }
                  smooth={ true }
                  duration={ 500 }
                >
                  <Row style={ { width: '50%', margin: 'auto', cursor: 'pointer' } }>
                    <Col className="secondRowHomepage_firstCol_2">
                      <img
                        alt="icone_module"
                        style={ { width: '4.2rem', height: 'auto' } }
                        src={ module }
                      />
                    </Col>
                  </Row>
                  <Row style={ { width: '75%', margin: 'auto', cursor: 'pointer' } }>
                    <Col className="secondRowHomepage_secondCol_2">
                      <h4 style={ { fontSize: '1.4rem' } }>Le module</h4>
                    </Col>
                  </Row>
                  <Row style={ { width: '50%', margin: 'auto', cursor: 'pointer' } }>
                    <Col className="secondRowHomepage_thirdCol_2" />
                  </Row>
                </Link>
              </Col>
              <Col
                xl={ 3 }
                lg={ 3 }
                md={ 3 }
                sm={ 6 }
                xs={ 12 }
                offset={ { sm: 0, xs: 0, md: 0, xl: 0, lg: 0 } }
                className="homepageIcones_3"
                style={ { padding: '15px 0' } }
              >
                <Link
                  style={ { top: '15px' } }
                  className="test6"
                  to="anchor3"
                  activeClass="active"
                  isDynamic={ true }
                  spy={ true }
                  smooth={ true }
                  duration={ 500 }
                >
                  <Row style={ { width: '50%', margin: 'auto', cursor: 'pointer' } }>
                    <Col className="secondRowHomepage_firstCol_3">
                      <img
                        alt="manage_your_own_business"
                        style={ { width: '4.2rem', height: 'auto' } }
                        src={ eventLogo }
                      />
                    </Col>
                  </Row>
                  <Row style={ { width: '75%', margin: 'auto', cursor: 'pointer' } }>
                    <Col className="secondRowHomepage_secondCol_3">
                      <h4 style={ { fontSize: '1.4rem' } }>Votre écosystème</h4>
                    </Col>
                  </Row>
                  <Row style={ { width: '50%', margin: 'auto', cursor: 'pointer' } }>
                    <Col className="secondRowHomepage_thirdCol_3" />
                  </Row>
                </Link>
              </Col>
              <Col
                xl={ 3 }
                lg={ 3 }
                md={ 3 }
                sm={ 6 }
                xs={ 12 }
                offset={ { sm: 0, xs: 0, md: 0, xl: 0, lg: 0 } }
                className="homepageIcones_4"
                style={ { padding: '15px 0' } }
              >
                <Link
                  style={ { top: '15px' } }
                  className="test6"
                  to="anchor4"
                  activeClass="active"
                  isDynamic={ true }
                  spy={ true }
                  smooth={ true }
                  duration={ 500 }
                >
                  <Row style={ { width: '50%', margin: 'auto', cursor: 'pointer' } }>
                    <Col className="secondRowHomepage_firstCol_4">
                      <img
                        alt="icone_money"
                        style={ { width: '4.2rem', height: 'auto' } }
                        src={ newsletterLogo }
                      />
                    </Col>
                  </Row>
                  <Row style={ { width: '75%', margin: 'auto', cursor: 'pointer' } }>
                    <Col className="secondRowHomepage_secondCol_4">
                      <h4 style={ { fontSize: '1.4rem' } }>Restez informé</h4>
                    </Col>
                  </Row>
                  <Row style={ { width: '50%', margin: 'auto', cursor: 'pointer' } }>
                    <Col className="secondRowHomepage_thirdCol_4" />
                  </Row>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row
          id="anchor1"
        >
          <Col
            xl={ 6 }
            lg={ 6 }
            md={ 6 }
            sm={ 12 }
            xs={ 12 }
            style={ {
              textAlign: 'left',
              color: 'black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '15px 0'
            } }
          >
            <Col
              className="homepageColText"
            >
              <h2 style={ { fontWeight: 'bold', paddingBottom: '30px' } }>L'écosystème ludique qui met en avant
                l'écologie et la fidélisation</h2>
              <h5>Notre solution est adaptée aux gérants de salle de sport qui souhaitent offrir une nouvelle expérience
                sportive à leurs utilisateurs.</h5>
              <h5 style={ { paddingTop: '15px' } }>Notre objectif à long terme est de réduire la consommation en
                électricité des salles de sport qui sont des infrastructures particulièrement énergivores.</h5>
            </Col>
          </Col>
          <Col
            xl={ 6 }
            lg={ 6 }
            md={ 6 }
            sm={ 12 }
            xs={ 12 }
            offset={ { sm: 0, xs: 0, md: 0, xl: 0, lg: 0 } }
            style={ {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            } }
          >
            <Col>
              <img
                style={ {
                  maxHeight: '90vh',
                  maxWidth: '100%'
                } }
                alt="cellphone centrale fitness"
                src={ cellPhone }
              />
            </Col>
          </Col>
        </Row>
        <Row
          id="anchor2"
          style={ { background: 'linear-gradient(to left bottom, #a6c0fe, #f68084) no-repeat' } }
        >
          <Col
            xl={ 6 }
            lg={ 6 }
            md={ 6 }
            sm={ 12 }
            xs={ 12 }
            push={ { xl: 6, lg: 6, md: 6 } }
            style={ {
              textAlign: 'left',
              color: 'black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '15px 0'
            } }
          >
            <Col
              className="homepageColText"
              style={ { color: 'white' } }
            >
              <h4 style={ { paddingBottom: '30px', fontWeight: 'bold' } }>Ce module permet de mesurer la production
                énergétique de l’utilisateur afin de lui proposer un ensemble d’activité.</h4>
              <h5 style={ { fontWeight: 'bold' } }>Une approche ludique pour les utilisateurs</h5>
              <p>Cette production d'électricité peut être consultée par l'utilisateur en temps réel sur son
                application.</p>
              <h5 style={ { paddingTop: '15px', fontWeight: 'bold' } }>Un aspect écologique</h5>
              <p>Cet écosystème est d’autant plus riche qu’il permet à l’utilisateur une sensibilisation écologique.</p>
            </Col>
          </Col>
          <Col
            xl={ 6 }
            lg={ 6 }
            md={ 6 }
            sm={ 12 }
            xs={ 12 }
            offset={ { sm: 0, xs: 0, md: 0, xl: 0, lg: 0 } }
            pull={ { xl: 6, lg: 6, md: 6 } }
            style={ {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            } }
          >
            <Col>
              <img
                style={ {
                  maxWidth: '80%'
                } }
                alt="module centrale fitness"
                src={ engine }
              />
            </Col>
          </Col>
        </Row>
        <Row
          id="anchor3"
        >
          <Col
            xl={ 6 }
            lg={ 6 }
            md={ 6 }
            sm={ 12 }
            xs={ 12 }
            style={ {
              textAlign: 'left',
              color: 'black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '15px 0 0 0'
            } }
          >
            <Col
              className="homepageColText"
            >
              <h4 style={ { fontWeight: 'bold', marginBottom: '30px' } }>Répondez aux besoins des sportifs !</h4>
              <h5 style={ { fontWeight: 'bold' } }>La création d’événements</h5>
              <p>Le gérant peut réunir ses adhérents autour d’un objectif commun pour une certaine durée. Les adhérents
                de la salle se rassemblent alors et se challengent entre eux.</p>
              <h5 style={ { fontWeight: 'bold', marginTop: '15px' } }>Réaliser des objectifs personnels</h5>
              <p>Les coachs peuvent créer des programmes adaptés à chaque sportif en fonction de leurs objectifs.</p>
            </Col>
          </Col>
          <Col
            xl={ 6 }
            lg={ 6 }
            md={ 6 }
            sm={ 12 }
            xs={ 12 }
            offset={ { sm: 0, xs: 0, md: 0, xl: 0, lg: 0 } }
            style={ {
              alignItems: 'center',
              justifyContent: 'center'
            } }
          >
            <Col
              style={ { margin: '0 50px', padding: '30px' } }
            >
              >
              <SVGInline
                alt="management_fitness_room"
                svg={ project }
              />
            </Col>
          </Col>
        </Row>
        <Row
          id="anchor4"
          style={ { background: 'linear-gradient(to left, #cfc7f8 0%, #ebbba7 100%)' } }
        >
          <Col
            xl={ 6 }
            lg={ 6 }
            md={ 6 }
            sm={ 12 }
            xs={ 12 }
            push={ { xl: 6, lg: 6, md: 6 } }
            style={ {
              textAlign: 'left',
              color: 'black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '15px 0'
            } }
          >
            <Col
              className="homepageColText"
              style={ { color: 'white' } }
            >
              <h4 style={ { fontWeight: 'bold', marginBottom: '30px' } }>Centrale Fitness reste à votre écoute !</h4>
              <h5 style={ { marginBottom: '15px' } }>Restez informé des nouveautés de Centrale
                Fitness avec notre service de Newsletter</h5>
              <Form
                style={ {
                  margin: 'auto',
                  marginTop: '50px'
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
                        toggle={ () => this.toggle('firstName') }
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
                        toggle={ () => this.toggle('lastName') }
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
          </Col>
          <Col
            xl={ 6 }
            lg={ 6 }
            md={ 6 }
            sm={ 12 }
            xs={ 12 }
            offset={ { sm: 0, xs: 0, md: 0, xl: 0, lg: 0 } }
            pull={ { xl: 6, lg: 6, md: 6 } }
            style={ {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            } }
          >
            <Col
              style={ { padding: '80px' } }
            >
              <SVGInline
                alt="newsletter_centrale_fitness"
                svg={ newsletter }
              />
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}
