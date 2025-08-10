import { Container, Row, Col, Button } from "../../utils/Bootstrap.jsx";
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
            </Col>          
          </Row>
        </Container>        
      </section>

    </Layout>
  );
}


