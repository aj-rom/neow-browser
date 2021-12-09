import NavLink from "./NavLink"
import { Nav, Navbar } from "react-bootstrap"

export default function NavBar() {

    const pageUrls = {
        browser: { pathname: '/'},
        feed: { pathname: '/feed'}
    }

    const { browser, feed } = pageUrls

    return (
        <Navbar expand='lg'>
            <Navbar.Brand>NEO Browser</Navbar.Brand>
            <Navbar.Toggle aria-controls='navbar-nav'/>
            <Navbar.Collapse id='navbar-nav'>
                <Nav className='me-auto'>
                    <NavLink href={browser}>Browser</NavLink>
                    <NavLink href={feed}>Feed</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

