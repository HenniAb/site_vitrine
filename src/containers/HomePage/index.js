import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-scroll';

import SVGInline from 'react-svg-inline';
import logo from 'src/assets/images/logoCf.svg';

import cycle from 'src/assets/images/iconesHomepage/cycle.png';
import module from 'src/assets/images/iconesHomepage/module.png';
import ecology from 'src/assets/images/iconesHomepage/ecology.png';
import money from 'src/assets/images/iconesHomepage/money.png';
import cellPhone from 'src/assets/images/iphone_1.png';
import engine from 'src/assets/images/module.png';
import green from 'src/assets/images/green.png';
import piggyBank from 'src/assets/images/piggybank.png';

export default class myBody extends PureComponent {
  constructor(props) {
    super(props);
    this.setLinkHovered = this.setLinkHovered.bind(this);
    this.state = {
      isHovered1: false,
      isHovered2: false,
      isHovered3: false,
      isHovered4: false
    };
  }

  setLinkHovered(nb) {
    if (nb === '1') {
      this.setState({
        isHovered1: !this.state.isHovered1
      });
    } else if (nb === '2') {
      this.setState({
        isHovered2: !this.state.isHovered2
      });
    } else if (nb === '3') {
      this.setState({
        isHovered3: !this.state.isHovered3
      });
    } else if (nb === '4') {
      this.setState({
        isHovered4: !this.state.isHovered4
      });
    }
  }

