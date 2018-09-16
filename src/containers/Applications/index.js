/**
 * Header view (if you want a header) with links to switch page.
 */
import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import SVGInline from 'react-svg-inline';
import { Link } from 'react-scroll';

import appStore from '../../assets/images/store.png';
import qrcode from '../../assets/images/qrcode.png';

import communication from '../../assets/images/appli/003-chat.svg';
import challenge from '../../assets/images/appli/002-medal-hanging-of-a-ribbon.svg';
import analyze from '../../assets/images/appli/001-analysis.svg';

import checkerboardCommunication from '../../assets/images/appli/communication.svg';
import checkerboardChallenge from '../../assets/images/appli/challenge.svg';
import checkerboardRoom from '../../assets/images/appli/room.svg';
import checkerboardProgress from '../../assets/images/appli/progress.svg';


export default class Applications extends PureComponent {
  render() {
    return (
      <Container fluid>
        <Row
          style={ {
            minHeight: '85vh',
            padding: '90px 0 20px 0',
            background: 'linear-gradient(to top right, #3a6186, #89253e)'
          } }
        >
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
                style={ { maxWidth: '255px', display: 'block', margin: 'auto' } }
                alt="connection par QR code"
                src={ qrcode }
              />
            </Col>
          </Col>
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
              justifyContent: 'center'
            } }
          >
            <Col
              className="homepageColText"
              style={ { color: 'white' } }
            >
              <h5 style={ { paddingBottom: '30px', fontWeight: 'bold' } }>Donnez vie à l’écosystème Centrale Fitness en
                téléchargeant l’application disponible sur iOS et Android !</h5>
              <h5>Etape un : Commencez votre exercice pour produire une énergie verte et profitez de l’ensemble des
                services.</h5>
              <h5 style={ { paddingTop: '15px' } }>Etape deux : Pédalez pour produire une énergie
                verte
                et interagissez avec l’ensemble des services de votre application.</h5>
              <p style={ { paddingTop: '30px' } }>Analysez vos progrès, défiez vos amis, et suivez les événements de
                votre salle labellisée Centrale Fitness. Vous avez tant à découvrir sur notre application !</p>
              <Row>
                <Col>
                  <a href="http://play.google.com/store/apps/details?id=">
                    <img
                      style={ { width: '230px', display: 'block', margin: 'auto' } }
                      alt="app store and play store"
                      src={ appStore }
                    />
                  </a>
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
        <Row
          style={ { paddingTop: '20px' } }
        >
          <Col>
            <Link
              to="anchor1"
              activeClass="active"
              isDynamic={ true }
              spy={ true }
              smooth={ true }
              duration={ 500 }
            >
              <button
                style={ { display: 'block', margin: 'auto' } }
                className="btnVP"
              >

