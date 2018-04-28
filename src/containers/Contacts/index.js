import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Img from 'react-image';
import Letter from '../../assets/images/contacts/004-envelope.png';
import Phone from '../../assets/images/contacts/001-phone-number.png';

export default class myValues extends PureComponent {
  render() {
    return (
      <Container
        fluid
        style={ {
          padding: '90px 0 30px 0',
          backgroundImage: 'linear-gradient(to left bottom, #FF5889, #FFBD68)'
        } }
      >
        <Row>
          <Col style={ { textAlign: 'center', paddingBottom: '30px', color: 'white' } }>
            <h2>La Centrale Fitness reste à votre écoute !</h2>
          </Col>
        </Row>
        <Row>
          <Col style={ { textAlign: 'center', paddingBottom: '30px', color: 'white' } }>
            <h3>Restez informer des nouveautés de Centrale
              Fitness
              avec notre service de Newsletter</h3>
            <hr className="my-2" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>
                <Form style={ { maxWidth: '700px', margin: 'auto', paddingBottom: '90px' } }>
                  <Row>
                    <Col style={ { color: 'white' } }>
                      <FormGroup>
                        <Label for="Email">Email</Label>
                        <Input type="email" name="email" id="Email" placeholder="Veuillez entrer votre adresse email" />
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
                        <Input type="text" name="firstNameData" id="firstName" placeholder="Votre prénom" />
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
                        <Input type="text" name="lastNameData" id="lastName" placeholder="Votre nom de famille" />
                      </Col>
                    </Row>
                  </FormGroup>
                  { /* <div className="g-recaptcha" data-sitekey="your_site_key">test</div> */ }
                  <br />
                  <Button>Submit</Button>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col style={ { textAlign: 'center', color: 'white' } }>
                <h3>Afin de vous fournir les meilleurs réponses à vos questions la Centrale Fitness met
                  à
                  votre
                  disposition plusieurs services.</h3>
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
                  <h4 style={ { marginBottom: '100px' } }>centrale<span
                    style={ { fontFamily: 'Circular,Helvetica,Arial,sans-serif' } }
                  >@</span>fitness.com</h4>
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
      </Container>
    );
  }
}
