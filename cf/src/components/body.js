import React, { PureComponent } from "react"
import Img from 'react-image';
import { Container , Row, Col } from 'react-grid-system';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

export default class myBody extends PureComponent{
    constructor(props){
        super(props);

        this.setLinkHovered = this.setLinkHovered.bind(this);
        this.state = {
            isHovered1: false,
            isHovered2: false,
            isHovered3: false,
            isHovered4: false,
        };
    }
    componentDidMount() {

        Events.scrollEvent.register('begin', function(to, element) {
            //console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function(to, element) {
            //console.log("end", arguments);
        });

        scrollSpy.update();

    }
    setLinkHovered(nb){
        if (nb === "1"){
            this.setState({
                isHovered1: !this.state.isHovered1
            });
        }
        else if (nb === "2"){
            this.setState({
                isHovered2: !this.state.isHovered2
            });
        }
        else if (nb === "3"){
            this.setState({
                isHovered3: !this.state.isHovered3
            });
        }
        else if (nb === "4"){
            this.setState({
                isHovered4: !this.state.isHovered4
            });
        }
    }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    scrollToTop() {
        scroll.scrollToTop();
    }
    scrollToBottom() {
        scroll.scrollToBottom();
    }
    scrollTo() {
        scroll.scrollTo(100);
    }
    scrollMore() {
        scroll.scrollMore(100);
    }
    handleSetActive(to) {
        console.log("ready to add css");
    }

