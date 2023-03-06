import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from '../components/Nav'
import Template from '../components/stitch/template';

function Home() {
  return (
    <Container>
      <Row className='main'>

        <Col className='title' md={6} lg={6} xl={6}>

          <h1 className='m-4 text-white'>Artesanias Stitch</h1>
          
        </Col>

        <Col className='StitchModel' md={6} lg={6} xl={6}>
          
          <div className='luna'></div>

          <Template/>

        </Col>

      </Row>
    </Container>
  );
}

export default Home;
