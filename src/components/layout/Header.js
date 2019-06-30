import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button,
  Row,
  Col,
  NavItem,
  NavLink
} from "reactstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
export class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <Navbar color="warning" light>
        <Row>
          <Col>{!this.props.isHome ? <GoBackIcon /> : null}</Col>
          <Col>
            <NavbarBrand
              href="/"
              className="mr-auto"
              style={{ fontSize: "18px" }}
            >
              NY Times Most Popular Articles
            </NavbarBrand>
          </Col>
        </Row>

        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://nytimes.com">
                NY Times
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

function GoBackIcon(props) {
  return (
    <Link to="/">
      <Button outline color="warning">
        <MdKeyboardArrowLeft style={{ fontSize: "32px", color: "#000" }} />
      </Button>
    </Link>
  );
}

export default Header;
