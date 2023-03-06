import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from '../components/Nav'
import CarouselStitch from '../components/Carousel'
import DropdownButton from '../components/Dropdowns';


const ArosPage = () => {
  return (

    <Container >

      <Navbar/>

      <Row>
        
        <Col className='prod-columna1' md={4} lg={6} >

          <h1 className='m-4'>Artesanias Stitch</h1>

          <DropdownButton/>

        </Col>

        <Col className='prod-columna2' md={8} lg={6}>
          <CarouselStitch/>
        </Col>
      
      </Row>

    </Container>
    
  )
}

export default ArosPage;