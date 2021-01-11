/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Nav, Alert } from "react-bootstrap";
import { GiHydra } from "react-icons/gi";
import { useAuth } from "../contexts/AuthContext";

export default function Appbar() {
  const [error, setError] = useState("");
  const { logout, currentUser } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  const LoggedUserMenu = () => (
    <>
      <Nav.Link as={Link} to="/">
        Meus Dragões
      </Nav.Link>
      <Nav.Link as={Link} to="/cadastrar-dragoes">
        Cadastrar Dragão
      </Nav.Link>
      <Nav.Link as={Link} to="/alterar-cadastro">
        Editar Usuário
      </Nav.Link>
      <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
    </>
  );

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        fixed="top"
        style={{ background: "#191D24" }}
      >
        <Navbar.Brand href="/">
          <GiHydra size="2rem" className="mr-3" style={{ fill: "#f2a365" }} />
          DragonDex
        </Navbar.Brand>
        <Navbar.Toggle
          className={currentUser ? "" : "d-none"}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>{currentUser ? <LoggedUserMenu /> : ""}</Nav>
        </Navbar.Collapse>
      </Navbar>
      {error && <Alert variant="danger">{error}</Alert>}
    </div>
  );
}
