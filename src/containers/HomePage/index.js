import React, { PureComponent } from 'react';
import Img from 'react-image';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-scroll';

import cycle from 'src/assets/images/iconesHomepage/cycle.png';
import logo from 'src/assets/images/logo_cf_header.png';
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
    const colCss = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'Center'
    };
    const imageCss = {
      minWidth: '230px',
      maxHeight: '620px'
    };
    const h1Css = {
      textAlign: 'center',
      fontSize: '3em',
      marginBottom: '30px',
      letterSpacing: '-0.02em !important'
    };
    const h2Css = {
      marginBottom: '60px',
      letterSpacing: '-0.02em !important',
      fontSize: '40px'
    };
    const h2Css1 = {
      letterSpacing: '-0.02em !important',
      fontSize: '40px'
    };
    const h3Css1 = {
      fontSize: '1.2em',
      marginBottom: '30px',
      letterSpacing: '-0.02em !important'
    };
    const h3Css2 = {
      fontSize: '1.2em',
      letterSpacing: '-0.02em !important'
    };
    return (
      <Container fluid style={ containerCss }>
        <Row style={ { paddingTop: '55px', textAlign: 'center' } }>
          <Col
            className="firstRowHomepage"
            style={ { padding: '0' } }
          >
            <Row>
              <Col
                style={ { marginTop: '35px' } }
                className="alignItemsBg"
              >
                <img
                  alt="logo_of_header"
                  style={ { height: '26vh' } }
                  src={ logo }
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
                <h3 style={ { width: '90%', margin: 'auto' } }>La solution innovante pour vous motivez au sport tout en
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
                    style={ { width: '8vw' } }
                    src={ cycle }
                  />
                </Col>
              </Row>
              <Row style={ { width: '75%', margin: 'auto', cursor: 'pointer' } }>
                <Col className="secondRowHomepage_secondCol_1">
                  <h4 style={ { fontSize: '1.4rem' } }>Qui sommes-nous ?</h4>
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
                    style={ { width: '8vw' } }
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
                    style={ { width: '8vw' } }
                    src={ ecology }
                  />
                </Col>
              </Row>
              <Row style={ { width: '75%', margin: 'auto', cursor: 'pointer' } }>
                <Col className="secondRowHomepage_secondCol_3">
                  <h4 style={ { fontSize: '1.4rem' } }>L'apect écologique</h4>
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
                    style={ { width: '8vw' } }
                    src={ money }
                  />
                </Col>
              </Row>
              <Row style={ { width: '75%', margin: 'auto', cursor: 'pointer' } }>
                <Col className="secondRowHomepage_secondCol_4">
                  <h4 style={ { fontSize: '1.4rem' } }>Economisez de l'argent</h4>
                </Col>
              </Row>
              <Row style={ { width: '50%', margin: 'auto', cursor: 'pointer' } }>
                <Col className="secondRowHomepage_thirdCol_4" />
              </Row>
            </Link>
          </Col>
        </Row>
        <div
          id="anchor1"
          style={ { marginTop: '10px' } }
        />
        <Row style={ { height: '100vh' } }>
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
              <h1 style={ h1Css }>Centrale Fitness</h1>
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
        </Row>
        <Row id="anchor2" style={ { height: '100vh' } }>
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
        <Row id="anchor3" style={ { height: '100vh' } }>
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
        <Row id="anchor4" style={ { height: '100vh' } }>
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
        </Row>
      </Container>
    );
  }
}
