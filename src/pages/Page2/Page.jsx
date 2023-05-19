import { Container, Row, Col, Button } from "../../utilis/Bootstrap.jsx";
import Layout from "../../layout/index.jsx";

export default function Page2() {  

  return (
    <Layout>
      <section id="page2">
        <Container className="py-4 py-lg-5">
          <Row className="d-flex 
            justify-content-center
            align-items-center">
            <Col xs={11} lg={8} xl={7} className="content">            
              <h1>Lowpoly Land: Where Simplicity Meets Imagination</h1>
              <h2>Unleash Your Imagination in the Polygonal Paradise!</h2>
              <p>Embark on a mesmerizing journey through Lowpoly Land, a captivating realm where simplicity meets boundless creativity. Immerse yourself in its polygonal beauty, explore unique landscapes, and let your imagination soar in this enchanting world of minimalistic wonders.</p>
              <Button size="lg" variant="outline-success" className="custom-button">View Portfolio</Button>
            </Col>          
          </Row>
        </Container>
      </section>
    </Layout>
  );
}


