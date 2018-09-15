import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import SVGInline from 'react-svg-inline';
import car from 'src/assets/images/notFoud/car.svg';

export default class notFound extends PureComponent {
  render() {
    return (
      <Container fluid>
        <Row
          style={ {
            paddingTop: '56px',
            background: 'linear-gradient(to right top, rgb(58, 97, 134), rgb(137, 37, 62)) no-repeat'
          } }
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
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '15px 0'
            } }
          >
            <Col
              className="homepageColText"
            >
              <h1 style={ { paddingBottom: '30px', fontWeight: 'bold' } }>Erreur
                <span style={ { fontFamily: 'sans-serif' } }> 404</span> !</h1>
              <h3 style={ { paddingBottom: '30px', fontWeight: 'bold' } }>Oh no bad luck !</h3>
              <h4>L'adresse de cette page est invalide ! Veuillez vous rediriger sur l'adresse d'une page valide.</h4>
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
              <SVGInline
                className="SVGInlineNotFound"
                width={ '80%' }
                alt="error 404 picture"
                svg={ car }
              />
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}
