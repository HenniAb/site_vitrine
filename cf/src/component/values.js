import React, { PureComponent } from "react"
import { Container , Row, Col } from 'react-grid-system';
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
import {DirectLink} from 'react-scroll';
import Img from 'react-image';

export default class myValues extends PureComponent{
    render(){
        const h1Css = {
            fontSize: "3em",
            color: "white",
            marginBottom:"30px",
            letterSpacing: "-0.02em !important"
        };
        return <Container>
            <Row style={{paddingTop: "100px"}}>
                <Col>
                    <h1 style={h1Css}>L'équipe Centrale Fitness</h1>
                </Col>
            </Row>
            <Row style={{paddingTop: "30px", color: "white"}}>
                <Col xl={4} lg={4} md={4} sm={12}  xs={12} offset={{sm: 0, xs: 0, md: 0, xl: 0, lg: 0}}>
                    <Col style={{marginBottom: "40px"}}>
                        <Card style={{background: "linear-gradient(to right bottom, #EACB87, #E95C57)", border: "none"}}>
                            <CardBody>
                                <CardTitle><h3 style={{marginBottom: "30px"}}>Nils Peritore</h3></CardTitle>
                                <CardSubtitle><h4>Développeur Web</h4></CardSubtitle>
                            </CardBody>
                            <Img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardBody>
                                <CardText><h5>Pleins d'idées et enthousiaste, il développe le site vitrine afin de présenter leur projet ambitieux et innovant à un large public.</h5></CardText>
                                <CardText>Proverbe favoris :</CardText>
                                <CardText><i>"Choisissez un travail que vous aimez et vous n'aurez pas à travailler un seul jour de votre vie."</i> - Confucius</CardText>
                                <CardLink href="#">Voir plus</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col style={{marginBottom: "40px"}}>
                        <Card style={{background: "linear-gradient(to right top, #EACB87, #E95C57)", border: "none"}}>
                            <CardBody>
                                <CardTitle><h3 style={{marginBottom: "30px"}}>Christelle Baumier</h3></CardTitle>
                                <CardSubtitle><h4>Développeur Web</h4></CardSubtitle>
                            </CardBody>
                            <Img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardBody>
                                <CardText><h5>Pleins d'idées et enthousiaste, il développe le site vitrine afin de présenter leur projet ambitieux et innovant à un large public.</h5></CardText>
                                <CardText>Proverbe favoris :</CardText>
                                <CardText><i>"Choisissez un travail que vous aimez et vous n'aurez pas à travailler un seul jour de votre vie."</i> - Confucius</CardText>
                                <CardLink href="#">Voir plus</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col style={{marginBottom: "40px"}}>
                        <Card style={{background: "linear-gradient(to left bottom, #EACB87, #E95C57)", border: "none"}}>
                            <CardBody>
                                <CardTitle><h3 style={{marginBottom: "30px"}}>Nils Peritore</h3></CardTitle>
                                <CardSubtitle><h4>Développeur Web</h4></CardSubtitle>
                            </CardBody>
                            <Img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardBody>
                                <CardText><h5>Pleins d'idées et enthousiaste, il développe le site vitrine afin de présenter leur projet ambitieux et innovant à un large public.</h5></CardText>
                                <CardText>Proverbe favoris :</CardText>
                                <CardText><i>"Choisissez un travail que vous aimez et vous n'aurez pas à travailler un seul jour de votre vie."</i> - Confucius</CardText>
                                <CardLink href="#">Voir plus</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                </Col>
                <Col xl={4} lg={4} md={4} sm={12}  xs={12} offset={{sm: 0, xs: 0, md: 0, xl: 0, lg: 0}}>
                    <Col style={{marginBottom: "40px"}}>
                        <Card style={{background: "linear-gradient(to right bottom, #EACB87, #E95C57)", border: "none"}}>
                            <CardBody>
                                <CardTitle><h3 style={{marginBottom: "30px"}}>Nils Peritore</h3></CardTitle>
                                <CardSubtitle><h4>Développeur Web</h4></CardSubtitle>
                            </CardBody>
                            <Img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardBody>
                                <CardText><h5>Pleins d'idées et enthousiaste, il développe le site vitrine afin de présenter leur projet ambitieux et innovant à un large public.</h5></CardText>
                                <CardText>Proverbe favoris :</CardText>
                                <CardText><i>"Choisissez un travail que vous aimez et vous n'aurez pas à travailler un seul jour de votre vie."</i> - Confucius</CardText>
                                <CardLink href="#">Voir plus</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col style={{marginBottom: "40px"}}>
                        <Card style={{background: "linear-gradient(to right top, #EACB87, #E95C57)", border: "none"}}>
                            <CardBody>
                                <CardTitle><h3 style={{marginBottom: "30px"}}>Christelle Baumier</h3></CardTitle>
                                <CardSubtitle><h4>Développeur Web</h4></CardSubtitle>
                            </CardBody>
                            <Img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardBody>
                                <CardText><h5>Pleins d'idées et enthousiaste, il développe le site vitrine afin de présenter leur projet ambitieux et innovant à un large public.</h5></CardText>
                                <CardText>Proverbe favoris :</CardText>
                                <CardText><i>"Choisissez un travail que vous aimez et vous n'aurez pas à travailler un seul jour de votre vie."</i> - Confucius</CardText>
                                <CardLink href="#">Voir plus</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col style={{marginBottom: "40px"}}>
                        <Card style={{background: "linear-gradient(to left bottom, #EACB87, #E95C57)", border: "none"}}>
                            <CardBody>
                                <CardTitle><h3 style={{marginBottom: "30px"}}>Nils Peritore</h3></CardTitle>
                                <CardSubtitle><h4>Développeur Web</h4></CardSubtitle>
                            </CardBody>
                            <Img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardBody>
                                <CardText><h5>Pleins d'idées et enthousiaste, il développe le site vitrine afin de présenter leur projet ambitieux et innovant à un large public.</h5></CardText>
                                <CardText>Proverbe favoris :</CardText>
                                <CardText><i>"Choisissez un travail que vous aimez et vous n'aurez pas à travailler un seul jour de votre vie."</i> - Confucius</CardText>
                                <CardLink href="#">Voir plus</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                </Col>

                <Col xl={4} lg={4} md={4} sm={12}  xs={12} offset={{sm: 0, xs: 0, md: 0, xl: 0, lg: 0}}>
                    <Col style={{marginBottom: "40px"}}>
                        <Card style={{background: "linear-gradient(to right bottom, #EACB87, #E95C57)", border: "none"}}>
                            <CardBody>
                                <CardTitle><h3 style={{marginBottom: "30px"}}>Nils Peritore</h3></CardTitle>
                                <CardSubtitle><h4>Développeur Web</h4></CardSubtitle>
                            </CardBody>
                            <Img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardBody>
                                <CardText><h5>Pleins d'idées et enthousiaste, il développe le site vitrine afin de présenter leur projet ambitieux et innovant à un large public.</h5></CardText>
                                <CardText>Proverbe favoris :</CardText>
                                <CardText><i>"Choisissez un travail que vous aimez et vous n'aurez pas à travailler un seul jour de votre vie."</i> - Confucius</CardText>
                                <CardLink href="#">Voir plus</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col style={{marginBottom: "40px"}}>
                        <Card style={{background: "linear-gradient(to right top, #EACB87, #E95C57)", border: "none"}}>
                            <CardBody>
                                <CardTitle><h3 style={{marginBottom: "30px"}}>Christelle Baumier</h3></CardTitle>
                                <CardSubtitle><h4>Développeur Web</h4></CardSubtitle>
                            </CardBody>
                            <Img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardBody>
                                <CardText><h5>Pleins d'idées et enthousiaste, il développe le site vitrine afin de présenter leur projet ambitieux et innovant à un large public.</h5></CardText>
                                <CardText>Proverbe favoris :</CardText>
                                <CardText><i>"Choisissez un travail que vous aimez et vous n'aurez pas à travailler un seul jour de votre vie."</i> - Confucius</CardText>
                                <CardLink href="#">Voir plus</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                </Col>
            </Row>
        </Container>
    }
}