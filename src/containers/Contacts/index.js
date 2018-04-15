import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Img from 'react-image';
import Letter from '../../assets/images/contacts/004-envelope.png';
import Phone from '../../assets/images/contacts/001-phone-number.png';

const h4Css = {
  color: 'white',
  letterSpacing: '-0.02em !important',
  marginTop: '30px',
  textAlign: 'center'
};
export default class myValues extends PureComponent {
  render() {
    return (
      <Jumbotron style={ { paddingTop: '100px', color: 'white', backgroundImage: 'linear-gradient(to top, #00c6fb 0%, #005bea 100%)' } }>
        <h1 style={ { textAlign: 'center' } } className="display-3">La Centrale Fitness reste à votre écoute !</h1>
        <Form>
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input type="email" name="email" id="Email" placeholder="Veuillez entrer votre adresse email" />
          </FormGroup>
          <FormGroup>
            <Label for="firstName">Prénom</Label>
            <Input type="name" name="password" id="firstName" placeholder="password placeholder" />

            <Label for="lastName">Nom</Label>
            <Input type="name" name="password" id="lastName" placeholder="password placeholder" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
        <h4 style={ h4Css }>Afin de vous fournir les meilleurs réponses à vos questions la Centrale Fitness met à votre
          disposition plusieurs services.</h4>
        <hr className="my-2" />
        <Container>
          <Row style={ { paddingTop: '50px', textAlign: 'center' } }>
            <Col xl={ 6 } lg={ 6 } md={ 6 } sm={ 12 } xs={ 12 } offset={ { sm: 0, xs: 0, md: 0, xl: 0, lg: 0 } }>
              <Col>
                <Img width={ '35%' } src={ Letter } />
              </Col>
              <Col>
                <h5 style={ { marginTop: '15px' } }>Par mail:</h5>
                <h5 style={ { marginBottom: '100px' } }>centrale@fitness.com</h5>
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
                <Img width={ '35%' } src={ Phone } />
              </Col>
              <Col>
                <h5 style={ { marginTop: '15px' } }>Par téléphone:</h5>
                <h5>+000-000-000</h5>
              </Col>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}
