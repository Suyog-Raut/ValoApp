import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./Home";
import Agents from "./Agents";
import Maps from "./Maps";
import "bootstrap/dist/css/bootstrap.css";

function NavBar() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12" style={{ paddingRight: "0px" }}>
          <Router>
            <Navbar
              bg="dark"
              variant="dark"
              expand="lg"
              sticky="top"
              style={{ padding: "10px 100px" }}
            >
              <Navbar.Brand href="#home">VALO</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <NavLink
                    className="nav-link"
                    exact
                    activeClassName="border2"
                    to="/"
                  >
                    Home
                  </NavLink>

                  <NavLink
                    className="nav-link"
                    activeClassName="border2"
                    to="/agents"
                  >
                    Agents
                  </NavLink>
                  <NavLink
                    className="nav-link"
                    activeClassName="border2"
                    to="/maps"
                  >
                    Maps
                  </NavLink>
                </Nav>{" "}
              </Navbar.Collapse>
            </Navbar>

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/agents">
                <Agents />
              </Route>
              <Route path="/maps">
                <Maps />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
