import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

// import {Navbar} from 'react-bootstrap'
// import {Container} from 'react-bootstrap';

function BrandExample({brandLink, brandText, brandDescription}) {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">{brandLink}</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>{brandText}</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            {brandDescription}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;