    render(){
        const containerCss = {
            color: "#F7F9F9",
            display: "table-cell",
            padding: "calc(2%)",
            textAlign: "center",
            verticalAlign: "middle",
            cursor: "default"
        };
        const colCss = {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        };
        const imageCss = {
            minWidth: "230px",
            maxHeight: "620px"
        };
        const h1Css = {
            textAlign:"center",
            fontSize: "3em",
            marginBottom:"30px",
            letterSpacing: "-0.02em !important"
        };
        const h2Css = {
            marginBottom:"60px",
            letterSpacing: "-0.02em !important",
            fontSize: "40px",
        };
        const h3Css_1 = {
            fontSize: "1.2em",
            marginBottom:"30px",
            letterSpacing: "-0.02em !important"
        };
        const h3Css_2 = {
            fontSize: "1.2em",
            letterSpacing: "-0.02em !important"
        };
        const test = {
            borderRadius : "50%",
            height: "12px",
            width: "12px",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            border: "none",
            verticalAlign: "middle",
            display: "inline-block",
            outline: "none",
            cursor: "pointer",
        };
        const test1 = {
            backgroundColor: "rgba(255, 255, 255, 1)",
            borderRadius : "50%",
            height: "12px",
            width: "12px",
            border: "none",
            verticalAlign: "middle",
            display: "inline-block",
            outline: "none",
            cursor: "pointer",
        };

        return (
            <Container fluid style={containerCss}>
                <Link style={{position: "fixed", zIndex: "3", bottom: "30px"}} className="test6" to="anchor3"
                      isDynamic={true}
                      spy={true} smooth={true} duration={500}>
                    <Img src={"../img/down-arrow.png"} height={"20px"}/>
                </Link>

                <nav style={{position: "fixed", zIndex: "3", right: "30px", top: "calc(50% - 51.5px)"}}>
                    <ul style={{listStyleType : "none"}}>
                        <li>
                            <Link style={{top: "15px"}} className="test6" to="anchor1" activeClass="active" isDynamic={true} spy={true} smooth={true} duration={500}>
                                <input onMouseEnter={() => this.setLinkHovered("1")}
                                       onMouseLeave={() => this.setLinkHovered("1")}
                                       style={this.state.isHovered1 ? test1 : test} type="button"/>
                            </Link>
                        </li>
                        <li>
                            <Link style={{top: "15px"}}  className="test6" to="anchor2" activeClass="active" isDynamic={true} spy={true} smooth={true} duration={500}>
                                <input onMouseEnter={() => this.setLinkHovered("2")}
                                       onMouseLeave={() => this.setLinkHovered("2")}
                                       style={this.state.isHovered2 ? test1 : test} type="button"/>
                            </Link>
                        </li>
                        <li>
                            <Link style={{top: "15px"}} className="test6" to="anchor3" activeClass="active" isDynamic={true} spy={true} smooth={true} duration={500}>
                                <input onMouseEnter={() => this.setLinkHovered("3")}
                                       onMouseLeave={() => this.setLinkHovered("3")}
                                       style={this.state.isHovered3 ? test1 : test} type="button"/>
                            </Link>
                        </li>
                        <li>
                            <Link style={{top: "15px"}} className="test6" to="anchor4" activeClass="active" isDynamic={true} spy={true} smooth={true} duration={500}>
                                <input onMouseEnter={() => this.setLinkHovered("4")}
                                       onMouseLeave={() => this.setLinkHovered("4")}
                                       style={this.state.isHovered4 ? test1 : test} type="button"/>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <Row id="anchor1" style={{marginTop: "10px"}}/>
                <Row style={{marginTop: "50px"}}>
                    <Col style={colCss}
                         xl={8} lg={8} md={8} sm={10}  xs={10} offset={{sm: 1, xs: 1, md: 0, xl: 0, lg: 0}}>
                        <Col>
                            <h1 style={h1Css}>Centrale Fitness</h1>
                            <h2 style={h2Css}>Le sport ludique qui met en avant l'écologie et la fidélisation</h2>
                            <h3 style={h3Css_1}>Centrale fitness est une solution destinée aux salles de sport.
                                Cette écosystème permet de récupérer l’énergie produite par les sportifs, sous forme
                                d’électricité afin d'avantager les clients ainsi que les gérants des salles de sport.</h3>
                            <h3 style={h3Css_2}>Notre objectif à long terme est de réduire la consommation des salles de sport
                                qui sont des infrastructures particulièrement consommatrices en énergie.</h3>
                        </Col>
                    </Col>
                    <Col style={Object.assign(colCss, {textAlign: "Center"})} xl={4} lg={4} md={4} sm={10}  xs={10} offset={{sm: 1, xs: 1, md: 0, xl: 0, lg: 0}}>
                        <Col>
                            <Img style={imageCss} className={"img-fluid img-responsive"} alt={"Responsive image"}
                                 src={"../img/iphone_1.png"}/>
                        </Col>
                    </Col>
                </Row>
                <Row id="anchor2" style={{paddingTop: "80px"}}>
                    <Col  xl={8} lg={8} md={8} sm={10}  xs={10} offset={{sm: 1, xs: 1, md: 0, xl: 0, lg: 0}}
                          push={{xl: 4, lg: 4, md: 4}}  style={colCss}>
                        <Col>
                            <h2 style={h2Css}>Le module de récupération d'énergie.</h2>
                            <h3 style={h3Css_1}>Ce module permettra à son utilisateur de convertir l'énergie mécanique en
                                électricité viable et utilisable directement.</h3>
                            <h3 style={h3Css_2}>A terme l'électricité produite sera directement réinjectée dans la salle de sport afin de baisser le coût globale de l'électricité consommée par la salle.</h3>
                            <h3 style={h3Css_2}>Cette productivité pourra être consulter par l'utilisateur directement et en temps réel sur son application smartphone.</h3>
                        </Col>
                    </Col>
                    <Col style={Object.assign(colCss, {textAlign: "Center"})} xl={4} lg={4} md={4} sm={10}  xs={10} offset={{sm: 1, xs: 1, md: 0, xl: 0, lg: 0}} pull={{xl: 8, lg: 8, md: 8}}>
                        <Col>
                            <Img style={imageCss} className={"img-fluid img-responsive"} alt={"Responsive image"}
                                 src={"../img/module.png"}/>
                        </Col>
                    </Col>
                </Row>
                <Row id="anchor3" style={{paddingTop: "80px"}}>
                    <Col style={colCss} xl={8} lg={8} md={8} sm={10}  xs={10} offset={{sm: 1, xs: 1, md: 0, xl: 0, lg: 0}}>
                        <Col>
                            <h2 style={h2Css}>L'écologie : un pilier de l'écosystème Centrale Fitness</h2>
                            <h3 style={h3Css_1}>Depuis les préquelles de sa création, les fondateurs de Centrale Fitness voulaient répondre aux problématiques actuelles et futurs de l'environnement.</h3>
                            <h3 style={h3Css_2}>Produire une énergie renouvelable et réutilisable directement en salle de sport permet de répondre en partie à ce problème.</h3>
                            <h3 style={h3Css_2}>Cette acte sportif en faveur de l'environnement permet aussi de sensibiliser les populations à ce que représente en terme d'énergie l'éclairage par le biais d'une ampoule ou bien un écran de télévision allumée.</h3>
                        </Col>
                    </Col>
                    <Col style={Object.assign(colCss, {textAlign: "Center"})} xl={4} lg={4} md={4} sm={10}  xs={10} offset={{sm: 1, xs: 1, md: 0, xl: 0, lg: 0}}>
                        <Col><Img style={imageCss} className={"img-fluid img-responsive"} alt={"Responsive image"}
                                  src={"../img/green.png"}/>
                        </Col>
                    </Col>
                </Row>
                <Row id="anchor4" style={{paddingTop: "80px"}}>
                    <Col style={colCss} xl={8} lg={8} md={8} sm={10}  xs={10} offset={{sm: 1, xs: 1, md: 0, xl: 0, lg: 0}}
                         push={{xl: 4, lg: 4, md: 4}}>
                        <Col>
                            <h2 style={h2Css}>Pédalez plus pour économisez plus</h2>
                            <h3 style={h3Css_1}>Outre le fais que Centrale Fitness vous propose un rabais proportionnel sur votre abonnement en salle, cette écosystème vous propose aussi une autre forme d'avantage.</h3>
                            <h3 style={h3Css_2}>Les partenaires sportifs de Centrales Fitness vous propose un ensemble de promotions et de réductions sur un ensemble de produits sportifs. </h3>
                            <h3 style={h3Css_2}>Les rabais économiques auprès de nos partenaires ainsi que la ludification du sport grâce à un fondement écologique vous rendront accro à cette nouvelle façon de pratiquer le sport.</h3>
                        </Col>
                    </Col>
                    <Col style={Object.assign(colCss, {textAlign: "Center"})} name="test1" xl={4} lg={4} md={4} sm={10}  xs={10} offset={{sm: 1, xs: 1, md: 0, xl: 0, lg: 0}} pull={{xl: 8, lg: 8, md: 8}}>
                        <Col>
                            <Img style={imageCss} className={"img-fluid img-responsive"} alt={"Responsive image"}
                                 src={"../img/piggybank.png"}/>
                        </Col>
                    </Col>
                </Row>
                <Row id="anchor4" style={{paddingTop: "20px"}}>
                    <Col style={colCss}>
                        <Col>
                            <h1 style={h1Css}>pédalons pour l'écosystème économique et écologique mis à profit pour les sportifs.</h1>
                        </Col>
                    </Col>
                </Row>
            </Container>
        )
    }
}
