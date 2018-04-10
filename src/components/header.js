/**
 * Header view (if you want a header) with links to switch page.
 */
import React, { PureComponent } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink
} from 'reactstrap';
import SVGInline from 'react-svg-inline';
import logo from 'src/assets/images/logoCf.svg';

const colorBgNav = {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  position: 'fixed',
  minWidth: '100%',
  zIndex: '4',
  padding: '0px 0px 0px 0.5rem'
};

export default class HeaderLinks extends PureComponent {
  constructor() {
    super();

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <header>
        <Navbar className="navbarCf" color="faded" light expand="md" style={ colorBgNav }>
          <NavbarBrand className="navbarBrandCf" href="/">
            <span style={ { margin: 'auto', color: 'white', fontFamily: 'BjornLight' } }>Centrale Fitness&nbsp;</span>
            <SVGInline
              alt="logo_of_header"
              className="socialIconsFooter"
              height={ '35px' }
              style={ { marginTop: '4px' } }
              svg={ logo }
            />
          </NavbarBrand>
          <NavbarToggler onClick={ this.toggle } />
          <Collapse className="navbarCollapseCf" isOpen={ this.state.isOpen } navbar>
            <Nav className="ml-auto " navbar>
              <NavLink href="/" className="navbarLinksCf">
                <span className="navbarLinksTextCf">Présentation de la solution</span>
              </NavLink>
              <NavLink href="/salles" className="navbarLinksCf">
                <span className="navbarLinksTextCf">Nos salles</span>
              </NavLink>
              <NavLink href="/valeurs" className="navbarLinksCf">
                <span className="navbarLinksTextCf">L'équipe</span>
              </NavLink>
              <NavLink href="/avis" className="navbarLinksCf">
                <span className="navbarLinksTextCf">Avis des utilisateurs</span>
              </NavLink>
              <NavLink href="/media" className="navbarLinksCf">
                <span className="navbarLinksTextCf">Média</span>
              </NavLink>
              <NavLink href="/contacts" className="navbarLinksCf">
                <span className="navbarLinksTextCf">Contacts</span>
              </NavLink>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
