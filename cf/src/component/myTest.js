import React, { PureComponent } from "react"
import { Container , Row, Col } from 'react-grid-system';
import { Jumbotron } from 'reactstrap';
import Img from 'react-image';

export default class myValues extends PureComponent{
    render(){
        const h4Css = {
            color: "white",
            letterSpacing: "-0.02em !important",
            marginTop:"30px",
        };
        return <Container>
            <Row style={{paddingTop: "100px", color: "white"}}>
                <Col>
                    <Jumbotron style={{background: "none"}}>
                        <h1 className="display-3">La Centrale Fitness reste à votre écoute !</h1>
                        <h4 style={h4Css}>Afin de vous fournir les meilleurs réponses à vos questions la Centrale Fitness met à votre disposition plusieurs services.</h4>
                        <hr className="my-2" />
                        <Row>
                            <Col>
                                <Row>
                                    <Col md={3}>
                                        <Img width={"90%"} src={require("../img/contacts/004-envelope.png")} />
                                    </Col>
                                    <Col>
                                        <h5>Par mail:</h5>
                                        <h5>centrale@fitness.com</h5>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Col md={3}>
                                        <Img width={"90%"} src={require("../img/contacts/001-phone-number.png")} />
                                    </Col>
                                    <Col>
                                        <h5>Par téléphone:</h5>
                                        <h5>+000-000-000</h5>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    }
}