import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import BSNavbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function Navbar({ user }) {
    return (
        <BSNavbar bg="light" expand="lg">
            <Container>
                <BSNavbar.Brand>Bad Bank</BSNavbar.Brand>
                <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BSNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/CreateAccount">
                            Create Account
                        </Nav.Link>
                        {user !== undefined && <>
                            <Nav.Link as={Link} to="/Deposits">
                                Deposit
                            </Nav.Link>
                            <Nav.Link as={Link} to="/Withdraw">
                                Withdraw
                            </Nav.Link>
                        </>}
                        <Nav.Link as={Link} to="/AllData">
                            All Data
                        </Nav.Link>
                    </Nav>
                </BSNavbar.Collapse>
            </Container>
        </BSNavbar>
    );
}