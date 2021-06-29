import React from 'react'
import {Navbar , NavDropdown , Nav, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function MyNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/"><img src="https://img.icons8.com/ios-glyphs/30/000000/cat-back-view.png"/>TH3H04X</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">

                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link href="http://portfolio.th3h04x.ml">About</Nav.Link>
                
                <NavDropdown title="Works" id="collasible-nav-dropdown" bg="dark">
                  <NavDropdown.Item as={Link} to="/ttc">ThomasTheCat</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/dev">Development</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/writeups">Writeups</NavDropdown.Item>
                </NavDropdown>

              </Nav>


            <Nav>
              <Nav.Link href="https://github.com/blessingcharles">Github</Nav.Link>
              <Nav.Link eventKey={2} href="https://twitter.com/th3h04x">
                Twitter
              </Nav.Link>
            </Nav>


        </Navbar.Collapse>
        </Container>
  </Navbar>
    )
}
