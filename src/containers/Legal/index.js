import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';

export default class legal extends PureComponent {
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
            xl={ 12 }
            lg={ 12 }
            md={ 12 }
            sm={ 12 }
            xs={ 12 }
            style={ {
              textAlign: 'left',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '15px 30px'
            } }
          >
            <Col>
              <h1 style={ { paddingBottom: '30px', fontWeight: 'bold' } }>Mentions Légales</h1>
              <h3 style={ { paddingBottom: '15px', fontWeight: 'bold' } }>PROPRIÉTÉ DU SITE</h3>
              <h4 style={ { paddingBottom: '15px' } }>Vous êtes actuellement connecté au site qui est édité par Centrale
                Fitness. L’éditeur s’engage à respecter l’ensemble des lois concernant la mise en place et l’activité
                d’un site Internet.
              </h4>
              <h3 style={ { paddingBottom: '15px', fontWeight: 'bold' } }>ACCÈS AU SITE</h3>
              <h4 style={ { paddingBottom: '15px' } }>L’accès à l’url est gratuit. Les frais d’accès et d’utilisation du
                réseau de télécommunication sont à la charge de tout utilisateur du site, selon les modalités fixées par
                ses fournisseurs d’accès et opérateurs de télécommunication.
                Il est rappelé que le fait d’accéder ou de se maintenir frauduleusement dans un système informatique,
                d’entraver ou de fausser le fonctionnement d’un tel système, d’introduire ou de modifier frauduleusement
                des données dans un système informatique constituent des délits passibles de sanctions pénales.</h4>
              <h3 style={ { paddingBottom: '15px', fontWeight: 'bold' } }>INFORMATIONS TECHNIQUES</h3>
              <h4 style={ { paddingBottom: '15px' } }>Quelles sont les Données que nous collectons et à quel moment ?
                Lorsque vous utilisez notre site et nos services, nous serons susceptibles de collecter les données
                suivantes vous concernant :
                Nom et prénom,
                Adresse email,
                Adresse IP.
                Ces données ne pourront être collectées que par l’intermédiaire de formulaires, avec votre consentement.
                En outre, d’autres données pourront être collectées automatiquement à l’occasion de votre navigation sur
                le site, voir pour cela la partie Cookies.
              </h4>
              <h3 style={ { paddingBottom: '15px', fontWeight: 'bold' } }>A quelles fins et sur quelles bases légales
                vos Données sont-elles utilisées ?
              </h3>
              <h4 style={ { paddingBottom: '15px' } }>Vos Données sont traitées aux fins suivantes :<br />
                Rentrer en contact direct avec vous suite à une demande (demande de rappel, candidature).<br />
                Personnaliser les communications que nous vous envoyons, sur la base de votre consentement
                préalable.<br />
                Elaborer des statistiques techniques, sur la base de l’intérêt légitime que nous avons d’être en mesure
                de comprendre et améliorer les performances de notre site.
              </h4>
              <h3 style={ { paddingBottom: '15px', fontWeight: 'bold' } }>A quelles fins et sur quelles bases légales
                Quels sont vos droits ?
              </h3>
              <h4 style={ { paddingBottom: '15px' } }>Conformément à la réglementation applicable en matière de données
                personnelles, vous disposez d’un droit d’accès, de modification, de rectification et de suppression
                concernant les données collectées sur ce site, dans les conditions prévues par la loi <span
                  style={ { fontFamily: 'sans-serif' } }
                >n°78-17 du 6 janvier 1978</span> (modifiée) relative à l’informatique, aux fichiers et aux libertés.
              </h4>
              <h3 style={ { paddingBottom: '15px', fontWeight: 'bold' } }>A quelles fins et sur quelles bases légales
                Combien de temps conservons-nous vos données ?
              </h3>
              <h4 style={ { paddingBottom: '15px' } }>Vos données personnelles sont conservées dans notre base active au
                maximum pendant trois ans à compter de votre dernière activité, c’est-à-dire à compter soit :

                du dernier contact émanant de votre part avec notre service client ;
                de l’ouverture d’un lien hypertexte présent dans une newsletter ou un autre email commercial que nous
                vous envoyons (si vous y avez consenti).
                Quelques semaines avant l’expiration de ce délai, nous prendrons contact avec vous afin que vous nous
                indiquiez si vous souhaitez conserver votre compte. Si ce n’est pas le cas, où à défaut de réponse de
                votre part, nous clôturerons votre compte et nous supprimerons vos données de notre base active. A ce
                stade, vous ne pourrez plus vous connecter à votre compte avec vos anciens identifiants et devrez donc
                en recréer un nouveau.

                La suppression de vos données de notre base active sera suivie d’une période d’archivage intermédiaire
                afin de satisfaire à nos obligations légales, comptables et fiscales, et également pour pouvoir gérer
                les réclamations éventuelles, dans la limite des délais de prescription applicable. Dans le cas où vos
                données seraient amenées à être archivées ultérieurement, elles seront automatiquement anonymisées de
                façon irréversible.

                En tout état de cause, et conformément au point ci-dessus, vous avez la possibilité à tout moment de
                demander la suppression de tout ou partie de vos données, de vous opposer à leur traitement ou d’en
                demander la limitation.
              </h4>
              <h3 style={ { paddingBottom: '15px', fontWeight: 'bold' } }>Destinataires de vos Données Personnelles</h3>
              <h4 style={ { paddingBottom: '15px' } }>En dehors de Centrale Fitness, vos Données ne sont en aucun cas
                susceptibles d’être
                communiquées à des prestataires d’hébergement. Nous pourrons, cependant, partager tout ou partie de vos
                données avec un tiers, lorsque nous y sommes
                tenus en vertu de la loi, d’une demande impérative provenant d’une autorité publique ou dans le cadre
                d’une procédure judiciaire.
              </h4>
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}
