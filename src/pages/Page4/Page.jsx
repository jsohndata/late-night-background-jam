import { Container, Row, Col, Button } from "../../utilis/Bootstrap.jsx";
import { Pannellum } from "pannellum-react";
import Layout from "../../layout/index.jsx";
import bg from "./background/cyberpunk_city_street_sky_scrapper_busy_twlight.jpg";

export default function Page4() {

  return (
    <Layout>
      <section id="page4">      
        <div className="pan360-container">
          <div className="pan360-media">
            <Pannellum
              width="100%"
              height="100%"
              image={bg}
              yaw={180}
              hfov={110}
              autoLoad
              autoRotate={true}
              compass={false}
              showZoomCtrl={false}
              showFullscreenCtrl={false}
              mouseZoom={false} />
          </div>
        
        <Container>      
          <Row className="d-flex 
            justify-content-center
            justify-content-lg-start
            align-items-center">
            <Col xs={11}
              md={{span:6, offset: 6}}
              style={{zIndex: "10"}}>
              
              <div className="pan360-content">
                <h1>Techno Noir:<div>Vaporwave Chronicles</div></h1>
                <p>Delves deeper into the enigmatic world of virtual reality, uncovering a hidden conspiracy that blurs the lines between the digital realm and reality itself, all set against a backdrop of nostalgic vaporwave aesthetics.</p>
                <Button size="lg" variant="outline-success" className="custom-button">View Portfolio</Button>
              </div>        
            </Col>          
          </Row>
        </Container>
      
    </div>
    </section>    

      <section className="pan360-narrative">
        <Container className="p-5">
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
