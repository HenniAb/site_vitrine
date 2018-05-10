import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import SVGInline from 'react-svg-inline';
import iconSVG from '../assets/images/logoCf.svg';
import Fb from '../assets/images/iconesFooter/004-facebook.svg';
import Instagram from '../assets/images/iconesFooter/instagram.svg';
import Twitter from '../assets/images/iconesFooter/002-twitter-logo-silhouette.svg';
import Yt from '../assets/images/iconesFooter/001-youtube.svg';
import atContact from '../assets/images/iconesFooter/email.svg';


export default class myFooter extends PureComponent {
  render() {
    const firstRow = {
      backgroundColor: '#3c4858'
    };
    const secondRow = {
      backgroundColor: '#3e464e',
      padding: '10px 0 10px 0'
    };
    return (
      <footer>
        <Container fluid style={ { color: 'white', textAlign: 'center' } }>
          <Row style={ firstRow }>
            <Col
              style={ { marginTop: '30px' } }
              xl={ 4 }
              lg={ 4 }
              md={ 4 }
              sm={ 6 }
              xs={ 12 }
              offset={ { sm: 0, xs: 0, md: 0, xl: 0, lg: 0 } }
            >
              <Row>
                <Col>
                  <h4>Notre Philosophie</h4>
                </Col>
              </Row>
              <Row style={ { height: '90%', minHeight: '75px' } }>
                <Col style={ { margin: 'auto' } }>
                  <h5>Centrale Fitness accompagne les particuliers et les gérants de salles à une approche plus ludique
                    et viable du sport en salle !</h5>
                </Col>
              </Row>
            </Col>
            <Col
              style={ { marginTop: '30px' } }
              xl={ 4 }
              lg={ 4 }
              md={ 4 }
              sm={ 6 }
              xs={ 12 }
              offset={ { sm: 0, xs: 0, md: 0, xl: 0, lg: 0 } }
            >
              <Row>
                <Col>
                  <h4>Contacts</h4>
                </Col>
              </Row>
              <Row style={ { margin: '15px 0' } }>
                <Col>
                  <SVGInline
                    fill={ 'white' }
                    height="100px"
                    alt="contacts"
                    svg={ atContact }
                  />
                </Col>
              </Row>
              <Row>
                <Col style={ { margin: 'auto', lineHeight: '25px' } }>
                  <Row>
                    <Col>
                      <span>Téléphone : <span className="normalFont">+000-000-000</span></span>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <span>Email : centrale-fitness<span className="normalFont">@</span>outlook.fr</span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col
              style={ { marginTop: '30px' } }
              xl={ 4 }
              lg={ 4 }
              md={ 4 }
              sm={ 12 }
              xs={ 12 }
              offset={ { sm: 0, xs: 0, md: 0, xl: 0, lg: 0 } }
            >
              <Row style={ { marginBottom: '15px' } }>
                <Col>
                  <h4>Restez connectés !</h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <SVGInline height="110px" fill="white" svg={ iconSVG } />
                </Col>
              </Row>
              <Row>
                <Col>
                  <span>Centrale Fitness</span>
                </Col>
              </Row>
              <Row className="socialIconsFooterRow">
                <Col
                  className="socialIconsFooterCol"
                  style={ { marginRight: '18px' } }
                >
                  <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/centralefitness/">
                    <SVGInline
                      className="socialIconsFooter"
                      svg={ Fb }
                    />
                  </a>
                </Col>
                <Col
                  className="socialIconsFooterCol"
                  style={ { marginRight: '18px' } }
                >
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/centraleftiness/">
                    <SVGInline
                      className="socialIconsFooter"
                      svg={ Instagram }
                    />
                  </a>
                </Col>
                <Col
                  className="socialIconsFooterCol"
                  style={ { marginRight: '18px' } }
                >
                  <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/FitnessCentrale">
                    <SVGInline
                      className="socialIconsFooter"
                      svg={ Twitter }
                    />
                  </a>
                </Col>
                <Col
                  className="socialIconsFooterCol"
                  style={ { marginRight: '18px' } }
                >
                  <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/">
                    <SVGInline
                      className="socialIconsFooter"
                      svg={ Yt }
                    />
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={ secondRow }>
            <Col style={ { textAlign: 'left' } }>
              <span className="normalFont">@</span>Centrale Fitness<span className="normalFont"> 2018</span>
            </Col>
            <Col style={ { textAlign: 'right' } }>
              <span>Mentions légales</span>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
