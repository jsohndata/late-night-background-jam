import { Container, Row, Col, Button } from "../../utils/Bootstrap.jsx";
import Layout from "../../layout/index.jsx";

export default function Page3() {  

  const videoUri = process.env.PUBLIC_URL + '/videos/video3lg.mp4';

  return (
    <Layout>
      <section id="page3">
        
        <div className="media-container">
          <div className="media-wrapper">
            <video autoPlay muted loop>
              <source src={videoUri} type="video/mp4" /> 
            </video>
          </div>
        </div>

        <Container>
          <Row className="d-flex 
            justify-content-center
            justify-content-lg-start
            align-items-center">
            <Col xs={11}
              md={{span:6, offset: 6}}>

              <div class="media-content">
                <h1>Techno Noir:<div>Vaporwave Chronicles</div></h1>
              </div>        
            </Col>          
          </Row>
        </Container>
      </section>
    </Layout>
  );
}


