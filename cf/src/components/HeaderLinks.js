/**
 * Header view (if you want a header) with links to switch page.
 */
import React, { PureComponent } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Media,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

const colorBgNav = {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  position: "fixed",
  minWidth: "100%",
  zIndex: "4",
  padding: "0 .5rem 0 .5rem"
};
const colorTextNav = {
  color: "#F7F9F9",
  display: "table-cell",
  verticalAlign: "middle"
};

const colorText = {
  color: "#F7F9F9",
  textAlign: "center"
};
const colorTextHover = {
  color: "#3A3333",
  textAlign: "center"
};
export default class HeaderLinks extends PureComponent{
  constructor(){
    super();

    this.toggle = this.toggle.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.state = {
      isOpen: false,
      isHovered1: false,
      isHovered2: false,
      isHovered3: false,
      isHovered4: false,
      isHovered5: false,
      isHovered6: false
    };
  }
  updateDimensions() {
    if (window.matchMedia("(max-width: 768px)").matches) {
      this.setState({
        alignTextNav: {
          textAlign: "center",
          minHeight: "55px",
          display: "grid",
          verticalAlign: "middle"
        },
        colorTextNavHover: {
          backgroundColor: "#F7F9F9",
          verticalAlign: "middle",
        }
      });
    }

    else if (window.matchMedia("(min-width: 769px)").matches){
      this.setState({
        alignTextNav: {
          textAlign: "center",
          minHeight: "55px",
          display: "table",
          verticalAlign: "middle"
        },
        colorTextNavHover: {
          backgroundColor: "#F7F9F9",
          verticalAlign: "middle",
          display: "table-cell",
        }
      });
    }
  }
  componentDidMount() {
    if (window.matchMedia("(max-width: 768px)").matches) {
      this.setState({
        alignTextNav: {
          textAlign: "center",
          minHeight: "55px",
          display: "grid",
          verticalAlign: "middle"
        },
        colorTextNavHover: {
          backgroundColor: "#F7F9F9",
          verticalAlign: "middle",
        }
      });
    }

    else if (window.matchMedia("(min-width: 769px)").matches){
      this.setState({
        alignTextNav: {
          textAlign: "center",
          minHeight: "55px",
          display: "table",
          verticalAlign: "middle"
        },
        colorTextNavHover: {
          backgroundColor: "#F7F9F9",
          verticalAlign: "middle",
          display: "table-cell",
        }
      });
    }
    window.addEventListener("resize", this.updateDimensions);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  setButtonHovered(nb, myBool) {
    if (nb === "1"){
      this.setState({
        isHovered1: myBool
      });
    }
    else if (nb === "2"){
      this.setState({
        isHovered2: myBool
      });
    }
    else if (nb === "3"){
      this.setState({
        isHovered3: myBool
      });
    }
    else if (nb === "4"){
      this.setState({
        isHovered4: myBool
      });
    }
    else if (nb === "5"){
      this.setState({
        isHovered5: myBool
      });
    }
    else if (nb === "6"){
      this.setState({
        isHovered6: myBool
      });
    }
  }
  setColorHovered(nb, myBool) {
    if (nb === "1"){
      this.setState({
        isHovered1: myBool
      });
    }
    else if (nb === "2"){
      this.setState({
        isHovered2: myBool
      });
    }
    else if (nb === "3"){
      this.setState({
        isHovered3: myBool
      });
    }
    else if (nb === "4"){
      this.setState({
        isHovered4: myBool
      });
    }
    else if (nb === "5"){
      this.setState({
        isHovered5: myBool
      });
    }
    else if (nb === "6"){
      this.setState({
        isHovered6: myBool
      });
    }
  }

  render(){
    return(
      <div>
        <Navbar color="faded" light expand="md" style={colorBgNav}>
          <NavbarBrand href="/" width={"190px"} style={colorTextNav}>Centrale Fitness&nbsp;
            <img src={"../img/logo_cf_header.png"} height={"45px"}/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} style={{color:"white!important"}}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar style={this.state.alignTextNav}>
              <NavItem onMouseEnter={() => this.setButtonHovered("1", true)}
                       onMouseLeave={() => this.setButtonHovered("1", false)}
                       style={this.state.isHovered1 ? this.state.colorTextNavHover : colorTextNav}>
                <NavLink href="/"  onMouseEnter={() => this.setColorHovered("1", true)}
                         onMouseLeave={() => this.setColorHovered("1", false)}
                         style={this.state.isHovered1 ? colorTextHover : colorText}>Présentation de la solution</NavLink>
              </NavItem>
              <NavItem onMouseEnter={() => this.setButtonHovered("2", true)}
                       onMouseLeave={() => this.setButtonHovered("2", false)}
                       style={this.state.isHovered2 ? this.state.colorTextNavHover : colorTextNav}>
                <NavLink href="/salles"  onMouseEnter={() => this.setColorHovered("2", true)}
                         onMouseLeave={() => this.setColorHovered("2", false)}
                         style={this.state.isHovered2 ? colorTextHover : colorText}>Nos salles</NavLink>
              </NavItem>
              <NavItem onMouseEnter={() => this.setButtonHovered("3", true)}
                       onMouseLeave={() => this.setButtonHovered("3", false)}
                       style={this.state.isHovered3 ? this.state.colorTextNavHover : colorTextNav}>
                <NavLink href="/valeurs"  onMouseEnter={() => this.setColorHovered("3", true)}
                         onMouseLeave={() => this.setColorHovered("3", false)}
                         style={this.state.isHovered3 ? colorTextHover : colorText}>L'équipe</NavLink>
              </NavItem>
              <NavItem onMouseEnter={() => this.setButtonHovered("4", true)}
                       onMouseLeave={() => this.setButtonHovered("4", false)}
                       style={this.state.isHovered4 ? this.state.colorTextNavHover : colorTextNav}>
                <NavLink href="/avis"  onMouseEnter={() => this.setColorHovered("4", true)}
                         onMouseLeave={() => this.setColorHovered("4", false)}
                         style={this.state.isHovered4 ? colorTextHover : colorText}>Avis des utilisateurs</NavLink>
              </NavItem>
              <NavItem onMouseEnter={() => this.setButtonHovered("5", true)}
                       onMouseLeave={() => this.setButtonHovered("5", false)}
                       style={this.state.isHovered5 ? this.state.colorTextNavHover : colorTextNav}>
                <NavLink href="/media"  onMouseEnter={() => this.setColorHovered("5", true)}
                         onMouseLeave={() => this.setColorHovered("5", false)}
                         style={this.state.isHovered5 ? colorTextHover : colorText}>Photos/Vidéos</NavLink>
              </NavItem>
              <NavItem onMouseEnter={() => this.setButtonHovered("6", true)}
                       onMouseLeave={() => this.setButtonHovered("6", false)}
                       style={this.state.isHovered6 ? this.state.colorTextNavHover : colorTextNav}>
                <NavLink href="/contacts"  onMouseEnter={() => this.setColorHovered("6", true)}
                         onMouseLeave={() => this.setColorHovered("6", false)}
                         style={this.state.isHovered6 ? colorTextHover : colorText}>Contacts</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
