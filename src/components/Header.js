import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {

      return (
        <Navbar data-bs-theme="light">
        <Container>
            <Navbar.Brand href="#home">ibby khajanchi 💻</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">home</Nav.Link>
                <Nav.Link href="#home">blog</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
      );
}
export default Header