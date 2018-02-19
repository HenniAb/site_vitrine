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
        const h4Css = {
            color: "white",
            letterSpacing: "-0.02em !important",
            marginBottom:"50px",
        };
        return <Container>
            <Row style={{paddingTop: "100px"}}>
                <Col>
                    <h1 style={h1Css}>L'équipe Centrale Fitness</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4 style={h4Css}>Sur cet espace vous pouvez visualiser les différents étudiants que regroupe cette idée. Cette équipe a fait le pari fou de rendre le sport à la fois ludique et écologique afin de promouvoir les énergies renouvelables au service du sport.</h4>
                </Col>
            </Row>
            <Row style={{paddingTop: "30px", color: "white"}}>
                <Col xl={4} lg={4} md={4} sm={12}  xs={12} offset={{sm: 0, xs: 0, md: 0, xl: 0, lg: 0}}>
                    <Col style={{marginBottom: "40px"}}>
                        <Card style={{background: "linear-gradient(to right bottom, #EACB87, #E95C57)", border: "none"}}>
                            <CardBody>
                                <CardTitle><h3 style={{marginBottom: "30px"}}>Nils Peritore</h3></CardTitle>
                                <CardSubtitle><h4>Développeur du site vitrine</h4></CardSubtitle>
                            </CardBody>
                            <Img width="100%" src={require("../img/team/photo3.jpg")} alt="Card image cap" />
                            <CardBody>
                                <CardText><h5>Pleins d'idées et enthousiaste, il développe le site vitrine afin de promouvoir leur projet ambitieux et innovant à un large public.</h5></CardText>
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
                                <CardSubtitle><h4>En charge du système embarqué</h4></CardSubtitle>
                            </CardBody>
                            <Img width="100%" src={require("../img/team/christelle.jpg")} alt="Card image cap" />
                            <CardBody>
                                <CardText><h5>Consciencieuse, elle fait attention aux moindres détails qui semblent anodins mais essentiels pour la cohérence d'un projet. Elle peut gérer toutes les situations en restant toujours zen.</h5></CardText>
                                <CardText>Proverbe favoris :</CardText>
                                <CardText><i>"L'expérience nous enseigne à être prudent, le jugement seul nous apprend à être sage."</i> - H. de Charency</CardText>
                                <CardLink href="#">Voir plus</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col style={{marginBottom: "40px"}}>
                        <Card style={{background: "linear-gradient(to left bottom, #EACB87, #E95C57)", border: "none"}}>
                            <CardBody>
                                <CardTitle><h3 style={{marginBottom: "30px"}}>Léo Poulin</h3></CardTitle>
                                <CardSubtitle><h4>Dev Back End Python & Architecture Embarquée</h4></CardSubtitle>
                            </CardBody>
                            <Img width="100%" src={require("../img/team/leo.jpg")} alt="Card image cap" />
                            <CardBody>
                                <CardText><h5>En charge de la coordination des systèmes embarqués et de l'architecture logicielle, Léo permet de créer une solution performante et respectueuse de l'environnement.</h5></CardText>
                                <CardText>Proverbe favoris :</CardText>
                                <CardText><i>"La seule chose meilleure qu'une pizza est une pizza gratuite"</i> - léo</CardText>
                                <CardLink href="#">Voir plus</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                </Col>
                <Col xl={4} lg={4} md={4} sm={12}  xs={12} offset={{sm: 0, xs: 0, md: 0, xl: 0, lg: 0}}>
                    <Col style={{marginBottom: "40px"}}>
                        <Card style={{background: "linear-gradient(to right bottom, #EACB87, #E95C57)", border: "none"}}>
                            <CardBody>
                                <CardTitle><h3 style={{marginBottom: "30px"}}>Hadrien Daures</h3></CardTitle>
                                <CardSubtitle><h4>Architecte et ingénieur serveur</h4></CardSubtitle>
                            </CardBody>
                            <Img width="100%" src={require("../img/team/hadrien.jpg")} alt="Card image cap" />
                            <CardBody>
                                <CardText><h5>Avec des années d'expériences dans la conception et la mise en place de serveurs, Hadrien traite les requêtes des clients issus des applications smartphones, mais il gère aussi l'appairage et l'envoie de données du module au serveur.</h5></CardText>
                                <CardText>Proverbe favoris :</CardText>
                                <CardText><i>"La communication est une science difficile. Ce n'est pas une science exacte. Ca s'apprend et ça se cultive."</i> - Jean-Luc Lagardère</CardText>
                                <CardLink href="#">Voir plus</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col style={{marginBottom: "40px"}}>
                        <Card style={{background: "linear-gradient(to right top, #EACB87, #E95C57)", border: "none"}}>
                            <CardBody>
                                <CardTitle><h3 style={{marginBottom: "30px"}}>Rémy Villulles</h3></CardTitle>
                                <CardSubtitle><h4>Développeur Android</h4></CardSubtitle>
                            </CardBody>
                            <Img width="100%" src={require("../img/team/remy.jpg")} alt="Card image cap" />
                            <CardBody>
                                <CardText><h5>Leader du groupe depuis le début, il travail sur l'application android.</h5></CardText>
                                <CardText>Proverbe favoris :</CardText>
                                <CardText><i>"La meilleure condition de travail, c'est les vacances."</i> - Jean-Marie Gourio</CardText>
                                <CardLink href="#">Voir plus</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col style={{marginBottom: "40px"}}>
                        <Card style={{background: "linear-gradient(to left bottom, #EACB87, #E95C57)", border: "none"}}>
                            <CardBody>
                                <CardTitle><h3 style={{marginBottom: "30px"}}>Fabien Santoni</h3></CardTitle>
                                <CardSubtitle><h4>Développeur IOS</h4></CardSubtitle>
                            </CardBody>
                            <Img width="100%" src={require("../img/team/fabien.jpg")} alt="Card image cap" />
                            <CardBody>
                                <CardText><h5>En charge du développement de l'application IOS, Fabien conforte aussi l'équipe sur le développement et les choix du design.</h5></CardText>
                                <CardText>Proverbe favoris :</CardText>
                                <CardText><i>"La chose la plus importante en communication, c'est d'entendre ce qui n'est pas dit."</i> - Peter Drucker</CardText>
                                <CardLink href="#">Voir plus</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                </Col>

                <Col xl={4} lg={4} md={4} sm={12}  xs={12} offset={{sm: 0, xs: 0, md: 0, xl: 0, lg: 0}}>
                    <Col style={{marginBottom: "40px"}}>
                        <Card style={{background: "linear-gradient(to right bottom, #EACB87, #E95C57)", border: "none"}}>
                            <CardBody>
                                <CardTitle><h3 style={{marginBottom: "30px"}}>Julien Longayrou</h3></CardTitle>
                                <CardSubtitle><h4>Développeur de l'intranet-gérant</h4></CardSubtitle>
                            </CardBody>
                            <Img width="100%" src={require("../img/team/julien.jpg")} alt="Card image cap" />
                            <CardBody>
                                <CardText><h5>En charge de la plateforme pour les gérants de salles, Julien réfléchis et optimise une plateforme parfaitement conçus pour un administrateur de salle de sport.</h5></CardText>
                                <CardText>Proverbe favoris :</CardText>
                                <CardText><i>"C'est dans l'effort que l'on trouve la satisfaction et non dans la réussite. Un plein effort est une pleine victoire."</i> - Gandhi</CardText>
                                <CardLink href="#">Voir plus</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col style={{marginBottom: "40px"}}>
                        <Card style={{background: "linear-gradient(to right top, #EACB87, #E95C57)", border: "none"}}>
                            <CardBody>
                                <CardTitle><h3 style={{marginBottom: "30px"}}>Alexandre Rocat</h3></CardTitle>
                                <CardSubtitle><h4>Développeur de l'intranet-gérant</h4></CardSubtitle>
                            </CardBody>
                            <Img width="100%" src={require("../img/team/rocat.jpg")} alt="Card image cap" />
                            <CardBody>
                                <CardText><h5>En charge du développement front de l'intranet gérant et de la partie business intelligence.</h5></CardText>
                                <CardText>Proverbe favoris :</CardText>
                                <CardText><i>"Développer c'est passer du temps à en gagner."</i> - Rocat</CardText>
                                <CardLink href="#">Voir plus</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                </Col>
            </Row>
        </Container>
    }
}