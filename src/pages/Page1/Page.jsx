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
              <p>In a distant future, where towering skyscrapers and neon-lit streets dominate the cityscape, cybernetic riders harness advanced motorcycles to navigate through the sprawling metropolis, embarking on adrenaline-fueled adventures that blur the line between man and machine. Immerse yourself in a thrilling sci-fi novel as you join these futuristic riders in their quest for freedom, survival, and the untamed spirit of the open road.</p>
              <Button size="lg" variant="outline-success" className="custom-button">View Portfolio</Button>
            </Col>          
          </Row>
        </Container>        
      </section>

      <section>
        <Container className="py-5">
            <Row className="g-5">
              <Col><p sm={11} md={6} className="text-white">In a distant future, towering skyscrapers and neon-lit streets dominate the cityscape, while cybernetic riders with their advanced motorcycles become the embodiment of a thrilling and adrenaline-fueled subculture. As they navigate through the sprawling metropolis, these riders blur the boundaries between man and machine, harnessing cutting-edge technology to execute gravity-defying stunts that leave onlookers in awe.</p></Col>

              <Col><p sm={11} md={6} className="text-white">Beyond the exhilarating adventures, a deeper narrative unfolds—a quest for freedom and the unyielding spirit of the open road. In a dystopian society where control is paramount, the cybernetic riders emerge as rebels, using their motorcycles as symbols of defiance against an oppressive regime. Each ride becomes an act of rebellion, a daring escapade that challenges societal norms and embarks on a journey to reclaim autonomy and self-determination.</p></Col>
            </Row>
          </Container>
        </section>
    </Layout>
  );
}


