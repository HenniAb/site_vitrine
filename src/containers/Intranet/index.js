import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import SVGInline from 'react-svg-inline';
import { Card, CardText, CardBody } from 'reactstrap';
import { Link } from 'react-scroll';

import link from '../../assets/images/intranet/001-broken-link.svg';
import calendar from '../../assets/images/intranet/002-calendar.svg';
import charity from '../../assets/images/intranet/003-charity.svg';

import test1 from '../../assets/images/intranet/001-event.png';
import test2 from '../../assets/images/intranet/003-goal.png';

export default class media extends PureComponent {
  render() {
    return (
      <Container fluid>
        <Row className="rowHomepage">
          <Col>
            <Row style={ { paddingTop: '56px', textAlign: 'center' } }>
              <Col
                className="firstRowIntranet"
                style={ { minHeight: '92vh' } }
              >
                <Row>
                  <Col className="alignItemsBg">
                    <h2 style={ { fontSize: '40px', paddingTop: '40px' } }>Un Intranet dédié aux gérants de salles de
                      sports</h2>
                  </Col>
                </Row>
                <Row>
                  <Col className="alignItemsBg">
                    <h3 style={ { width: '90%', margin: 'auto', padding: '15px 15px' } }>Une plateforme unique en son
                      genre
                      permettant de vous aider à gérer et d’optimiser la fréquentions de votre salle</h3>
                  </Col>
                </Row>
                <Row>
                  <Col xl={ 4 } lg={ 4 } md={ 4 } sm={ 12 } xs={ 12 } style={ { margin: '30px 0' } }>
                    <Link
                      className="test6"
                      to="anchor1"
                      activeClass="active"
                      isDynamic={ true }
                      spy={ true }
                      smooth={ true }
                      duration={ 500 }
                    >
                      <Card
                        className="secondRowIntranet_firstElem"
                        style={ {
                          backgroundColor: 'rgba(0, 0, 0, 0.5)',
                          border: 'none',
                          margin: '20px 0'
                        } }
                      >
                        <SVGInline
                          id="SVGIntranet"
                          fill={ 'white' }
                          alt="challenge"
                          svg={ calendar }
                        />
                        <CardBody>
                          <CardText><h5>Gérez vos événements</h5></CardText>
                          <CardText>Rassemblez le plus grand nombre de personnes autour de différentes
                            thématiques</CardText>
                        </CardBody>
                      </Card>
                    </Link>
                  </Col>
                  <Col xl={ 4 } lg={ 4 } md={ 4 } sm={ 12 } xs={ 12 } style={ { margin: '30px 0' } }>
                    <Link
                      className="test6"
                      to="anchor2"
                      activeClass="active"
                      isDynamic={ true }
                      spy={ true }
                      smooth={ true }
                      duration={ 500 }
                    >
                      <Card
                        className="secondRowIntranet_secondElem"
                        style={ {
                          backgroundColor: 'rgba(0, 0, 0, 0.5)',
                          border: 'none',
                          margin: '20px 0'
                        } }
                      >
                        <SVGInline
                          id="SVGIntranet"
                          fill={ 'white' }
                          alt="challenge"
                          svg={ link }
                        />
                        <CardBody>
                          <CardText><h5>Renforcez vos liens</h5></CardText>
                          <CardText>Grâce à son aspect sociale basé sur la communication, développez vos relations avec
                            vos clients</CardText>
                        </CardBody>
                      </Card>
                    </Link>
                  </Col>
                  <Col xl={ 4 } lg={ 4 } md={ 4 } sm={ 12 } xs={ 12 } style={ { margin: '30px 0' } }>
                    <Link
                      className="test6"
                      to="anchor3"
                      activeClass="active"
                      isDynamic={ true }
                      spy={ true }
                      smooth={ true }
                      duration={ 500 }
                    >
                      <Card
                        className="secondRowIntranet_thirdElem"
                        style={ {
                          backgroundColor: 'rgba(0, 0, 0, 0.5)',
                          border: 'none',
                          margin: '20px 0'
                        } }
                      >
                        <SVGInline
                          id="SVGIntranet"
                          fill={ 'white' }
                          alt="challenge"
                          svg={ charity }
                        />
                        <CardBody>
                          <CardText><h5>Fidélisez vos clients</h5></CardText>
                          <CardText>Parce que chaque client est différent, Centrale Fitness répond aux objectifs de
                            chacun</CardText>
                        </CardBody>
                      </Card>
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row
          id="anchor1"
          style={ { background: '#fbf8f6' } }
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
              <h2 style={ { fontWeight: 'bold', paddingBottom: '30px' } }>Gérez l'écosystème de votre salle !</h2>
              <h5 style={ { paddingTop: '15px' } }>Créer des événements afin de rassembler et de sociabiliser l’ensemble
                de vos utilisateurs autour d’un thème en commun. Etablissez une atmosphère de travail ludique et
                collectif pour parfaire un but commun. Donner la possibilité à vos clients de remporter des gains afin
                de récompenser les meilleures performances.</h5>
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
              justifyContent: 'center',
              height: '80vh'
            } }
          >
            <Col>
              <img
                style={ {
                  maxHeight: '50vh',
                  maxWidth: '100%',
                  display: 'block',
                  margin: 'auto'
                } }
                alt="événements_centrale_fitness"
                src={ test1 }
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
              <h2 style={ { paddingBottom: '30px', fontWeight: 'bold' } }>Communiquez avec votre client</h2>
              <h5 style={ { paddingTop: '15px' } }>Un utilisateur à une question à vous poser ?
                Aucun souci, la plateforme vous donne aussi la possibilité de communiquer avec un utilisateur
                directement par le biais d’une messagerie.</h5>
            </Col>
          </Col>
          <Col
            xl={ 6 }
            lg={ 6 }
            md={ 6 }
            sm={ 12 }
            xs={ 12 }
            pull={ { xl: 6, lg: 6, md: 6 } }
            className="colBgSecond"
            style={ {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '80vh',
              padding: '0'
            } }
          >
            <span style={ { display: 'none' } }>test</span>
          </Col>
        </Row>
        <Row
          id="anchor3"
          style={ { background: '#fbf8f6' } }
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
              <h2 style={ { fontWeight: 'bold', marginBottom: '30px' } }>Personnalisés les programmes de vos clients
                !</h2>
              <h5 style={ { marginTop: '15px' } }>Outre le collectif, la plateforme se centre aussi
                au niveau individuel afin de répondre aux demandes de chaque client. Les gérants de salles ont la
                possibilité d’établir des programmes personnalisés pour que chaque client fixe et réalise ses propres
                objectifs.</h5>
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
              justifyContent: 'center',
              height: '80vh'
            } }
          >
            <Col>
              <img
                style={ {
                  maxHeight: '50vh',
                  maxWidth: '100%',
                  display: 'block',
                  margin: 'auto'
                } }
                alt="programmes_personnalisés_centrale_fitness"
                src={ test2 }
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
              justifyContent: 'center'
            } }
          >
            <Col
              className="homepageColText"
              style={ { color: 'white' } }
            >
              <h2 style={ { fontWeight: 'bold', marginBottom: '30px' } }>Analysez les efforts de vos clients ainsi que
                votre écosystème</h2>
              <h5 style={ { marginBottom: '15px' } }>Consultez l’ensemble des statistiques établis
                dans votre salle. Analysez la fréquentation des machines, l’énergie total produite ou encore les progrès
                de chaque utilisateur afin de les suivre en temps réel !</h5>
              <h5 style={ { marginBottom: '15px' } }>Fréquentation, utilisation machine, Energie total
                produite, gain d'utilisateur par mois sont autant d'atouts qui serviront à optimiser votre entreprise
                !</h5>
            </Col>
          </Col>
          <Col
            xl={ 6 }
            lg={ 6 }
            md={ 6 }
            sm={ 12 }
            xs={ 12 }
            pull={ { xl: 6, lg: 6, md: 6 } }
            className="colBgFourth"
            style={ {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '80vh'
            } }
          >
            <span style={ { display: 'none' } }>test</span>
          </Col>
        </Row>
      </Container>
    );
  }
}
