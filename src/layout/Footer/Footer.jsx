import { Container, Row, Col } from "../../utils/Bootstrap.jsx";

export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
      <footer>
        <Container>
          <Row>
            <Col>
              <p className="text-center"><small>&copy; {currentYear}</small></p>
              
              <p id="mozarts-ghost"><a href="https://jsohndata.github.io/no-tiempo/mozartsghost?id=bgjam"
                alt="Click on it and press control-shift."
                title="Click on it and press control-shift.">π</a></p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
}