                <h5
                  style={ { padding: '10px', margin: 'auto', transform: 'skewX(15deg)' } }
                >
                  En savoir plus &darr;
                </h5>
              </button>
            </Link>
          </Col>
        </Row>
        <Row style={ { padding: '90px 0 60px 0' } }>
          <Col
            xl={ 4 }
            lg={ 4 }
            md={ 6 }
            sm={ 12 }
            xs={ 12 }
            style={ { minHeight: '500px' } }
          >
            <Row style={ { position: 'relative' } }>
              <div
                className="circleIcon"
              >
                <Row style={ { height: '100%' } }>
                  <div className="circleIconRow">
                    <SVGInline
                      fill={ 'white' }
                      style={ { maxHeight: '80%' } }
                      alt="communication"
                      svg={ communication }
                    />
                  </div>
                </Row>
              </div>
            </Row>
            <Row>
              <Col
                style={ { width: '50%', textAlign: 'center' } }
              >
                <h2 style={ { fontWeight: 'bold', padding: '30px 0', margin: 'auto', width: '80%' } }>Communiquer</h2>
                <h5 style={ { margin: 'auto', width: '80%' } }>Etablissez des liens avec les autres abonnés de votre
                  salle</h5>
              </Col>
            </Row>
          </Col>
          <Col
            xl={ 4 }
            lg={ 4 }
            md={ 6 }
            sm={ 12 }
            xs={ 12 }
            style={ { minHeight: '500px' } }
          >
            <Row style={ { position: 'relative' } }>
              <div
                className="circleIcon"
              >
                <Row style={ { height: '100%' } }>
                  <div className="circleIconRow">
                    <SVGInline
                      id="SVGInlineChallenge"
                      fill={ 'white' }
                      style={ { maxHeight: '80%' } }
                      alt="challenge"
                      svg={ challenge }
                    />
                  </div>
                </Row>
              </div>
            </Row>
            <Row>
              <Col
                style={ { width: '50%', textAlign: 'center' } }
              >
                <h2 style={ { fontWeight: 'bold', padding: '30px 0', margin: 'auto', width: '80%' } }>Défier</h2>
                <h5 style={ { margin: 'auto', width: '80%' } }>Relevez des challenges et suivez l’actualité de votre
                  salle</h5>
              </Col>
            </Row>
          </Col>
          <Col
            xl={ 4 }
            lg={ 4 }
            md={ 12 }
            sm={ 12 }
            xs={ 12 }
            style={ { minHeight: '500px' } }
          >
            <Row style={ { position: 'relative' } }>
              <div
                className="circleIcon"
              >
                <Row style={ { height: '100%' } }>
                  <div className="circleIconRow">
                    <SVGInline
                      id="SVGInlineAnalyze"
                      fill={ 'white' }
                      style={ { maxHeight: '80%' } }
                      alt="analyse"
                      svg={ analyze }
                    />
                  </div>
                </Row>
              </div>
            </Row>
            <Row>
              <Col
                style={ { width: '50%', textAlign: 'center' } }
              >
                <h2 style={ { fontWeight: 'bold', padding: '30px 0', margin: 'auto', width: '80%' } }>Analyser</h2>
                <h5
                  id="anchor1"
                  style={ { margin: 'auto', width: '80%' } }
                >
                  Consultez votre progression et fixez vos objectifs
                </h5>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row
          style={ { minHeight: '250px' } }
        >
          <Col
            xl={ 6 }
            lg={ 6 }
            md={ 6 }
            sm={ 12 }
            xs={ 12 }
            className="colCheckerboardOne"
          >
            <Row style={ { height: '70px' } }>
              <Col>
                <h3 style={ { padding: '15px 0', textAlign: 'center' } }>Votre Communauté</h3>
              </Col>
            </Row>
            <Row align="center" style={ { height: 'auto' } }>
              <Col
                xl={ 3 }
                lg={ 3 }
                md={ 12 }
                sm={ 12 }
                xs={ 12 }
                style={ { margin: 'auto', padding: '15px', boxShadow: '2px 0px 0px 0px #333333' } }
              >
                <Col style={ { width: '100%' } }>
                  <SVGInline
                    className="svgIcon1"
                    fill={ '#333333' }
                    alt="community"
                    svg={ checkerboardCommunication }
                  />
                </Col>
              </Col>
              <Col
                xl={ 9 }
                lg={ 9 }
                md={ 12 }
                sm={ 12 }
                xs={ 12 }
                style={ { margin: 'auto', padding: '15px 30px', justifyContent: 'center' } }
              >
                <p>Suivez le fil d’actualité de vos amis et partager vos réussites sur le vôtre</p>
                <p>Communiquez avec vos amis grâce à votre messagerie</p>
              </Col>
            </Row>
          </Col>
          <Col
            xl={ 6 }
            lg={ 6 }
            md={ 6 }
            sm={ 12 }
            xs={ 12 }
            className="colCheckerboardTwo"
          >
            <Row style={ { height: '70px' } }>
              <Col>
                <h3 style={ { padding: '15px 0', textAlign: 'center' } }>Vos Compétitions</h3>
              </Col>
            </Row>
            <Row align="center" style={ { height: 'auto' } }>
              <Col
                xl={ 3 }
                lg={ 3 }
                md={ 12 }
                sm={ 12 }
                xs={ 12 }
                style={ { margin: 'auto', padding: '15px', boxShadow: '2px 0px 0px 0px #fbf8f6' } }
              >
                <Col style={ { width: '100%' } }>
                  <SVGInline
                    className="svgIcon1"
                    fill={ '#fbf8f6' }
                    alt="challenges"
                    svg={ checkerboardChallenge }
                  />
                </Col>
              </Col>
              <Col
                xl={ 9 }
                lg={ 9 }
                md={ 12 }
                sm={ 12 }
                xs={ 12 }
                style={ { margin: 'auto', padding: '15px 30px', justifyContent: 'center' } }
              >
                <p>Envoyez des défis à vos amis et surpassez-vous. Le gagnant obtiendra des récompenses</p>
                <p>Visualisez le classement des sportifs produisant le plus d’électricité dans votre salle</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={ { minHeight: '250px' } }>
          <Col
            xl={ 6 }
            lg={ 6 }
            md={ 6 }
            sm={ 12 }
            xs={ 12 }
            push={ { xl: 6, lg: 6, md: 6 } }
            className="colCheckerboardOne"
          >
            <Row style={ { height: '70px' } }>
              <Col>
                <h3 style={ { padding: '15px 0', textAlign: 'center' } }>Vos Progrès</h3>
              </Col>
            </Row>
            <Row align="center" className="retouche" style={ { height: 'auto' } }>
              <Col
                xl={ 3 }
                lg={ 3 }
                md={ 12 }
                sm={ 12 }
                xs={ 12 }
                style={ { margin: 'auto', padding: '15px', boxShadow: 'rgb(50, 50, 50) 7px 0px 0px -5px' } }
              >
                <Col style={ { width: '100%' } }>
                  <SVGInline
                    className="svgIcon1"
                    fill={ '#333333' }
                    alt="progress"
                    svg={ checkerboardProgress }
                  />
                </Col>
              </Col>
              <Col
                xl={ 9 }
                lg={ 9 }
                md={ 12 }
                sm={ 12 }
                xs={ 12 }
                style={ { margin: 'auto', padding: '15px 30px', justifyContent: 'center' } }
              >
                <p>Analysez vos statistiques pour mieux comprendre vos performances</p>
                <p>Suivez votre production d’énergie en temps réel grâce à une jauge et améliorez vos performances</p>
              </Col>
            </Row>
          </Col>
          <Col
            xl={ 6 }
            lg={ 6 }
            md={ 6 }
            sm={ 12 }
            xs={ 12 }
            pull={ { xl: 6, lg: 6, md: 6 } }
            className="colCheckerboardTwo"
          >
            <Row style={ { height: '70px' } }>
              <Col>
                <h3 style={ { padding: '15px 0', textAlign: 'center' } }>Votre Salle</h3>
              </Col>
            </Row>
            <Row align="center" style={ { height: 'auto' } }>
              <Col
                xl={ 3 }
                lg={ 3 }
                md={ 12 }
                sm={ 12 }
                xs={ 12 }
                style={ { margin: 'auto', padding: '15px', boxShadow: '2px 0px 0px 0px #fbf8f6' } }
              >
                <Col style={ { width: '100%' } }>
                  <SVGInline
                    className="svgIcon1"
                    fill={ '#fbf8f6' }
                    alt="Salle de sport"
                    svg={ checkerboardRoom }
                  />
                </Col>
              </Col>
              <Col
                xl={ 9 }
                lg={ 9 }
                md={ 12 }
                sm={ 12 }
                xs={ 12 }
                style={ { margin: 'auto', padding: '15px 30px', justifyContent: 'center' } }
              >
                <p>Suivez l’actualité de votre salle pour vous tenir au courant des prochains évènements</p>
                <p>Réalisez les challenges lancés par votre salle et obtenez en récompense des points de fidélité chez
                  nos partenaires</p>
                <p>Les coachs de votre salle peuvent vous concocter des programmes d’entrainement personnalisés en
                  fonction de vos objectifs</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
      ;
  }
}
