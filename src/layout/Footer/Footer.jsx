import { Container, Row, Col } from "../../utilis/Bootstrap.jsx";

export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
      <footer>
        <Container>
          <Row>
            <Col>
              <p className="text-center"><small>&copy; {currentYear}</small></p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
}