import { Container, Row, Col, Button } from "../../utilis/Bootstrap.jsx";
import Layout from "../../layout/index.jsx";

export default function Page1() {  

  return (
    <Layout>
      <section id="page1">
        <Container className="py-4 py-lg-5">
          <Row className="d-flex 
            justify-content-center
            justify-content-lg-start
            align-items-center">
            <Col xs={11} lg={8} xl={7} className="content">            
              <h1>Neon Thunder: Chronicles of the Cyber-Rider</h1>
              <h2>Ride the Pulse of the Future: A Sci-Fi Motorcycle Saga in the Urban Jungle.</h2>
              <p>In a distant future, where towering skyscrapers and neon-lit streets dominate the cityscape, cybernetic riders harness advanced motorcycles to navigate through the sprawling metropolis, embarking on adrenaline-fueled adventures that blur the line between man and machine. Immerse yourself in a thrilling sci-fi novel as you join these futuristic riders in their quest for freedom, survival, and the untamed spirit of the open road.</p>
              <Button size="lg" variant="outline-success" className="custom-button">View Portfolio</Button>
            </Col>          
          </Row>
        </Container>
      </section>
    </Layout>
  );
}


