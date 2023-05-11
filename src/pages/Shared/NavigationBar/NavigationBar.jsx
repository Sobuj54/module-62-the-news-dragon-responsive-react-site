import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto d-flex gap-3 ">
              <Link to="/categories/0" className="text-decoration-none">
                Home
              </Link>
              <Link className="text-decoration-none">About</Link>
              <Link className="text-decoration-none">Career</Link>
            </Nav>
            <Nav>
              {user && (
                <FaUserCircle style={{ fontSize: "1.5rem" }}></FaUserCircle>
              )}

              {user ? (
                <Button variant="secondary">Logout</Button>
              ) : (
                <Button variant="secondary">
                  <Link className="text-decoration-none text-white" to="/">
                    Login
                  </Link>
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
