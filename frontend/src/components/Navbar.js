import Container from 'react-bootstrap/Container';
import { Nav, NavDropdown } from "react-bootstrap";
import BSNavbar from "react-bootstrap/Navbar";
import { Link, NavLink, useLocation } from "react-router-dom";


export default function Navbar({ user, onLogOut }) {
    const location = useLocation()
    return (
        <BSNavbar bg="light" expand="lg">
            <Container>
                <BSNavbar.Brand>Bad Bank</BSNavbar.Brand>
                <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BSNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className={location.pathname === "/" ? "active" : ""} as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link className={location.pathname === "/CreateAccount" ? "active" : ""} as={Link} to="/CreateAccount">
                            Create Account
                        </Nav.Link>
                        <Nav.Link className={location.pathname === "/SignIn" ? "active" : ""} as={Link} to="/SignIn">
                            Sign In
                        </Nav.Link>
                        {user !== undefined && <>
                            <Nav.Link className={location.pathname === "/Deposits" ? "active" : ""} as={Link} to="/Deposits">
                                Deposit
                            </Nav.Link>
                            <Nav.Link className={location.pathname === "/Withdraw" ? "active" : ""} as={Link} to="/Withdraw">
                                Withdraw
                            </Nav.Link>
                            <Nav.Link onClick={onLogOut}>
                                Log Out
                            </Nav.Link>
                        </>}
                        <Nav.Link className={location.pathname === "/AllData" ? "active" : ""} as={Link} to="/AllData">
                            All Data
                        </Nav.Link>

                    </Nav>
                    <NavDropdown>
                        {user !== undefined && <>
                            <Nav.Link disabled>user:{user.name}</Nav.Link>
                        </>}
                        {user !== undefined && <>
                            <Nav.Link disabled>balance:{user.balance}</Nav.Link>
                        </>}
                    </NavDropdown>
                </BSNavbar.Collapse>
            </Container>
        </BSNavbar>
    );
}