  render() {
    const containerCss = {
      color: '#F7F9F9',
      display: 'table-cell',
      padding: '0',
      textAlign: 'center',
      verticalAlign: 'middle',
      cursor: 'default',
      marginTop: '50px',
      overflow: 'hidden'
    };
    const h2Css1 = {
      letterSpacing: '-0.02em !important',
      fontSize: '40px',
      fontFamily: 'BjornLight'
    };
    return (
      <Container fluid style={ containerCss }>
        <Row className="rowHomepage">
          <Col>
            <Row style={ { paddingTop: '56px', textAlign: 'center' } }>
              <Col
                className="firstRowHomepage"
                style={ { padding: '0' } }
              >
                <Row>
                  <Col
                    style={ { marginTop: '10px' } }
                    className="alignItemsBg"
                  >
                    <SVGInline
                      alt="logo_of_header"
                      fill={ 'white' }
                      height={ '20vh' }
                      svg={ logo }
                    />
                  </Col>
                </Row>
                <Row>
                  <Col className="alignItemsBg">
                    <h2 style={ h2Css1 }>Centrale Fitness</h2>
                  </Col>
                </Row>
                <Row>
                  <Col className="alignItemsBg">
                    <h3 style={ { width: '90%', margin: 'auto' } }>La solution innovante pour vous motiver au sport tout
                      en
                      réduisant vos dépenses</h3>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="secondRowHomepage">
              <Col
                xl={ 3 }
                lg={ 3 }
                md={ 3 }
                sm={ 6 }
                xs={ 12 }
                offset={ { sm: 0, xs: 0, md: 0, xl: 0, lg: 0 } }
                className="homepageIcones_1"
                style={ { padding: '0' } }
              >
                <Link
                  className="test6"
                  to="anchor1"
                  activeClass="active"
                  isDynamic={ true }
                  spy={ true }
                  smooth={ true }
                  duration={ 500 }
                >
                  <Row style={ { width: '50%', margin: 'auto', cursor: 'pointer' } }>
                    <Col className="secondRowHomepage_firstCol_1">
                      <img
                        alt="icone_cycle"
                        style={ { width: '4.2rem', height: 'auto' } }
                        src={ cycle }
                      />
                    </Col>
                  </Row>
                  <Row style={ { width: '75%', margin: 'auto', cursor: 'pointer' } }>
                    <Col className="secondRowHomepage_secondCol_1">
                      <h4 style={ { fontSize: '1.4rem' } }>Notre solution</h4>
                    </Col>
                  </Row>
                  <Row style={ { width: '50%', margin: 'auto', cursor: 'pointer' } }>
                    <Col className="secondRowHomepage_thirdCol_1" />
                  </Row>
                </Link>
              </Col>
              <Col
                xl={ 3 }
                lg={ 3 }
                md={ 3 }
                sm={ 6 }
                xs={ 12 }
                offset={ { sm: 0, xs: 0, md: 0, xl: 0, lg: 0 } }
                className="homepageIcones_2"
                style={ { padding: '0' } }
              >
                <Link
                  style={ { top: '15px' } }
                  className="test6"
                  to="anchor2"
                  activeClass="active"
                  isDynamic={ true }
                  spy={ true }
                  smooth={ true }
                  duration={ 500 }
                >
                  <Row style={ { width: '50%', margin: 'auto', cursor: 'pointer' } }>
                    <Col className="secondRowHomepage_firstCol_2">
                      <img
                        alt="icone_module"
                        style={ { width: '4.2rem', height: 'auto' } }
                        src={ module }
                      />
                    </Col>
                  </Row>
                  <Row style={ { width: '75%', margin: 'auto', cursor: 'pointer' } }>
                    <Col className="secondRowHomepage_secondCol_2">
                      <h4 style={ { fontSize: '1.4rem' } }>Le module</h4>
                    </Col>
                  </Row>
                  <Row style={ { width: '50%', margin: 'auto', cursor: 'pointer' } }>
                    <Col className="secondRowHomepage_thirdCol_2" />
                  </Row>
                </Link>
              </Col>
              <Col
                xl={ 3 }
                lg={ 3 }
                md={ 3 }
                sm={ 6 }
                xs={ 12 }
                offset={ { sm: 0, xs: 0, md: 0, xl: 0, lg: 0 } }
                className="homepageIcones_3"
                style={ { padding: '0' } }
              >
                <Link
                  style={ { top: '15px' } }
                  className="test6"
                  to="anchor3"
                  activeClass="active"
                  isDynamic={ true }
                  spy={ true }
                  smooth={ true }
                  duration={ 500 }
                >
                  <Row style={ { width: '50%', margin: 'auto', cursor: 'pointer' } }>
                    <Col className="secondRowHomepage_firstCol_3">
                      <img
                        alt="icone_ecology"
                        style={ { width: '4.2rem', height: 'auto' } }
                        src={ ecology }
                      />
                    </Col>
                  </Row>
                  <Row style={ { width: '75%', margin: 'auto', cursor: 'pointer' } }>
                    <Col className="secondRowHomepage_secondCol_3">
                      <h4 style={ { fontSize: '1.4rem' } }>L'aspect écologique</h4>
                    </Col>
                  </Row>
                  <Row style={ { width: '50%', margin: 'auto', cursor: 'pointer' } }>
                    <Col className="secondRowHomepage_thirdCol_3" />
                  </Row>
                </Link>
              </Col>
              <Col
                xl={ 3 }
                lg={ 3 }
                md={ 3 }
                sm={ 6 }
                xs={ 12 }
                offset={ { sm: 0, xs: 0, md: 0, xl: 0, lg: 0 } }
                className="homepageIcones_4"
                style={ { padding: '0' } }
              >
                <Link
                  style={ { top: '15px' } }
                  className="test6"
                  to="anchor4"
                  activeClass="active"
                  isDynamic={ true }
                  spy={ true }
                  smooth={ true }
                  duration={ 500 }
                >
                  <Row style={ { width: '50%', margin: 'auto', cursor: 'pointer' } }>
                    <Col className="secondRowHomepage_firstCol_4">
                      <img
                        alt="icone_money"
                        style={ { width: '4.2rem', height: 'auto' } }
                        src={ money }
                      />
                    </Col>
                  </Row>
                  <Row style={ { width: '75%', margin: 'auto', cursor: 'pointer' } }>
                    <Col className="secondRowHomepage_secondCol_4">
                      <h4 style={ { fontSize: '1.4rem' } }>Réduisez vos coûts</h4>
                    </Col>
                  </Row>
                  <Row style={ { width: '50%', margin: 'auto', cursor: 'pointer' } }>
                    <Col className="secondRowHomepage_thirdCol_4" />
                  </Row>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row
          id="anchor1"
        >
          <Col
            xl={ 6 }
            lg={ 6 }
            md={ 6 }
            sm={ 12 }
            xs={ 12 }
            style={ {
              textAlign: 'left',
              color: 'black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            } }
          >
            <Col
              className="homepageColText"
            >
              <h2 style={ { fontWeight: 'bold', paddingBottom: '30px' } }>L'écosystème ludique qui met en avant
                l'écologie et la fidélisation</h2>
              <h5>Notre solution est adaptée aux gérants de salle de sport qui souhaitent offrir une nouvelle expérience
                sportive à leurs utilisateurs mais aussi réduire leurs coûts en électricité.</h5>
              <h5 style={ { paddingTop: '15px' } }>Notre objectif à long terme est de réduire la consommation en
                électricité des salles de sport
                qui sont des infrastructures particulièrement énergivore.</h5>
            </Col>
          </Col>
          <Col
            xl={ 6 }
            lg={ 6 }
            md={ 6 }
            sm={ 12 }
            xs={ 12 }
            offset={ { sm: 0, xs: 0, md: 0, xl: 0, lg: 0 } }
            style={ {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '90vh'
            } }
          >
            <Col>
              <img
                style={ {
                  maxHeight: '90vh',
                  maxWidth: '100%'
                } }
                alt="cellphone centrale fitness"
                src={ cellPhone }
              />
            </Col>
          </Col>
        </Row>
        { /* <Row className="homePageElement">
          <Col
            style={ colCss }
            xl={ 8 }
            lg={ 8 }
            md={ 8 }
            sm={ 10 }
            xs={ 10 }
            offset={ { sm: 1, xs: 1, md: 0, xl: 0, lg: 0 } }
          >
            <Col>
              <h2 style={ h2Css }>Le sport ludique qui met en avant l'écologie et la fidélisation</h2>
              <h3 style={ h3Css1 }>Centrale fitness est une solution destinée aux salles de sport.
                Cette écosystème permet de récupérer l’énergie produite par les sportifs, sous forme
                d’électricité afin d'avantager les clients ainsi que les gérants des salles de sport.</h3>
              <h3 style={ h3Css2 }>Notre objectif à long terme est de réduire la consommation des salles de sport
                qui sont des infrastructures particulièrement consommatrices en énergie.</h3>
            </Col>
          </Col>
          <Col
            style={ colCss }
            xl={ 4 }
            lg={ 4 }
            md={ 4 }
            sm={ 10 }
            xs={ 10 }
            offset={ { sm: 1, xs: 1, md: 0, xl: 0, lg: 0 } }
          >
            <Col>
              <Img
                style={ imageCss }
                className={ 'img-fluid img-responsive' }
                alt={ 'Responsive image' }
                src={ cellPhone }
              />
            </Col>
          </Col>
        </Row> */ }
        <Row
          id="anchor2"
          style={ { background: 'linear-gradient(to left bottom, #a6c0fe, #f68084) no-repeat' } }
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
              color: 'black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            } }
          >
            <Col
              className="homepageColText"
              style={ { color: 'white' } }
            >
              <h4 style={ { paddingBottom: '30px', fontWeight: 'bold' } }>Ce module permettra à son utilisateur de
                convertir l'énergie
                mécanique en
                électricité viable et utilisable directement.</h4>
              <h5 style={ { fontWeight: 'bold' } }>Une réduction des coûts pour la salle</h5>
              <p>A terme l'électricité produite sera directement réinjectée dans la salle de sport
                afin
                de baisser le coût globale de l'électricité consommée par la salle.</p>
              <h5 style={ { paddingTop: '15px', fontWeight: 'bold' } }>Une approche ludique pour les utilisateurs</h5>
              <p>Cette productiion d'électricité pourra être consulter par l'utilisateur en temps
                réel sur son application.</p>
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
              justifyContent: 'center',
              height: '90vh'
            } }
          >
            <Col>
              <img
                style={ {
                  maxHeight: '90vh',
                  maxWidth: '100%'
                } }
                alt="module centrale fitness"
                src={ engine }
              />
            </Col>
          </Col>
        </Row>
        { /*
         <Row id="anchor2" className="homePageElement">
          <Col
            xl={ 8 }
            lg={ 8 }
            md={ 8 }
            sm={ 10 }
            xs={ 10 }
            offset={ { sm: 1, xs: 1, md: 0, xl: 0, lg: 0 } }
            push={ { xl: 4, lg: 4, md: 4 } }
            style={ colCss }
          >
            <Col>
              <h2 style={ h2Css }>Le module de récupération d'énergie.</h2>
              <h3 style={ h3Css1 }>Ce module permettra à son utilisateur de convertir l'énergie mécanique en
                électricité viable et utilisable directement.</h3>
              <h3 style={ h3Css2 }>A terme l'électricité produite sera directement réinjectée dans la salle de sport
                afin
                de baisser le coût globale de l'électricité consommée par la salle.</h3>
              <h3 style={ h3Css2 }>Cette productivité pourra être consulter par l'utilisateur directement et en temps
                réel
                sur son application smartphone.</h3>
            </Col>
          </Col>
          <Col
            style={ colCss }
            xl={ 4 }
            lg={ 4 }
            md={ 4 }
            sm={ 10 }
            xs={ 10 }
            offset={ { sm: 1, xs: 1, md: 0, xl: 0, lg: 0 } }
            pull={ { xl: 8, lg: 8, md: 8 } }
          >
            <Col>
              <Img
                style={ imageCss }
                className={ 'img-fluid img-responsive' }
                alt={ 'Responsive image' }
                src={ engine }
              />
            </Col>
          </Col>
        </Row>
        */ }
        <Row
          id="anchor3"
        >
          <Col
            xl={ 6 }
            lg={ 6 }
            md={ 6 }
            sm={ 12 }
            xs={ 12 }
            style={ {
              textAlign: 'left',
              color: 'black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            } }
          >
            <Col
              className="homepageColText"
            >
              <h4 style={ { fontWeight: 'bold', marginBottom: '30px' } }>L'écologie : un pilier de l'écosystème Centrale
                Fitness</h4>
              <h5 style={ { fontWeight: 'bold' } }>Soulagez vos factures</h5>
              <p>La production d'électricité renouvelable et réutilisable directement en salle permet
                d'économiser jusqu'à <span style={ { fontFamily: 'Circular,Helvetica,Arial,sans-serif' } }>30%</span> sur ce type de coûts.</p>
              <h5 style={ { fontWeight: 'bold', marginTop: '15px' } }>Une réflexion écologique</h5>
              <p>Cette expérience unique en son genre a aussi pour but de sensibiliser les utilisateurs à la
                consommation d'énergie.</p>
              { /* <h2>L'écologie : un pilier de l'écosystème Centrale Fitness</h2>
              <h3>Depuis les préquelles de sa création, les fondateurs de Centrale Fitness voulaient
                répondre aux problématiques actuelles et futurs de l'environnement.</h3>
              <h3>Produire une énergie renouvelable et réutilisable directement en salle de sport
                permet
                de répondre en partie à ce problème.</h3>
              <h3>Cette acte sportif en faveur de l'environnement permet aussi de sensibiliser les
                populations à ce que représente en terme d'énergie l'éclairage par le biais d'une ampoule ou bien un
                écran de télévision allumée.</h3> */ }

            </Col>
          </Col>
          <Col
            xl={ 6 }
            lg={ 6 }
            md={ 6 }
            sm={ 12 }
            xs={ 12 }
            offset={ { sm: 0, xs: 0, md: 0, xl: 0, lg: 0 } }
            style={ {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '90vh'
            } }
          >
            <Col>
              <img
                style={ {
                  maxHeight: '90vh',
                  maxWidth: '100%'
                } }
                alt="ecology centrale fitness"
                src={ green }
              />
            </Col>
          </Col>
        </Row>
        { /*
                <Row id="anchor3" className="homePageElement">
          <Col
            style={ colCss }
            xl={ 8 }
            lg={ 8 }
            md={ 8 }
            sm={ 10 }
            xs={ 10 }
            offset={ { sm: 1, xs: 1, md: 0, xl: 0, lg: 0 } }
          >
            <Col>
              <h2 style={ h2Css }>L'écologie : un pilier de l'écosystème Centrale Fitness</h2>
              <h3 style={ h3Css1 }>Depuis les préquelles de sa création, les fondateurs de Centrale Fitness voulaient
                répondre aux problématiques actuelles et futurs de l'environnement.</h3>
              <h3 style={ h3Css2 }>Produire une énergie renouvelable et réutilisable directement en salle de sport
                permet
                de répondre en partie à ce problème.</h3>
              <h3 style={ h3Css2 }>Cette acte sportif en faveur de l'environnement permet aussi de sensibiliser les
                populations à ce que représente en terme d'énergie l'éclairage par le biais d'une ampoule ou bien un
                écran de télévision allumée.</h3>
            </Col>
          </Col>
          <Col
            style={ colCss }
            xl={ 4 }
            lg={ 4 }
            md={ 4 }
            sm={ 10 }
            xs={ 10 }
            offset={ { sm: 1, xs: 1, md: 0, xl: 0, lg: 0 } }
          >
            <Col>
              <Img
                style={ imageCss }
                className={ 'img-fluid img-responsive' }
                alt={ 'Responsive image' }
                src={ green }
              />
            </Col>
          </Col>
        </Row>
        */ }
        <Row
          id="anchor4"
          style={ { background: 'linear-gradient(to left, #cfc7f8 0%, #ebbba7 100%)' } }
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
              color: 'black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            } }
          >
            <Col
              className="homepageColText"
              style={ { color: 'white' } }
            >
              <h4 style={ { fontWeight: 'bold', marginBottom: '30px' } }>Pédalez plus pour économisez plus</h4>
              <h5 style={ { fontWeight: 'bold', marginBottom: '15px' } }>Les avantages pour l'utilisateur</h5>
              <p>Centrale Fitness vous propose un rabais proportionnel sur votre
                abonnement en salle en fonction de la quantité d'électricité que vous aurez injecté dans la salle durant
                le dernier mois.</p>
              <p>Nous vous proposons aussi grâce à nos partenaires sportifs un ensemble de promotions
                et de réductions sur un ensemble de produits sportifs. </p>
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
              justifyContent: 'center',
              height: '90vh'
            } }
          >
            <Col>
              <img
                style={ {
                  maxHeight: '90vh',
                  maxWidth: '100%'
                } }
                alt="decrease money centrale fitness"
                src={ piggyBank }
              />
            </Col>
          </Col>
        </Row>

        { /* <Row id="anchor4" className="homePageElement">
          <Col
            style={ colCss }
            xl={ 8 }
            lg={ 8 }
            md={ 8 }
            sm={ 10 }
            xs={ 10 }
            offset={ { sm: 1, xs: 1, md: 0, xl: 0, lg: 0 } }
            push={ { xl: 4, lg: 4, md: 4 } }
          >
            <Col>
              <h2 style={ h2Css }>Pédalez plus pour économisez plus</h2>
              <h3 style={ h3Css1 }>Outre le fais que Centrale Fitness vous propose un rabais proportionnel sur votre
                abonnement en salle, cette écosystème vous propose aussi une autre forme d'avantage.</h3>
              <h3 style={ h3Css2 }>Les partenaires sportifs de Centrales Fitness vous propose un ensemble de promotions
                et
                de réductions sur un ensemble de produits sportifs. </h3>
              <h3 style={ h3Css2 }>Les rabais économiques auprès de nos partenaires ainsi que la ludification du sport
                grâce à un fondement écologique vous rendront accro à cette nouvelle façon de pratiquer le sport.</h3>
            </Col>
          </Col>
          <Col
            style={ colCss }
            name="test1"
            xl={ 4 }
            lg={ 4 }
            md={ 4 }
            sm={ 10 }
            xs={ 10 }
            offset={ { sm: 1, xs: 1, md: 0, xl: 0, lg: 0 } }
            pull={ { xl: 8, lg: 8, md: 8 } }
          >
            <Col>
              <Img
                style={ imageCss }
                className={ 'img-fluid img-responsive' }
                alt={ 'Responsive image' }
                src={ piggyBank }
              />
            </Col>
          </Col>
        </Row> */ }
      </Container>
    );
  }
}
