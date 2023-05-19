import { Container, Row, Col, Button } from "../../utilis/Bootstrap.jsx";
import Layout from "../../layout/index.jsx";

export default function Page3() {  

  const videoUri = process.env.PUBLIC_URL + '/videos/video3lg.mp4';

  return (
    <Layout>
      <section id="page3">
        <Container>
          <Row className="d-flex 
            justify-content-center
            justify-content-lg-start
            align-items-center">
            <Col xs={11}
              md={{span:6, offset: 6}}>

              
            <div className="video-container">
              <video autoPlay muted loop>
                <source src={videoUri} type="video/mp4" /> 
              </video>
            </div>

              <div id="video-content">
                <h1>Techno Noir:<div>Vaporwave Chronicles</div></h1>
                <p>Delves deeper into the enigmatic world of virtual reality, uncovering a hidden conspiracy that blurs the lines between the digital realm and reality itself, all set against a backdrop of nostalgic vaporwave aesthetics.</p>
                <Button size="lg" variant="outline-success" className="custom-button">View Portfolio</Button>
              </div>
            

              

              


              
            </Col>          
          </Row>
        </Container>
      </section>
    </Layout>
  );
}


