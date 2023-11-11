import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  ListGroup,
  ListGroupItem,
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  UncontrolledDropdown,
} from "reactstrap";

const NavbarLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="m-10">
      <Container fluid>
        <ListGroup>
          <ListGroupItem action active href="/" tag="a">
            CHESS
          </ListGroupItem>
          <ListGroupItem action href="/" tag="a">
            Reset Page
          </ListGroupItem>
        </ListGroup>
      </Container>
    </div>
  );
};

export default NavbarLayout;
