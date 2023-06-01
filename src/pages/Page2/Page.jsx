import { Container, Row, Col, Button } from "../../utils/Bootstrap.jsx";
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

      <section>
        <Container className="py-5">
          <Row className="g-5">
            <Col sm={12} md={6}>
              <p className="text-white">Experience the magic of Lowpoly Land as you traverse its intricate landscapes, each crafted with meticulous attention to detail. From towering mountains to serene lakes, every element in this polygonal paradise is a testament to the power of simplicity. Let your mind wander and discover endless possibilities as you unleash your creativity in this mesmerizing realm where imagination knows no bounds.</p>
            </Col>

            <Col sm={12} md={6}>
              <p className="text-white">Indulge in the awe-inspiring beauty of Lowpoly Land as you delve into its ethereal charm. Lose yourself in the mesmerizing dance of vibrant colors and sharp edges that bring life to this minimalist wonderland. Whether you choose to wander alone or embark on adventures with friends, Lowpoly Land is a sanctuary where you can escape the complexities of the world and let the sheer elegance of polygonal artistry transport you to a realm of infinite inspiration.</p>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}


