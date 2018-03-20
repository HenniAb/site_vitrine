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
        return (
            <Jumbotron  style={{paddingTop: "100px", color: "white", background: "none"}}>
                <h1  style={{textAlign: "center"}} className="display-3">La Centrale Fitness reste à votre écoute !</h1>
                <h4 style={h4Css}  style={{textAlign: "center"}}>Afin de vous fournir les meilleurs réponses à vos questions la Centrale Fitness met à votre disposition plusieurs services.</h4>
                <hr className="my-2" />
                <Container>
                    <Row style={{paddingTop: "50px", textAlign: "center"}}>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12} offset={{sm: 0, xs: 0, md: 0, xl: 0, lg: 0}}>
                            <Col>
                                <Img width={"35%"} src={"../img/contacts/004-envelope.png"} />
                            </Col>
                            <Col>
                                <h5 style={{marginTop: "15px"}}>Par mail:</h5>
                                <h5 style={{marginBottom: "100px"}}>centrale@fitness.com</h5>
                            </Col>
                        </Col>
                        <Col style={{textAlign: "center"}} xl={6} lg={6} md={6} sm={12}  xs={12} offset={{sm: 0, xs: 0, md: 0, xl: 0, lg: 0}}>
                            <Col >
                                <Img width={"35%"} src={"../img/contacts/001-phone-number.png"} />
                            </Col>
                            <Col>
                                <h5 style={{marginTop: "15px"}}>Par téléphone:</h5>
                                <h5>+000-000-000</h5>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        )
    }
}
