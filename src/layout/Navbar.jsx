import { IconChessFilled } from "@tabler/icons-react";
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

  // modified from https://getbootstrap.com/docs/5.0/examples/sidebars/
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-light"
      style={{ width: "280px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <IconChessFilled />
        <span className="fs-4">Chess</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="/" className="nav-link link-dark" aria-current="page">
            Home
          </a>
        </li>
        <li>
          <a href="/play" className="nav-link link-dark">
            Play Chess
          </a>
        </li>
        <li>
          <a href="/demo" className="nav-link link-dark">
            Demo Chess
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default NavbarLayout;
