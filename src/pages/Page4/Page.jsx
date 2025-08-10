import { Container, Row, Col, Button } from "../../utils/Bootstrap.jsx";
import { Pannellum } from "pannellum-react";
import Layout from "../../layout/index.jsx";
import bg from "./background/cyberpunk_city_street_sky_scrapper_busy_twlight.jpg";

export default function Page4() {

  return (
    <Layout>
      <section id="page4">      
        <div className="media-container">
          <div className="media-wrapper">
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
              
              <div className="media-content">
                <h1>Techno Noir:<div>Vaporwave Chronicles</div></h1>
                
              </div>        
            </Col>          
          </Row>
        </Container>
      
    </div>
    </section>    
     
    </Layout>
  );
}
