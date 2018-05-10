import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Carousel from 'nuka-carousel';

import pic1 from '../../assets/images/caroussel/1.jpg';
import pic2 from '../../assets/images/caroussel/2.jpg';
import pic3 from '../../assets/images/caroussel/3.jpg';
import pic4 from '../../assets/images/caroussel/4.jpg';
import pic5 from '../../assets/images/caroussel/5.jpg';
import pic6 from '../../assets/images/caroussel/6.jpg';

export default class media extends PureComponent {
  render() {
    return (
      <Container fluid>
        <Row style={ {
          paddingTop: '90px',
          background: 'linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)'
        } }
        >
          <Col>
            <Row style={ { paddingBottom: '30px', textAlign: 'center', color: 'white' } }>
              <Col>
                <h4>Ensemble, pédalons pour l'écosystème ludique et écologique mis à profit pour les sportifs.</h4>
              </Col>
            </Row>
            <Row style={ { paddingBottom: '30px' } }>
              <Col>
                <Carousel autoplay={ true } cellAlign={ 'center' } cellSpacing={ 50 } style={ { maxHeight: '80vh' } }>
                  <img alt="fitness room 1" src={ pic1 } />
                  <img alt="fitness room 2" src={ pic2 } />
                  <img alt="fitness room 3" src={ pic3 } />
                  <img alt="fitness room 4" src={ pic4 } />
                  <img alt="fitness room 5" src={ pic5 } />
                  <img alt="fitness room 6" src={ pic6 } />
                </Carousel>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={ { padding: '30px 15px' } }>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              title="Centrale Fitness vidéo de présentation"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/4Hl1WAGKjMc"
              allowFullScreen
              frameBorder="0"
            />
          </div>
        </Row>
      </Container>
    );
  }
}
